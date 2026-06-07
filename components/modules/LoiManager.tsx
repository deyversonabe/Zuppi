import { Card } from '@/components/ui/Card';
import { FileText, CheckCircle, Clock } from 'lucide-react';
const lois = [
  { company:'Clínica Saúde+',      value:'R$ 1.200', status:'assinada', date:'05/06' },
  { company:'Padaria do Zé',       value:'R$ 600',   status:'rascunho', date:'08/06' },
  { company:'ONG Raízes Verdes',   value:'R$ 900',   status:'assinada', date:'02/06' },
];
export function LoiManager() {
  return (
    <Card>
      <h3 className="font-black mb-4">Cartas de Intenção (LOI)</h3>
      <div className="space-y-3">
        {lois.map(l=>(
          <div key={l.company} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
            <FileText size={18} className="text-fuchsia-300 shrink-0"/>
            <div className="flex-1">
              <b className="text-sm">{l.company}</b>
              <p className="text-xs text-white/50">{l.date} · {l.value}</p>
            </div>
            <span className={`badge ${l.status==='assinada'?'badge-green':'badge-orange'}`}>
              {l.status==='assinada'?<CheckCircle size={11}/>:<Clock size={11}/>} {l.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
