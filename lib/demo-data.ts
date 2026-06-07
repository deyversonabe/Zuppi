import type { KpiCard, DemoChallenge } from '@/types/zuppi';

export const kpis: KpiCard[] = [
  { label: 'Problemas mapeados', value: '128',     delta: '+31 este mês'      },
  { label: 'Desafios ativos',    value: '42',      delta: '+12 validados'     },
  { label: 'Renda gerada',       value: 'R$ 28,4k',delta: 'hipótese MVP'     },
  { label: 'Impacto social',     value: '5%',      delta: 'fundo circular'   },
];

export const demoChallenges: DemoChallenge[] = [
  {
    title:  'Landing page para ONG local',
    area:   'Design / Web',
    reward: 'R$ 900',
    match:  96,
    days:   '10 dias',
  },
  {
    title:  'Automação de atendimento para PME',
    area:   'IA / Operação',
    reward: 'R$ 1.200',
    match:  91,
    days:   '14 dias',
  },
  {
    title:  'Campanha de descarte consciente',
    area:   'Marketing / ESG',
    reward: 'R$ 750',
    match:  88,
    days:   '7 dias',
  },
];

export const modules: [string, string][] = [
  ['Radar de Problemas',  'Coleta dores reais de empresas, comunidade e instituições, agrupando por recorrência, urgência e potencial de impacto.'],
  ['Desafios Pagos',      'Converte problemas validados em escopo, prazo, entregáveis, critério de aceite e remuneração.'],
  ['Match Inteligente',   'Combina aluno, mentor e cliente com score explicável, evidências e risco de execução.'],
  ['Zuppi AI Career',     'Orienta evolução do aluno com missões práticas, portfólio, proposta e próximos passos.'],
  ['Painel Empreenda',    'Organiza evidências, entrevistas, LOIs, pilotos, métricas, pitch e vídeo de apoio.'],
  ['Impacto Mensurável',  'Mede renda, horas mentoradas, ODS, bolsas, comunidade e impacto ambiental.'],
];

export const demoStudentDashboard = {
  name: 'Lucas Ferreira',
  score: 87,
  level: 4,
  xp: 2340,
  xpNext: 3000,
  renda: 'R$ 3.200',
  projetos: 5,
  problemas: [
    { title: 'Automação WhatsApp para clínica',  match: 94, reward: 'R$ 1.100', area: 'IA/Automação',    days: '12 dias' },
    { title: 'Identidade visual para startup',   match: 89, reward: 'R$ 850',  area: 'Design',          days: '8 dias'  },
    { title: 'Planilha de controle financeiro',  match: 83, reward: 'R$ 600',  area: 'Finanças/Excel',  days: '5 dias'  },
  ],
  projetoAtivo: {
    title: 'App de agendamento para barbearia',
    progresso: 68,
    prazo: '3 dias restantes',
    mentor: 'Ana Lima',
    cliente: 'Barbearia do Mário',
  },
};

export const demoImpact = {
  horasMentoradas: 1240,
  bolsasConcedidas: 87,
  rendaGerada: 142000,
  projetosSociais: 34,
  co2Compensado: 12.4,
  odsImpactados: [4, 8, 10, 11, 17],
};
