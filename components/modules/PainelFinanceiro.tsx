import { Card } from '@/components/ui/Card';
import { Wallet, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const transactions = [
  { desc: 'Desafio: App agendamento',   type: 'credit', amount: 900,  date: '02/06/2025', status: 'pago'      },
  { desc: 'Desafio: Landing page ONG',  type: 'credit', amount: 750,  date: '18/05/2025', status: 'repassado' },
  { desc: 'Saque via Pix',              type: 'debit',  amount: 1000, date: '10/05/2025', status: 'concluido' },
  { desc: 'Desafio: Dashboard Excel',   type: 'credit', amount: 600,  date: '28/04/2025', status: 'pago'      },
];

export function PainelFinanceiro() {
  const available = 1650;
  const pending   = 900;
  const lifetime  = 3200;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/40 to-yellow-500/20">
          <Wallet size={20} className="text-orange-300" />
        </div>
        <h2 className="text-2xl font-black">Painel Financeiro</h2>
      </div>

      {/* Wallet cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Disponível para saque', value: `R$ ${available.toLocaleString()}`, color: 'text-emerald-300', bg: 'from-emerald-500/20 to-emerald-500/5' },
          { label: 'Aguardando liberação',  value: `R$ ${pending}`,                    color: 'text-orange-300',  bg: 'from-orange-400/20 to-orange-400/5'  },
          { label: 'Total acumulado',       value: `R$ ${lifetime.toLocaleString()}`,  color: 'text-fuchsia-300', bg: 'from-fuchsia-500/20 to-fuchsia-500/5' },
        ].map((w) => (
          <div key={w.label} className={`glass rounded-[1.75rem] p-5 bg-gradient-to-br ${w.bg}`}>
            <p className="text-xs text-white/50">{w.label}</p>
            <b className={`mt-1 block text-3xl font-black ${w.color}`}>{w.value}</b>
          </div>
        ))}
      </div>

      {/* Split visual */}
      <Card>
        <h3 className="mb-4 font-black">Split de cada projeto</h3>
        <div className="space-y-4">
          {siteConfig.split.map((s) => (
            <div key={s.label}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="capitalize text-white/70">{s.label}</span>
                <b className="text-orange-300">{s.percent}%</b>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${s.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Saque */}
      <Card>
        <h3 className="mb-4 font-black">Solicitar saque via Pix</h3>
        <div className="flex gap-3">
          <input className="zuppi-input flex-1" placeholder="Chave Pix (CPF, e-mail ou telefone)" />
          <button className="btn btn-primary shrink-0">
            <ArrowUpRight size={16} /> Sacar
          </button>
        </div>
        <p className="mt-2 text-xs text-white/35">Disponível em até 1 dia útil após solicitação.</p>
      </Card>

      {/* Extrato */}
      <Card>
        <h3 className="mb-4 font-black">Extrato recente</h3>
        <div className="space-y-3">
          {transactions.map((t, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${t.type === 'credit' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                {t.type === 'credit' ? <ArrowDownLeft size={16}/> : <ArrowUpRight size={16}/>}
              </div>
              <div className="flex-1">
                <b className="text-sm">{t.desc}</b>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-white/40">{t.date}</span>
                  <span className="badge badge-green text-[10px]">{t.status}</span>
                </div>
              </div>
              <b className={`text-lg font-black ${t.type === 'credit' ? 'text-emerald-300' : 'text-red-300'}`}>
                {t.type === 'credit' ? '+' : '-'}R$ {t.amount.toLocaleString()}
              </b>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
