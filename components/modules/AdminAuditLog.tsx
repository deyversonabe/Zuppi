import { Card } from '@/components/ui/Card';
const logs = [
  { actor:'admin',           action:'Desafio aprovado',      entity:'challenges',  time:'há 5min'  },
  { actor:'sistema',        action:'Match calculado',        entity:'matches',     time:'há 12min' },
  { actor:'lucas.ferreira', action:'Saque solicitado',       entity:'withdrawals', time:'há 1h'    },
  { actor:'admin',           action:'Usuário promovido',      entity:'users',       time:'há 2h'    },
  { actor:'sistema',        action:'Score recalculado',      entity:'human_scores',time:'há 3h'    },
];
export function AdminAuditLog() {
  return (
    <Card>
      <h3 className="font-black mb-4">Log de Auditoria</h3>
      <div className="space-y-3">
        {logs.map((l,i)=>(
          <div key={i} className="flex gap-3 items-center rounded-xl bg-white/5 p-3">
            <div className="h-2 w-2 rounded-full bg-violet-400 shrink-0"/>
            <div className="flex-1">
              <span className="text-xs font-bold text-violet-300">{l.actor}</span>
              <span className="text-xs text-white/60"> → {l.action}</span>
              <p className="text-[10px] text-white/35">{l.entity} · {l.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
