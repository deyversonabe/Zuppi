import { Card } from '@/components/ui/Card';
const interviews = [
  { perfil:'Gestora de clínica', dor:'Sistema de agendamento caro', wtp:'R$ 150/mês',  status:'validada' },
  { perfil:'Presidente de ONG',  dor:'Sem presença digital',         wtp:'R$ 500/proj', status:'validada' },
  { perfil:'Dono de padaria',    dor:'Controle financeiro manual',   wtp:'R$ 80/mês',   status:'pendente' },
];
export function InterviewBoard() {
  return (
    <Card>
      <h3 className="font-black mb-4">Entrevistas de Validação</h3>
      <div className="space-y-3">
        {interviews.map(iv=>(
          <div key={iv.perfil} className="rounded-2xl bg-white/5 p-4">
            <div className="flex justify-between mb-1">
              <b className="text-sm">{iv.perfil}</b>
              <span className={`badge ${iv.status==='validada'?'badge-green':'badge-orange'}`}>{iv.status}</span>
            </div>
            <p className="text-xs text-white/55 italic">"{iv.dor}"</p>
            <p className="text-xs text-emerald-300 mt-1">WTP: {iv.wtp}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
