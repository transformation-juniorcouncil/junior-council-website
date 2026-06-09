-- ============================================================
-- Migration 002: Extended profile fields + dues/board columns
-- Run this in the Supabase SQL Editor
-- ============================================================

alter table public.profiles
  add column if not exists dues_paid    boolean     not null default false,
  add column if not exists board_title  text        not null default '',
  add column if not exists pronouns     text        not null default '',
  add column if not exists avatar_url   text        not null default '',
  add column if not exists bio          text        not null default '',
  add column if not exists job_title    text        not null default '',
  add column if not exists company      text        not null default '',
  add column if not exists college      text        not null default '',
  add column if not exists degree       text        not null default '',
  add column if not exists grad_year    text        not null default '',
  add column if not exists neighborhood text        not null default '',
  add column if not exists linkedin     text        not null default '',
  add column if not exists instagram    text        not null default '',
  add column if not exists why_joined   text        not null default '',
  add column if not exists fun_fact     text        not null default '',
  add column if not exists interests    text[]      not null default '{}';
