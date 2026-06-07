import { Card } from '@/components/ui/Card';
import { Users, Briefcase, DollarSign, TrendingUp, Shield, Activity } from 'lucide-react';

const recentActivity = [
  { action: 'Match criado',      user: 'Lucas Ferreira',   detail: 'App agendamento · 94%',  time: '2min'  },
  { action: 'Desafio publicado', user: 'Clínica Saúde+',   detail: 'WhatsApp Bot · R$ 1.200', time: '15min' },
  { action: 'Saque aprovado',    user: 'Camila Santos',    detail: 'R$ 750 via Pix',          time: '1h'    },
  { action: 'Problema validado', user: 'Radar IA',          detail: 'ONGs sem landing page',   time: '2h'    },
  { action: 'Novo mentor',       user: 'Pedro Souza',      detail: 'Especialidade: Dados',    time: '3h'    },
];

export function DashboardAdmin() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/40 to-fuchsia-500/30">
          <Shield size={20} className="text-violet-300" />
        </div>
        <div>
          <h2 className="text-2xl font-black">Painel Administrativo</h2>
          <p className="text-white/50">Visão geral da plataforma Zuppi</p>
        </div>
      </div>

      {/* KPIs globais */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: <Users size={20}/>,       label: 'Usuários ativos',    value: '347',      color: 'text-violet-300'  },
          { icon: <Briefcase size={20}/>,   label: 'Desafios ativos',    value: '42',       color: 'text-orange-300'  },
          { icon: <DollarSign size={20}/>,  label: 'Volume transacionado',value: 'R$ 28,4k', color: 'text-emerald-300' },
          { icon: <TrendingUp size={20}/>,  label: 'Projetos concluídos',value: '89',       color: 'text-fuchsia-300' },
          { icon: <Activity size={20}/>,    label: 'Matches este mês',   value: '23',       color: 'text-cyan-300'    },
          { icon: <Shield size={20}/>,      label: 'Alertas LGPD',       value: '0',        color: 'text-green-300'   },
        ].map((k) => (
          <Card key={k.label} className="flex items-center gap-3">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 ${k.color}`}>
              {k.icon}
            </div>
            <div>
              <p className="text-xs text-white/50">{k.label}</p>
              <b className={`text-2xl font-black ${k.color}`}>{k.value}</b>
            </div>
          </Card>
        ))}
      </div>

      {/* Atividade recente */}
      <Card>
        <h3 className="mb-4 font-black flex items-center gap-2">
          <Activity size={16} className="text-fuchsia-300" /> Atividade em tempo real
        </h3>
        <div className="space-y-3">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <div className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex-1">
                <b className="text-sm">{a.action}</b>
                <p className="text-xs text-white/50">{a.user} · {a.detail}</p>
              </div>
              <span className="text-xs text-white/35">{a.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
