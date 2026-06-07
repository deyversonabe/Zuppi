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
