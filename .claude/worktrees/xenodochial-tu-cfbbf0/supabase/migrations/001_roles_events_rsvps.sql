-- ============================================================
-- Migration: Profiles, Org Events, Event RSVPs
-- Run this in the Supabase SQL Editor
-- ============================================================

-- ── 1. PROFILES ─────────────────────────────────────────────

create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text not null default '',
  full_name   text not null default '',
  role        text not null default 'member' check (role in ('member','board','admin')),
  created_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- All authenticated users can read profiles
create policy "profiles: authenticated can select"
  on public.profiles for select
  to authenticated
  using (true);

-- Users can update their own profile row (but NOT the role column — enforced in app)
create policy "profiles: users update own"
  on public.profiles for update
  to authenticated
  using (id = auth.uid());

-- Only service role can insert (via trigger)
create policy "profiles: service role insert"
  on public.profiles for insert
  to service_role
  with check (true);

-- ── 2. HELPER FUNCTION (prevents RLS recursion) ─────────────

create or replace function public.get_my_role()
returns text language sql stable security definer set search_path = public as $$
  select role from public.profiles where id = auth.uid();
$$;

-- ── 3. TRIGGER (auto-create profile on signup) ──────────────

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare _role text := 'member';
begin
  if new.email = 'dianawolfchicago@gmail.com' then _role := 'admin'; end if;
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    _role
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ── 4. ORG EVENTS ───────────────────────────────────────────

create table if not exists public.org_events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  date_key    text not null,  -- 'YYYY-MM-DD'
  date_label  text not null,  -- e.g. 'January 14, 2026'
  time        text not null default '',
  location    text not null default '',
  type        text not null default 'Meeting',
  created_by  uuid references auth.users(id) on delete set null,
  created_at  timestamptz not null default now()
);

alter table public.org_events enable row level security;

-- All authenticated users can read
create policy "org_events: authenticated can select"
  on public.org_events for select
  to authenticated
  using (true);

-- Board and admin can insert
create policy "org_events: board and admin can insert"
  on public.org_events for insert
  to authenticated
  with check (public.get_my_role() in ('board', 'admin'));

-- Admin can update any; board can update own
create policy "org_events: board updates own, admin updates any"
  on public.org_events for update
  to authenticated
  using (
    public.get_my_role() = 'admin'
    or (public.get_my_role() = 'board' and created_by = auth.uid())
  );

-- Admin can delete any; board can delete own
create policy "org_events: board deletes own, admin deletes any"
  on public.org_events for delete
  to authenticated
  using (
    public.get_my_role() = 'admin'
    or (public.get_my_role() = 'board' and created_by = auth.uid())
  );

-- ── 5. EVENT RSVPS ──────────────────────────────────────────

create table if not exists public.event_rsvps (
  id          uuid primary key default gen_random_uuid(),
  event_id    uuid not null references public.org_events(id) on delete cascade,
  -- References profiles directly so PostgREST can join event_rsvps → profiles
  user_id     uuid not null references public.profiles(id) on delete cascade,
  status      text not null check (status in ('yes','no')),
  created_at  timestamptz not null default now(),
  unique(event_id, user_id)
);

alter table public.event_rsvps enable row level security;

-- All authenticated users can read RSVPs (to show attendee lists)
create policy "event_rsvps: authenticated can select"
  on public.event_rsvps for select
  to authenticated
  using (true);

-- Users can insert their own RSVPs
create policy "event_rsvps: users insert own"
  on public.event_rsvps for insert
  to authenticated
  with check (user_id = auth.uid());

-- Users can update their own RSVPs
create policy "event_rsvps: users update own"
  on public.event_rsvps for update
  to authenticated
  using (user_id = auth.uid());

-- Users can delete their own RSVPs
create policy "event_rsvps: users delete own"
  on public.event_rsvps for delete
  to authenticated
  using (user_id = auth.uid());

-- ── 6. BACKFILL existing auth users into profiles ───────────

insert into public.profiles (id, email, full_name, role)
select
  id,
  coalesce(email, ''),
  coalesce(raw_user_meta_data->>'full_name', ''),
  case when email = 'dianawolfchicago@gmail.com' then 'admin' else 'member' end
from auth.users
on conflict (id) do nothing;

-- ── 7. SEED org events (17 events) ──────────────────────────
-- Replace the created_by UUID below with the admin user's actual UUID
-- (run: SELECT id FROM auth.users WHERE email = 'dianawolfchicago@gmail.com')

do $$
declare admin_id uuid;
begin
  select id into admin_id from auth.users where email = 'dianawolfchicago@gmail.com' limit 1;
  if admin_id is null then
    raise notice 'Admin user not found — seeding events with null created_by';
  end if;

  insert into public.org_events (title, date_key, date_label, time, location, type, created_by) values
    ('Monthly Member Meeting',     '2026-01-14', 'January 14, 2026',    '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Snowball Kick-Off Party',    '2026-01-17', 'January 17, 2026',    '7:00 PM – 10:00 PM', 'TBD, Chicago',                 'Event',     admin_id),
    ('Monthly Member Meeting',     '2026-02-11', 'February 11, 2026',   '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Monthly Member Meeting',     '2026-03-11', 'March 11, 2026',      '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Derby Party',                '2026-04-25', 'April 25, 2026',      '4:00 PM – 8:00 PM',  'TBD, Chicago',                 'Fundraiser',admin_id),
    ('Monthly Member Meeting',     '2026-04-08', 'April 8, 2026',       '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Monthly Member Meeting',     '2026-05-13', 'May 13, 2026',        '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Monthly Member Meeting',     '2026-06-10', 'June 10, 2026',       '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Happy Hour',                 '2026-06-18', 'June 18, 2026',       '6:00 PM – 9:00 PM',  'TBD, Chicago',                 'Social',    admin_id),
    ('Cruising for a Cause',       '2026-07-12', 'July 12, 2026',       '5:00 PM – 9:00 PM',  'Navy Pier, Chicago',           'Fundraiser',admin_id),
    ('Happy Hour — Summer Edition','2026-08-06', 'August 6, 2026',      '6:00 PM – 9:00 PM',  'Venteux, Chicago',             'Social',    admin_id),
    ('Monthly Member Meeting',     '2026-09-09', 'September 9, 2026',   '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Annual Golf Outing',         '2026-09-19', 'September 19, 2026',  '8:00 AM – 4:00 PM',  'Cog Hill Golf & Country Club', 'Fundraiser',admin_id),
    ('Monthly Member Meeting',     '2026-10-14', 'October 14, 2026',    '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Monthly Member Meeting',     '2026-11-04', 'November 4, 2026',    '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id),
    ('Holiday Happy Hour',         '2026-12-10', 'December 10, 2026',   '6:00 PM – 9:00 PM',  'TBD, Chicago',                 'Social',    admin_id),
    ('Monthly Member Meeting',     '2026-12-09', 'December 9, 2026',    '6:30 PM – 8:00 PM',  'The Drake Hotel, Chicago',     'Meeting',   admin_id)
  on conflict do nothing;
end;
$$;
