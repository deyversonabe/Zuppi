import { Card } from '@/components/ui/Card';
import { CheckCircle, Circle, AlertTriangle, FileText, Users, BarChart2, Video } from 'lucide-react';

const checklist = [
  { label: 'Problema validado com entrevistas',     done: true  },
  { label: 'LOI de empresa confirmada',             done: true  },
  { label: 'Piloto com cliente real realizado',     done: true  },
  { label: 'Métricas de validação documentadas',    done: true  },
  { label: 'Pitch Deck atualizado',                 done: false },
  { label: 'Vídeo de 3 minutos gravado',            done: false },
  { label: 'Análise financeira (LTV, CAC, MRR)',    done: false },
  { label: 'Protótipo ou MVP funcional',            done: true  },
];

const entrevistas = [
  { perfil: 'Gestora de clínica',     dor: 'Sistema de agendamento caro', willingness: 'R$ 150/mês', consent: true  },
  { perfil: 'Presidente de ONG',      dor: 'Sem presença digital',         willingness: 'R$ 500/proj', consent: true  },
  { perfil: 'Dono de padaria',        dor: 'Controle financeiro manual',   willingness: 'R$ 80/mês',  consent: false },
];

const done = checklist.filter(c => c.done).length;
const pct  = Math.round((done / checklist.length) * 100);

export function PainelEmpreenda() {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-sm text-orange-100">
          🏆 Semifinal Empreenda Senac 2025
        </div>
        <h2 className="text-2xl font-black">Painel de Evidências</h2>
        <p className="text-white/55">Organize tudo que a banca vai querer ver.</p>
      </div>

      {/* Progresso geral */}
      <div className="glass rounded-[2rem] p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-black">Checklist Empreenda</h3>
          <b className="text-2xl text-orange-300">{pct}%</b>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-2 text-xs text-white/45">{done} de {checklist.length} itens concluídos</p>
      </div>

      {/* Checklist */}
      <Card>
        <h3 className="mb-4 font-black">Itens de validação</h3>
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              {item.done
                ? <CheckCircle size={18} className="shrink-0 text-emerald-400" />
                : <Circle     size={18} className="shrink-0 text-white/25"    />}
              <span className={`text-sm ${item.done ? 'text-white' : 'text-white/45 line-through'}`}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Entrevistas de validação */}
      <Card>
        <h3 className="mb-4 flex items-center gap-2 font-black">
          <Users size={18} className="text-fuchsia-300" /> Entrevistas de validação
        </h3>
        <div className="space-y-3">
          {entrevistas.map((e) => (
            <div key={e.perfil} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 text-sm font-black">
                {e.perfil[0]}
              </div>
              <div className="flex-1">
                <b className="text-sm">{e.perfil}</b>
                <p className="text-xs text-white/55">"{e.dor}"</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="badge badge-green text-[10px]">WTP: {e.willingness}</span>
                  {e.consent
                    ? <span className="badge badge-green text-[10px]">✓ Consentimento</span>
                    : <span className="badge badge-orange text-[10px]"><AlertTriangle size={9}/> Pendente</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Links rápidos */}
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { icon: <FileText size={18}/>, label: 'Pitch Deck',    href: '#' },
          { icon: <Video size={18}/>,    label: 'Vídeo 3min',    href: '#' },
          { icon: <BarChart2 size={18}/>,label: 'Métricas',      href: '#' },
        ].map((b) => (
          <a key={b.label} href={b.href} className="glass card-hover flex items-center justify-center gap-2 rounded-2xl p-4 text-sm font-bold text-white/70">
            <span className="text-orange-300">{b.icon}</span> {b.label}
          </a>
        ))}
      </div>
    </div>
  );
}
