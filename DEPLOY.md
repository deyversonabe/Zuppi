# 🚀 Deploy Zuppi v2 — Guia Rápido

## Opção A — Script automático (recomendado)

```bash
# Extraia o ZIP, entre na pasta e execute:
cd zuppi
bash push-to-github.sh
```

## Opção B — Comandos manuais

```bash
cd zuppi

# Se o repositório já existe no GitHub (deyversonabe/zuppi):
git init
git remote add origin https://github.com/deyversonabe/zuppi.git
git checkout -B main
git add .
git commit -m "feat: Zuppi v2 completo"
git push origin main --force
```

## Vercel — Variáveis de Ambiente obrigatórias

| Variável | Onde pegar |
|---|---|
| `OPENAI_API_KEY` | platform.openai.com → API Keys |
| `OPENAI_MODEL` | `gpt-4o-mini` (já definido) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API |
| `NEXT_PUBLIC_SITE_URL` | URL do seu projeto no Vercel |

## Supabase — Executar migrations em ordem

No **SQL Editor** do Supabase, rode cada arquivo:

1. `supabase/migrations/001_core_users.sql`
2. `supabase/migrations/002_radar_desafios.sql`
3. `supabase/migrations/003_marketplace_match_projects.sql`
4. `supabase/migrations/004_chat_financeiro.sql`
5. `supabase/migrations/005_impacto_empreenda.sql`
6. `supabase/migrations/006_indices_rls.sql`

## Estrutura de rotas

| URL | Página |
|---|---|
| `/` | Landing page com hero, KPIs, ciclo, desafios, IA |
| `/aluno` | Dashboard + ChatIA + Score |
| `/mentor` | Dashboard + sessões |
| `/empresa` | Painel + formulário de problema |
| `/admin` | Painel admin + audit log |
| `/problemas` | Radar de Problemas |
| `/desafios` | Desafios pagos com filtros |
| `/match` | Match inteligente |
| `/impacto` | Painel de impacto + ODS |
| `/financeiro` | Wallet + extrato + saque |
| `/comunidade` | Feed da comunidade |
| `/marketplace` | Serviços dos alunos |
| `/empreenda` | Painel Empreenda Senac |
| `/plataforma` | Todos os módulos juntos |
| `/compliance` | LGPD e consentimentos |
| `/api/ai` | Endpoint unificado de IA (modo definido no corpo) |
