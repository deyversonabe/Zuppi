# Zuppi — Plataforma de Economia do Conhecimento

> **Problema real → Desafio pago → Match inteligente → Projeto guiado → Renda → Impacto**

Plataforma Next.js 15 + Supabase + OpenAI pronta para deploy no Vercel.

---

## 🚀 Deploy no Vercel (passo a passo)

### 1. Fork/push no GitHub

```bash
git init
git add .
git commit -m "feat: Zuppi v2 completo"
git remote add origin https://github.com/SEU_USUARIO/zuppi.git
git push -u origin main
```

### 2. Configurar Supabase

1. Crie um projeto em [supabase.com](https://supabase.com)
2. No SQL Editor, execute **em ordem**:
   - `supabase/migrations/001_core_users.sql`
   - `supabase/migrations/002_radar_desafios.sql`
   - `supabase/migrations/003_marketplace_match_projects.sql`
   - `supabase/migrations/004_chat_financeiro.sql`
   - `supabase/migrations/005_impacto_empreenda.sql`
   - `supabase/migrations/006_indices_rls.sql`
3. Opcionalmente execute `supabase/seed.sql` para dados demo
4. Copie as credenciais: **Project URL**, **anon key** e **service_role key**

### 3. Configurar OpenAI

1. Crie uma chave em [platform.openai.com](https://platform.openai.com)
2. Modelo recomendado: `gpt-4o-mini` (econômico e eficiente)

### 4. Deploy no Vercel

1. Importe o repositório em [vercel.com](https://vercel.com)
2. Em **Settings → Environment Variables**, adicione:

```
OPENAI_API_KEY          = sk-proj_...
OPENAI_MODEL            = gpt-4o-mini
NEXT_PUBLIC_SUPABASE_URL     = https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJ...
SUPABASE_SERVICE_ROLE_KEY     = eyJ...
NEXT_PUBLIC_SITE_URL    = https://zuppi.vercel.app
```

3. Clique em **Deploy** ✅

---

## 📁 Estrutura do projeto

```
app/
  page.tsx              ← Landing page principal
  aluno/                ← Dashboard do aluno
  mentor/               ← Dashboard do mentor
  empresa/              ← Painel da empresa
  admin/                ← Painel administrativo
  problemas/            ← Radar de Problemas
  desafios/             ← Desafios pagos
  match/                ← Match inteligente
  impacto/              ← Painel de impacto
  financeiro/           ← Wallet e extrato
  comunidade/           ← Feed da comunidade
  marketplace/          ← Marketplace de serviços
  empreenda/            ← Painel Empreenda Senac
  plataforma/           ← Visão geral de todos os módulos
  compliance/           ← LGPD e consentimentos
  api/
    ai/                 ← Endpoint unificado de IA (define o modo no corpo da requisição)
    problems/           ← CRUD problemas
    challenges/         ← CRUD desafios
    matches/            ← CRUD matches
    projects/           ← CRUD projetos
    users/              ← CRUD usuários
    impact/             ← Métricas de impacto
    transactions/       ← Transações
    conversations/      ← Conversas
    evidence/           ← Evidências
    validation-interviews/ ← Entrevistas

components/
  Mascot.tsx            ← Robô (mentor/IA) + Aluno com imagens reais
  layout/               ← Navbar, Footer, MobileBottomNav
  sections/             ← Hero, KpiStrip, CycleSection, ModulesGrid, ChallengeCards, SplitSection
  modules/              ← 20+ módulos funcionais
  forms/                ← AiConsole (10 modos IA)
  ui/                   ← Card e componentes base

lib/
  config.ts             ← Configurações da plataforma
  demo-data.ts          ← Dados de demonstração
  openai.ts             ← Cliente OpenAI
  ai/prompts.ts         ← Prompts especializados por modo
  supabase/             ← Clientes browser e admin
  api.ts                ← Helpers de resposta HTTP
  ui.ts                 ← Utilitário cn()

supabase/
  schema.sql            ← Schema completo (35+ tabelas)
  seed.sql              ← Dados iniciais
  migrations/           ← Migrations organizadas por domínio

types/
  zuppi.ts              ← Types TypeScript completos
```

---

## 🤖 Modos de IA disponíveis

| Modo       | Função                                           |
|-----------|--------------------------------------------------|
| `radar`    | Extrai dores reais e urgência do mercado         |
| `challenge`| Transforma dor validada em desafio pago          |
| `match`    | Calcula compatibilidade aluno/mentor/cliente      |
| `career`   | Trilha de carreira personalizada                  |
| `impact`   | Análise de impacto social e ODS                  |
| `pitch`    | Crítico de banca Empreenda Senac                 |
| `proposal` | Proposta comercial com ROI para empresas         |
| `validator`| Valida hipótese de negócio                       |
| `evidence` | Organiza evidências do portfólio empreendedor    |
| `lgpd`     | Revisa riscos de privacidade LGPD                |

---

## 🎨 Design System

- **Paleta**: Roxo `#7c3cff` · Magenta `#f02ecb` · Laranja `#ff7a18` · Preto `#05020f`
- **Classes**: `.glass`, `.neon-text`, `.btn-primary`, `.badge-*`, `.progress-bar`
- **Mascote Robô**: representa IA, mentor e tecnologia (`/images/hero.png`)
- **Mascote Aluno**: representa o usuário da plataforma (`/images/aluno.png`)

---

## 📋 Ciclo central da Zuppi

```
Problema real
    ↓
Desafio pago
    ↓
Match inteligente (Aluno + Mentor + Cliente)
    ↓
Projeto guiado
    ↓
Entrega + Renda
    ↓
Impacto mensurável
```

**Split de cada projeto:**
- 60% → Aluno
- 20% → Mentor
- 15% → Plataforma
- 5%  → Fundo de Impacto Circular

---

## 🏆 Empreenda Senac

O painel `/empreenda` organiza todas as evidências exigidas pela semifinal:
entrevistas, LOIs, pilotos, métricas, pitch deck e vídeo.
A IA no modo `pitch` simula críticas da banca.
