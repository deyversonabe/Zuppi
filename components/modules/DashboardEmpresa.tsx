import { Card } from '@/components/ui/Card';
import { Building2, TrendingDown, Zap, CheckCircle } from 'lucide-react';

const desafios = [
  { title: 'Automação de atendimento WhatsApp', status: 'em_andamento', aluno: 'Lucas F.', prazo: '3 dias', economia: 'R$ 4.200' },
  { title: 'Dashboard financeiro em Excel',     status: 'concluido',    aluno: 'Camila S.', prazo: '-',      economia: 'R$ 2.800' },
  { title: 'Identidade visual redes sociais',   status: 'match',        aluno: 'Rafael O.', prazo: '8 dias', economia: 'R$ 1.900' },
];

const statusMap: Record<string, { text: string; cls: string }> = {
  em_andamento: { text: 'Em andamento', cls: 'badge-orange' },
  concluido:    { text: 'Concluído',    cls: 'badge-green'  },
  match:        { text: 'Match feito',  cls: 'badge-purple' },
};

export function DashboardEmpresa() {
  return (
    <div className="space-y-6">
      <div className="glass rounded-[2rem] p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/30 to-violet-600/30 text-orange-300">
            <Building2 size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black">Empresa Parceira</h2>
            <p className="text-white/55">Techsmart Soluções Ltda.</p>
          </div>
          <div className="ml-auto glass rounded-2xl px-5 py-3 text-right">
            <b className="block text-2xl font-black text-emerald-300">R$ 8.900</b>
            <p className="text-xs text-white/50">economia total vs. CLT/PJ</p>
          </div>
        </div>
      </div>

      {/* ROI strip */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: <TrendingDown size={20}/>, label: 'Economia vs. mercado', value: '67%',    color: 'text-emerald-300' },
          { icon: <Zap size={20}/>,          label: 'Desafios publicados',  value: '3',       color: 'text-orange-300'  },
          { icon: <CheckCircle size={20}/>,  label: 'Entregues no prazo',   value: '100%',    color: 'text-fuchsia-300' },
        ].map((k) => (
          <Card key={k.label} className="flex items-center gap-3">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 ${k.color}`}>
              {k.icon}
            </div>
            <div>
              <p className="text-xs text-white/50">{k.label}</p>
              <b className={`text-2xl font-black ${k.color}`}>{k.value}</b>
            </div>
          </Card>
        ))}
      </div>

      {/* Desafios da empresa */}
      <Card>
        <h3 className="mb-4 text-xl font-black">Meus desafios publicados</h3>
        <div className="space-y-3">
          {desafios.map((d) => (
            <div key={d.title} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <div className="flex-1">
                <b className="text-sm">{d.title}</b>
                <p className="text-xs text-white/50">Aluno: {d.aluno} · Prazo: {d.prazo}</p>
              </div>
              <div className="text-right">
                <b className="block text-sm text-emerald-300">{d.economia}</b>
                <span className={`badge ${statusMap[d.status].cls}`}>{statusMap[d.status].text}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
