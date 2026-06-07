import { Card } from '@/components/ui/Card';
import { Clock, Star } from 'lucide-react';
const sessions = [
  { aluno:'Lucas Ferreira',  tema:'Revisão do protótipo', hora:'14:00 · Hoje',   status:'confirmada' },
  { aluno:'Camila Santos',   tema:'Planejamento sprint',  hora:'10:00 · Amanhã', status:'confirmada' },
  { aluno:'Rafael Oliveira', tema:'Code review',          hora:'16:30 · Sex',    status:'pendente'   },
];
export function MentorSessionList() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-black">Próximas sessões</h3>
      {sessions.map(s => (
        <Card key={s.aluno} className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/30 to-violet-600/30 font-black text-sm">{s.aluno[0]}</div>
          <div className="flex-1">
            <b className="text-sm">{s.aluno}</b>
            <p className="text-xs text-white/50">{s.tema}</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-white/40"><Clock size={11}/>{s.hora}</div>
          </div>
          <span className={`badge ${s.status === 'confirmada' ? 'badge-green' : 'badge-orange'}`}>{s.status}</span>
        </Card>
      ))}
    </div>
  );
}
