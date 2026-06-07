import { Card } from '@/components/ui/Card';
import { Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const matchData = {
  desafio: 'Automação de atendimento WhatsApp para clínica',
  aluno: { name: 'Lucas Ferreira', skills: ['JavaScript', 'n8n', 'APIs'], score: 87 },
  mentor: { name: 'Ana Lima', expertise: ['Produto', 'UX', 'IA'], reputation: 4.9 },
  cliente: { name: 'Clínica Saúde+', segment: 'Saúde', city: 'Ribeirão Preto' },
  scores: [
    { criteria: 'Habilidades técnicas',   score: 94, weight: 35 },
    { criteria: 'Histórico de entregas',  score: 82, weight: 25 },
    { criteria: 'Disponibilidade',        score: 90, weight: 20 },
    { criteria: 'Fit com cliente',        score: 88, weight: 12 },
    { criteria: 'Fit com mentor',         score: 96, weight: 8  },
  ],
  reasons: [
    'Aluno já trabalhou com automação de WhatsApp em projeto anterior',
    'Mentor tem experiência específica em produto digital para saúde',
    'Disponibilidade do aluno alinhada ao prazo de 12 dias',
  ],
  risks: [
    'Primeiro projeto de valor acima de R$ 1.000 do aluno',
    'Cliente sem experiência com equipes remotas',
  ],
};

function weightedScore(scores: typeof matchData.scores) {
  return Math.round(
    scores.reduce((acc, s) => acc + (s.score * s.weight) / 100, 0)
  );
}

export function MatchInteligente() {
  const total = weightedScore(matchData.scores);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-violet-600/30">
            <Zap size={20} className="text-fuchsia-300" />
          </div>
          <h2 className="text-2xl font-black">Match Inteligente</h2>
        </div>
        <p className="text-white/55">{matchData.desafio}</p>
      </div>

      {/* Score geral */}
      <div className="glass rounded-[2rem] p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-violet-600/10" />
        <p className="relative text-sm text-white/55">Compatibilidade geral</p>
        <div className="relative mt-2 flex items-end justify-center gap-2">
          <span className="neon-text text-7xl font-black leading-none">{total}</span>
          <span className="mb-2 text-2xl text-white/50">%</span>
        </div>
        <div className="relative mt-4 flex justify-center gap-2">
          {total >= 85 ? (
            <span className="badge badge-green"><CheckCircle size={12}/> Match recomendado</span>
          ) : (
            <span className="badge badge-orange"><AlertTriangle size={12}/> Verificar riscos</span>
          )}
        </div>
      </div>

      {/* Trio do match */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Aluno */}
        <Card className="text-center">
          <div className="mx-auto mb-3 relative h-16 w-16">
            <Image src="/images/aluno.png" alt="Aluno" fill className="object-contain drop-shadow-[0_0_15px_rgba(255,122,24,0.4)]" />
          </div>
          <span className="badge badge-orange mb-2">Aluno</span>
          <b className="block">{matchData.aluno.name}</b>
          <div className="mt-2 flex flex-wrap justify-center gap-1">
            {matchData.aluno.skills.map(s => <span key={s} className="badge badge-purple text-[10px]">{s}</span>)}
          </div>
          <b className="mt-3 block text-2xl text-orange-300">{matchData.aluno.score}</b>
          <p className="text-xs text-white/45">score humano</p>
        </Card>

        {/* Mentor */}
        <Card className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/30 to-violet-600/30 text-2xl font-black">
            🤖
          </div>
          <span className="badge badge-purple mb-2">Mentor</span>
          <b className="block">{matchData.mentor.name}</b>
          <div className="mt-2 flex flex-wrap justify-center gap-1">
            {matchData.mentor.expertise.map(e => <span key={e} className="badge badge-magenta text-[10px]">{e}</span>)}
          </div>
          <b className="mt-3 block text-2xl text-fuchsia-300">★ {matchData.mentor.reputation}</b>
          <p className="text-xs text-white/45">reputação</p>
        </Card>

        {/* Cliente */}
        <Card className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 text-2xl">
            🏥
          </div>
          <span className="badge badge-green mb-2">Cliente</span>
          <b className="block">{matchData.cliente.name}</b>
          <p className="mt-2 text-sm text-white/55">{matchData.cliente.segment}</p>
          <p className="text-xs text-white/40">{matchData.cliente.city}</p>
        </Card>
      </div>

      {/* Critérios de score */}
      <Card>
        <h3 className="mb-4 font-black">Critérios de compatibilidade</h3>
        <div className="space-y-4">
          {matchData.scores.map((s) => (
            <div key={s.criteria}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="text-white/70">{s.criteria}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/40">peso {s.weight}%</span>
                  <b className="text-orange-300">{s.score}%</b>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${s.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Pontos fortes e riscos */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="mb-3 flex items-center gap-2 font-black">
            <CheckCircle size={16} className="text-emerald-400" /> Pontos fortes
          </h3>
          <ul className="space-y-2">
            {matchData.reasons.map((r) => (
              <li key={r} className="flex gap-2 text-sm text-white/70">
                <span className="mt-0.5 shrink-0 text-emerald-400">✓</span> {r}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="mb-3 flex items-center gap-2 font-black">
            <AlertTriangle size={16} className="text-orange-400" /> Riscos
          </h3>
          <ul className="space-y-2">
            {matchData.risks.map((r) => (
              <li key={r} className="flex gap-2 text-sm text-white/70">
                <span className="mt-0.5 shrink-0 text-orange-400">!</span> {r}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <button className="btn btn-primary w-full">
        <Zap size={16} /> Confirmar Match e Iniciar Projeto
      </button>
    </div>
  );
}
