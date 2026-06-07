import Image from 'next/image';
import { demoStudentDashboard } from '@/lib/demo-data';
import { Card } from '@/components/ui/Card';
import { Zap, Trophy, Wallet, Clock, Star } from 'lucide-react';

export function DashboardAluno() {
  const d = demoStudentDashboard;
  const xpPct = Math.round((d.xp / d.xpNext) * 100);

  return (
    <div className="space-y-6">
      {/* Header do aluno */}
      <div className="glass rounded-[2rem] p-6">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
          {/* Avatar com aluno */}
          <div className="relative h-20 w-20 shrink-0">
            <Image
              src="/images/aluno.png"
              alt="Aluno"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(255,122,24,0.4)]"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-black">{d.name}</h2>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="badge badge-purple">Nível {d.level}</span>
              <span className="badge badge-orange">Score {d.score}</span>
            </div>
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-xs text-white/50">
                <span>XP {d.xp.toLocaleString()}</span>
                <span>Meta {d.xpNext.toLocaleString()}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${xpPct}%` }} />
              </div>
            </div>
          </div>
          <div className="text-center">
            <b className="text-3xl font-black text-orange-300">{d.renda}</b>
            <p className="text-xs text-white/50">renda total</p>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: <Trophy size={20} />, label: 'Projetos concluídos', value: d.projetos },
          { icon: <Wallet size={20} />, label: 'Renda acumulada',     value: d.renda   },
          { icon: <Star size={20} />,   label: 'Score humano',         value: d.score   },
        ].map((k) => (
          <Card key={k.label} className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/30 to-violet-600/30 text-orange-300">
              {k.icon}
            </div>
            <div>
              <p className="text-xs text-white/50">{k.label}</p>
              <b className="text-xl font-black">{k.value}</b>
            </div>
          </Card>
        ))}
      </div>

      {/* Projeto ativo */}
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-black">Projeto ativo</h3>
            <p className="mt-1 text-lg font-bold">{d.projetoAtivo.title}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-orange-300">
            <Clock size={14} />
            {d.projetoAtivo.prazo}
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-white/60">Progresso</span>
            <b>{d.projetoAtivo.progresso}%</b>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${d.projetoAtivo.progresso}%` }} />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="glass rounded-2xl p-3">
            <p className="text-xs text-white/45">Mentor</p>
            <b className="text-sm">{d.projetoAtivo.mentor}</b>
          </div>
          <div className="glass rounded-2xl p-3">
            <p className="text-xs text-white/45">Cliente</p>
            <b className="text-sm">{d.projetoAtivo.cliente}</b>
          </div>
        </div>
      </Card>

      {/* Desafios disponíveis */}
      <div>
        <h3 className="mb-4 text-xl font-black">
          Desafios para você <span className="badge badge-orange ml-2">{d.problemas.length}</span>
        </h3>
        <div className="space-y-3">
          {d.problemas.map((p) => (
            <Card key={p.title} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="badge badge-purple text-[11px]">{p.area}</span>
                  <span className="text-xs text-white/40">{p.days}</span>
                </div>
                <p className="mt-1 font-bold">{p.title}</p>
              </div>
              <div className="text-right shrink-0">
                <b className="block text-xl text-orange-300">{p.reward}</b>
                <div className="flex items-center justify-end gap-1">
                  <Zap size={12} className="text-fuchsia-400" />
                  <span className="text-sm font-bold">{p.match}%</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
