-- ============================================================
-- Migration: Ticket Notifications
-- Run this in the Supabase SQL Editor
-- ============================================================

create table if not exists public.ticket_notifications (
  id         uuid primary key default gen_random_uuid(),
  email      text not null,
  created_at timestamptz not null default now(),
  constraint ticket_notifications_email_key unique (email)
);

alter table public.ticket_notifications enable row level security;

-- Only service role can read (for admin export)
create policy "ticket_notifications: service role only"
  on public.ticket_notifications for all
  using (false);
