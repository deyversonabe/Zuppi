import { Card } from '@/components/ui/Card';
import { Star, MessageSquare, CheckSquare, TrendingUp, Globe } from 'lucide-react';

const criteria = [
  { key: 'Comunicação',         icon: <MessageSquare size={18}/>, score: 91, weight: 20, desc: 'Clareza, pontualidade e pro-atividade' },
  { key: 'Confiabilidade',      icon: <CheckSquare size={18}/>,   score: 86, weight: 25, desc: 'Entregas no prazo e sem retrabalho'   },
  { key: 'Qualidade de entrega',icon: <Star size={18}/>,          score: 89, weight: 30, desc: 'Padrão técnico e atenção aos critérios' },
  { key: 'Evolução contínua',   icon: <TrendingUp size={18}/>,    score: 83, weight: 15, desc: 'Aprendizado entre projetos'           },
  { key: 'Impacto gerado',      icon: <Globe size={18}/>,         score: 78, weight: 10, desc: 'Resultado real para o cliente'        },
];

function total(items: typeof criteria) {
  return Math.round(items.reduce((acc, c) => acc + (c.score * c.weight) / 100, 0));
}

export function ScoreHumano() {
  const overall = total(criteria);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black">Score de Evolução Humana</h2>
        <p className="mt-1 text-white/55">Muito mais forte que um certificado. Mede quem você é, não só o que você sabe.</p>
      </div>

      {/* Score principal */}
      <div className="glass rounded-[2rem] p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 to-fuchsia-500/10" />
        <p className="relative text-sm text-white/50 uppercase tracking-widest">Score Geral</p>
        <div className="relative mt-2 flex items-end justify-center gap-2">
          <span className="neon-text text-8xl font-black leading-none">{overall}</span>
          <span className="mb-3 text-3xl text-white/40">/100</span>
        </div>
        <div className="relative mt-4">
          {overall >= 85 ? (
            <span className="badge badge-green text-sm">🏆 Perfil Avançado</span>
          ) : overall >= 70 ? (
            <span className="badge badge-orange text-sm">⚡ Perfil Intermediário</span>
          ) : (
            <span className="badge badge-purple text-sm">🌱 Em desenvolvimento</span>
          )}
        </div>
      </div>

      {/* Critérios */}
      <Card>
        <h3 className="mb-5 font-black">Critérios de avaliação</h3>
        <div className="space-y-5">
          {criteria.map((c) => (
            <div key={c.key}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-300">{c.icon}</span>
                  <div>
                    <b className="text-sm">{c.key}</b>
                    <p className="text-xs text-white/45">{c.desc}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <b className="text-xl text-orange-300">{c.score}</b>
                  <p className="text-[10px] text-white/40">peso {c.weight}%</p>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${c.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* O que muda com o score */}
      <Card className="bg-gradient-to-br from-violet-600/10 to-fuchsia-500/8">
        <h3 className="mb-4 font-black">O que o score desbloquia</h3>
        <ul className="space-y-3">
          {[
            { threshold: 60, label: 'Acesso a desafios até R$ 500'    },
            { threshold: 70, label: 'Desafios até R$ 1.500 + match prioritário' },
            { threshold: 85, label: 'Desafios ilimitados + destaque no Radar'  },
            { threshold: 90, label: 'Acesso a clientes premium e LOIs diretas' },
          ].map((item) => (
            <li key={item.threshold} className={`flex items-center gap-3 text-sm ${overall >= item.threshold ? 'text-white' : 'text-white/35'}`}>
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${overall >= item.threshold ? 'bg-emerald-500 text-white' : 'bg-white/10 text-white/30'}`}>
                {overall >= item.threshold ? '✓' : item.threshold}
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
