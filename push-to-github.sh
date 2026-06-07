#!/bin/bash
# =============================================================
# Zuppi v2 — Push para GitHub (deyversonabe/zuppi)
# Execute este script na raiz do projeto extraído do ZIP
# =============================================================

echo "🚀 Iniciando push Zuppi v2 para GitHub..."

# Verificar se git está inicializado
if [ ! -d ".git" ]; then
  echo "📁 Inicializando repositório Git..."
  git init
  git remote add origin https://github.com/deyversonabe/zuppi.git
else
  echo "✅ Git já inicializado."
  # Garantir que o remote está correto
  git remote set-url origin https://github.com/deyversonabe/zuppi.git
fi

# Configurar branch main
git checkout -B main

# Adicionar todos os arquivos
echo "📦 Adicionando arquivos..."
git add .

# Status resumido
echo ""
echo "📋 Arquivos que serão enviados:"
git status --short | head -30
echo ""

# Commit
git commit -m "feat: Zuppi v2 — plataforma completa com IA, Supabase e mascotes

- 22 módulos funcionais reconstruídos (dashboards, match, radar, impacto, financeiro)
 - Endpoint unificado /api/ai criado (modo definido no corpo) com 10 modos especializados OpenAI
- Mascote robô (mentor/IA) e aluno com imagens reais integradas
- ChatIA com conversação e sugestões
- DashboardAluno, DashboardMentor, DashboardEmpresa, DashboardAdmin completos
- RadarProblemas com cards de urgência/recorrência/impacto
- MatchInteligente com score por critério e visualização do trio
- ScoreHumano com 5 critérios e desbloqueio de níveis
- PainelImpacto com ODS e fundo circular
- PainelFinanceiro com extrato e saque via Pix
- PainelEmpreenda com checklist e evidências Senac
- 14 páginas roteadas (/, /aluno, /mentor, /empresa, /admin, /problemas, /desafios, /match, /impacto, /financeiro, /comunidade, /marketplace, /empreenda, /plataforma, /compliance)
- Design system CSS completo (roxo/magenta/laranja/preto)
- Schema Supabase com 35+ tabelas e migrations
- Modelo OpenAI corrigido para gpt-4o-mini
- next.config.mjs limpo para Vercel
- package.json com versões fixas"

echo ""
echo "🌐 Enviando para GitHub..."
git push -u origin main --force

echo ""
echo "✅ Push concluído!"
echo "🔗 Repositório: https://github.com/deyversonabe/zuppi"
echo ""
echo "📋 PRÓXIMOS PASSOS — Vercel:"
echo "  1. Acesse https://vercel.com/new"
echo "  2. Importe: deyversonabe/zuppi"
echo "  3. Adicione as variáveis de ambiente do .env.example"
echo "  4. Clique Deploy!"
echo ""
echo "🗄️  Supabase:"
echo "  Execute em ordem no SQL Editor:"
echo "  supabase/migrations/001_core_users.sql"
echo "  supabase/migrations/002_radar_desafios.sql"
echo "  supabase/migrations/003_marketplace_match_projects.sql"
echo "  supabase/migrations/004_chat_financeiro.sql"
echo "  supabase/migrations/005_impacto_empreenda.sql"
echo "  supabase/migrations/006_indices_rls.sql"
