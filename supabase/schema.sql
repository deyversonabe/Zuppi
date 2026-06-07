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

create table if not exists public.problems (id uuid primary key default gen_random_uuid(), title text not null, description text not null, source text default 'manual', source_contact text, segment text, urgency smallint default 3 check(urgency between 1 and 5), recurrence smallint default 3 check(recurrence between 1 and 5), impact_potential smallint default 3 check(impact_potential between 1 and 5), status text default 'novo', tags text[] default '{}', ai_cluster text, ai_summary text, evidence_level smallint default 1, created_by uuid references public.platform_users(id) on delete set null, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.problem_votes (id uuid primary key default gen_random_uuid(), problem_id uuid references public.problems(id) on delete cascade, user_id uuid references public.platform_users(id) on delete set null, vote smallint check(vote in (-1,1)), note text, created_at timestamptz default now());
create table if not exists public.challenges (id uuid primary key default gen_random_uuid(), problem_id uuid references public.problems(id) on delete set null, client_id uuid references public.platform_users(id) on delete set null, company_id uuid references public.companies(id) on delete set null, title text not null, description text not null, area text not null, reward_cents integer not null default 0, deadline_days integer not null default 7, status public.challenge_status not null default 'aberto', required_skills text[] default '{}', impact_tags text[] default '{}', deliverables text[] default '{}', acceptance_criteria text[] default '{}', ai_summary text, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.challenge_applications (id uuid primary key default gen_random_uuid(), challenge_id uuid references public.challenges(id) on delete cascade, student_id uuid references public.platform_users(id) on delete cascade, pitch text, status text default 'enviado', created_at timestamptz default now(), updated_at timestamptz default now());

create table if not exists public.services (id uuid primary key default gen_random_uuid(), owner_id uuid references public.platform_users(id) on delete cascade, title text not null, description text not null, category text not null, package_type text default 'starter', price_cents int default 0, delivery_days int default 7, portfolio_urls text[] default '{}', is_active boolean default true, ai_optimized_description text, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.service_orders (id uuid primary key default gen_random_uuid(), service_id uuid references public.services(id) on delete set null, buyer_id uuid references public.platform_users(id) on delete set null, seller_id uuid references public.platform_users(id) on delete set null, status text default 'novo', amount_cents int default 0, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.portfolio_items (id uuid primary key default gen_random_uuid(), user_id uuid references public.platform_users(id) on delete cascade, title text not null, description text, url text, media_urls text[] default '{}', skills text[] default '{}', created_at timestamptz default now());

create table if not exists public.matches (id uuid primary key default gen_random_uuid(), challenge_id uuid references public.challenges(id) on delete cascade, student_id uuid references public.platform_users(id) on delete cascade, mentor_id uuid references public.platform_users(id) on delete set null, client_id uuid references public.platform_users(id) on delete set null, compatibility_score numeric(5,2) default 0, reasons jsonb default '[]', risks jsonb default '[]', status text default 'sugerido', created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.compatibility_scores (id uuid primary key default gen_random_uuid(), match_id uuid references public.matches(id) on delete cascade, criteria text not null, score numeric(5,2) not null, weight numeric(5,2) not null, explanation text, created_at timestamptz default now());
create table if not exists public.projects (id uuid primary key default gen_random_uuid(), challenge_id uuid references public.challenges(id) on delete set null, match_id uuid references public.matches(id) on delete set null, student_id uuid references public.platform_users(id) on delete set null, mentor_id uuid references public.platform_users(id) on delete set null, client_id uuid references public.platform_users(id) on delete set null, title text not null, scope text not null, status public.project_status default 'match', value_cents int default 0, due_date date, progress smallint default 0 check(progress between 0 and 100), evidence_urls text[] default '{}', ai_next_steps text, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.project_milestones (id uuid primary key default gen_random_uuid(), project_id uuid references public.projects(id) on delete cascade, title text not null, description text, due_date date, status text default 'pendente', created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.deliverables (id uuid primary key default gen_random_uuid(), project_id uuid references public.projects(id) on delete cascade, title text not null, description text, file_urls text[] default '{}', status text default 'enviado', created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.reviews (id uuid primary key default gen_random_uuid(), project_id uuid references public.projects(id) on delete cascade, reviewer_id uuid references public.platform_users(id) on delete set null, reviewed_id uuid references public.platform_users(id) on delete set null, rating smallint check(rating between 1 and 5), comment text, created_at timestamptz default now());

create table if not exists public.conversations (id uuid primary key default gen_random_uuid(), type public.conversation_type default 'projeto', title text not null, project_id uuid references public.projects(id) on delete cascade, created_by uuid references public.platform_users(id) on delete set null, metadata jsonb default '{}', created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.conversation_participants (conversation_id uuid references public.conversations(id) on delete cascade, user_id uuid references public.platform_users(id) on delete cascade, role text default 'member', created_at timestamptz default now(), primary key(conversation_id,user_id));
create table if not exists public.messages (id uuid primary key default gen_random_uuid(), conversation_id uuid references public.conversations(id) on delete cascade, sender_id uuid references public.platform_users(id) on delete set null, body text not null, attachment_urls text[] default '{}', ai_generated boolean default false, created_at timestamptz default now());

create table if not exists public.transactions (id uuid primary key default gen_random_uuid(), project_id uuid references public.projects(id) on delete set null, payer_id uuid references public.platform_users(id) on delete set null, amount_cents int not null, currency text default 'BRL', stripe_payment_intent_id text, status public.transaction_status default 'pendente', created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.revenue_splits (id uuid primary key default gen_random_uuid(), transaction_id uuid references public.transactions(id) on delete cascade, beneficiary_id uuid references public.platform_users(id) on delete set null, label text check(label in ('aluno','mentor','plataforma','impacto')), percent numeric(5,2) not null, amount_cents int not null, created_at timestamptz default now());
create table if not exists public.wallets (user_id uuid primary key references public.platform_users(id) on delete cascade, available_cents int default 0, pending_cents int default 0, lifetime_cents int default 0, updated_at timestamptz default now());
create table if not exists public.withdrawals (id uuid primary key default gen_random_uuid(), user_id uuid references public.platform_users(id) on delete cascade, amount_cents int not null, status text default 'solicitado', pix_key text, created_at timestamptz default now(), updated_at timestamptz default now());

create table if not exists public.benefits (id uuid primary key default gen_random_uuid(), title text not null, description text not null, category text not null, eligibility_rules jsonb default '{}', is_active boolean default true, created_at timestamptz default now());
create table if not exists public.user_benefits (id uuid primary key default gen_random_uuid(), user_id uuid references public.platform_users(id) on delete cascade, benefit_id uuid references public.benefits(id) on delete cascade, status text default 'ativo', created_at timestamptz default now());
create table if not exists public.human_scores (id uuid primary key default gen_random_uuid(), user_id uuid references public.platform_users(id) on delete cascade, communication numeric(5,2) default 0, reliability numeric(5,2) default 0, delivery_quality numeric(5,2) default 0, learning_evolution numeric(5,2) default 0, impact numeric(5,2) default 0, total numeric(5,2) default 0, explanation text, created_at timestamptz default now());
create table if not exists public.impact_metrics (id uuid primary key default gen_random_uuid(), project_id uuid references public.projects(id) on delete set null, title text not null, metric_type text not null, value numeric(12,2) default 0, unit text not null, ods text[] default '{}', evidence_url text, created_at timestamptz default now());
create table if not exists public.impact_fund (id uuid primary key default gen_random_uuid(), transaction_id uuid references public.transactions(id) on delete set null, amount_cents int not null, destination text default 'fundo_circular', status text default 'reservado', created_at timestamptz default now());

create table if not exists public.evidences (id uuid primary key default gen_random_uuid(), title text not null, description text, evidence_type text not null, source_url text, file_urls text[] default '{}', related_table text, related_id uuid, tags text[] default '{}', created_by uuid references public.platform_users(id) on delete set null, created_at timestamptz default now());
create table if not exists public.validation_interviews (id uuid primary key default gen_random_uuid(), profile text not null, interviewee_name text, interviewee_contact text, summary text not null, pains text[] default '{}', objections text[] default '{}', willingness_to_pay text, consent_given boolean default false, created_at timestamptz default now());
create table if not exists public.lois (id uuid primary key default gen_random_uuid(), company_name text not null, contact_name text, contact_email text, interest_summary text not null, estimated_value_cents int default 0, status text default 'rascunho', file_url text, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.pilots (id uuid primary key default gen_random_uuid(), title text not null, partner text, objective text, status text default 'planejado', start_date date, end_date date, results jsonb default '{}', created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.pitch_assets (id uuid primary key default gen_random_uuid(), title text not null, asset_type text not null, content text, file_url text, version int default 1, created_at timestamptz default now());

create table if not exists public.contracts (id uuid primary key default gen_random_uuid(), project_id uuid references public.projects(id) on delete set null, client_id uuid references public.platform_users(id) on delete set null, student_id uuid references public.platform_users(id) on delete set null, mentor_id uuid references public.platform_users(id) on delete set null, terms text not null, status text default 'rascunho', signed_at timestamptz, created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.consents (id uuid primary key default gen_random_uuid(), user_id uuid references public.platform_users(id) on delete cascade, consent_type text not null, granted boolean default true, version text default '1.0', ip_address text, user_agent text, created_at timestamptz default now());
create table if not exists public.audit_logs (id uuid primary key default gen_random_uuid(), actor_id uuid references public.platform_users(id) on delete set null, action text not null, entity_table text, entity_id uuid, metadata jsonb default '{}', created_at timestamptz default now());
create table if not exists public.ai_logs (id uuid primary key default gen_random_uuid(), user_id uuid references public.platform_users(id) on delete set null, mode text not null, prompt text not null, response text not null, model text, created_at timestamptz default now());
create table if not exists public.embeddings_index (id uuid primary key default gen_random_uuid(), entity_table text not null, entity_id uuid not null, content text not null, embedding vector(1536), created_at timestamptz default now());

-- Índices
create index if not exists idx_users_role on public.platform_users(role);
create index if not exists idx_problems_status on public.problems(status);
create index if not exists idx_challenges_status on public.challenges(status);
create index if not exists idx_projects_status on public.projects(status);
create index if not exists idx_messages_conversation on public.messages(conversation_id, created_at);
create index if not exists idx_ai_logs_mode on public.ai_logs(mode, created_at);

-- Triggers updated_at
DO $$ DECLARE r record; BEGIN FOR r IN SELECT tablename FROM pg_tables WHERE schemaname='public' AND tablename IN ('platform_users','student_profiles','mentor_profiles','companies','problems','challenges','challenge_applications','services','service_orders','matches','projects','project_milestones','deliverables','conversations','transactions','withdrawals','lois','pilots','contracts') LOOP EXECUTE format('drop trigger if exists set_updated_at on public.%I', r.tablename); EXECUTE format('create trigger set_updated_at before update on public.%I for each row execute function public.touch_updated_at()', r.tablename); END LOOP; END $$;

-- RLS inicial: bloqueia por padrão e libera leitura pública controlada em tabelas não sensíveis.
alter table public.platform_users enable row level security;
alter table public.problems enable row level security;
alter table public.challenges enable row level security;
alter table public.services enable row level security;
alter table public.impact_metrics enable row level security;

drop policy if exists "public read challenges" on public.challenges;
create policy "public read challenges" on public.challenges for select using (status in ('aberto','validado','em_andamento','concluido'));
drop policy if exists "public read services" on public.services;
create policy "public read services" on public.services for select using (is_active = true);
drop policy if exists "public read impact" on public.impact_metrics;
create policy "public read impact" on public.impact_metrics for select using (true);

--
-- Tabela `site_users`
--
-- Esta tabela armazena as credenciais de acesso dos perfis de usuários da
-- plataforma (aluno, mentor e empresa). As senhas são armazenadas
-- somente em forma de hash. O campo `role` restringe os valores
-- permitidos a 'student', 'mentor' ou 'client'.

CREATE TABLE IF NOT EXISTS site_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('student', 'mentor', 'client')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
