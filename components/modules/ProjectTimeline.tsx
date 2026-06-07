import { Card } from '@/components/ui/Card';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const milestones = [
  { title: 'Kick-off com cliente',    date: '01/06', done: true  },
  { title: 'Entrega do protótipo',    date: '05/06', done: true  },
  { title: 'Revisão e feedback',      date: '08/06', done: false },
  { title: 'Ajustes finais',          date: '10/06', done: false },
  { title: 'Entrega e aceite',        date: '12/06', done: false },
  { title: 'Pagamento liberado',      date: '13/06', done: false },
];

export function ProjectTimeline() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black">Timeline do Projeto</h2>
        <p className="text-white/55">App de agendamento para Clínica Saúde+</p>
      </div>
      <Card>
        <div className="space-y-4">
          {milestones.map((m, i) => (
            <div key={m.title} className="flex gap-4 items-start">
              <div className="flex flex-col items-center shrink-0">
                {m.done
                  ? <CheckCircle size={20} className="text-emerald-400" />
                  : <Circle size={20} className="text-white/25" />}
                {i < milestones.length - 1 && <div className="mt-1 h-8 w-px bg-white/10" />}
              </div>
              <div className={`flex-1 pb-2 ${m.done ? 'text-white' : 'text-white/50'}`}>
                <div className="flex justify-between">
                  <b className="text-sm">{m.title}</b>
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Clock size={11}/> {m.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/8">
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-white/60">Progresso</span>
            <b className="text-orange-300">33%</b>
          </div>
          <div className="progress-bar"><div className="progress-fill" style={{width:'33%'}}/></div>
        </div>
      </Card>
    </div>
  );
}
