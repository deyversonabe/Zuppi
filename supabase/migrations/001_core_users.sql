-- Zuppi schema completo e auditado para Supabase
-- Estratégia: problema real -> desafio pago -> match inteligente -> projeto guiado -> renda -> impacto.
create extension if not exists pgcrypto;
create extension if not exists vector;

create type public.user_role as enum ('aluno','mentor','empresa','admin');
create type public.challenge_status as enum ('rascunho','validado','aberto','em_andamento','concluido','cancelado');
create type public.project_status as enum ('match','contratado','em_andamento','em_revisao','concluido','cancelado');
create type public.transaction_status as enum ('pendente','pago','repassado','estornado','cancelado');
create type public.conversation_type as enum ('suporte','projeto','mentoria','empresa','empreenda');

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;

create table if not exists public.platform_users (id uuid primary key default gen_random_uuid(), auth_user_id uuid references auth.users(id) on delete set null, role public.user_role not null default 'aluno', name text not null, email text not null unique, phone text, avatar_url text, bio text, skills text[] not null default '{}', city text, state text, score numeric(5,2) not null default 0, lgpd_accepted boolean not null default false, metadata jsonb not null default '{}', created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.student_profiles (user_id uuid primary key references public.platform_users(id) on delete cascade, education_level text, portfolio_url text, weekly_hours int default 0, career_goal text, xp int default 0, level int default 1, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.mentor_profiles (user_id uuid primary key references public.platform_users(id) on delete cascade, expertise text[] default '{}', hourly_rate_cents int default 0, reputation numeric(5,2) default 0, available_slots jsonb default '{}', created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.companies (id uuid primary key default gen_random_uuid(), owner_id uuid references public.platform_users(id) on delete set null, name text not null, cnpj text, segment text, contact_email text, contact_phone text, city text, state text, description text, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.company_members (company_id uuid references public.companies(id) on delete cascade, user_id uuid references public.platform_users(id) on delete cascade, role text default 'member', created_at timestamptz default now(), primary key(company_id,user_id));

