import { Card } from '@/components/ui/Card';
import { Star, Users, Clock, TrendingUp } from 'lucide-react';

const sessions = [
  { aluno: 'Lucas Ferreira',    desafio: 'App de agendamento',         status: 'em_andamento', nota: null    },
  { aluno: 'Camila Santos',     desafio: 'Identidade visual startup',   status: 'concluido',    nota: 4.9     },
  { aluno: 'Rafael Oliveira',   desafio: 'Automação WhatsApp',          status: 'agendado',     nota: null    },
];

const statusLabel: Record<string, { text: string; cls: string }> = {
  em_andamento: { text: 'Em andamento', cls: 'badge-orange'  },
  concluido:    { text: 'Concluído',    cls: 'badge-green'   },
  agendado:     { text: 'Agendado',     cls: 'badge-purple'  },
};

export function DashboardMentor() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass rounded-[2rem] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-black">Painel do Mentor</h2>
            <p className="mt-1 text-white/55">Ana Lima · Especialista em UX e Produto</p>
          </div>
          <div className="flex gap-3">
            <div className="glass rounded-2xl px-4 py-3 text-center">
              <b className="block text-2xl font-black text-orange-300">4.9</b>
              <p className="text-xs text-white/50">reputação</p>
            </div>
            <div className="glass rounded-2xl px-4 py-3 text-center">
              <b className="block text-2xl font-black text-fuchsia-300">R$ 8.400</b>
              <p className="text-xs text-white/50">ganhos totais</p>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { icon: <Users size={18}/>,      label: 'Alunos ativos',    value: '12'    },
          { icon: <Clock size={18}/>,      label: 'Horas mentoradas', value: '187'   },
          { icon: <TrendingUp size={18}/>, label: 'Projetos guiados', value: '28'    },
          { icon: <Star size={18}/>,       label: 'Avaliação média',  value: '4.9 ★' },
        ].map((k) => (
          <Card key={k.label} className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/8 text-orange-300">
              {k.icon}
            </div>
            <div>
              <p className="text-xs text-white/50">{k.label}</p>
              <b className="text-lg font-black">{k.value}</b>
            </div>
          </Card>
        ))}
      </div>

      {/* Sessões */}
      <Card>
        <h3 className="mb-4 text-xl font-black">Sessões recentes</h3>
        <div className="space-y-3">
          {sessions.map((s) => (
            <div key={s.aluno} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/30 to-violet-600/30 font-black text-sm">
                {s.aluno.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <b className="text-sm">{s.aluno}</b>
                <p className="text-xs text-white/50">{s.desafio}</p>
              </div>
              <div className="flex items-center gap-2">
                {s.nota && <span className="text-sm text-yellow-400">★ {s.nota}</span>}
                <span className={`badge ${statusLabel[s.status].cls}`}>{statusLabel[s.status].text}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
