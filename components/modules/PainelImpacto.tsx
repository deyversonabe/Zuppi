import { Card } from '@/components/ui/Card';
import { demoImpact } from '@/lib/demo-data';
import { Globe, Leaf, Users, BookOpen, DollarSign, Clock } from 'lucide-react';

const ods = [
  { num: 4,  title: 'Educação de qualidade',          color: '#C5192D' },
  { num: 8,  title: 'Trabalho decente e crescimento', color: '#A21942' },
  { num: 10, title: 'Redução das desigualdades',      color: '#DD1367' },
  { num: 11, title: 'Cidades sustentáveis',            color: '#FD9D24' },
  { num: 17, title: 'Parcerias e meios de implementação', color: '#19486A' },
];

export function PainelImpacto() {
  const d = demoImpact;
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/40 to-cyan-500/30">
          <Globe size={20} className="text-emerald-300" />
        </div>
        <div>
          <h2 className="text-2xl font-black">Impacto Mensurável</h2>
          <p className="text-sm text-white/50">Dados reais da operação Zuppi</p>
        </div>
      </div>

      {/* KPIs de impacto */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: <Clock size={20}/>,     label: 'Horas mentoradas',    value: d.horasMentoradas.toLocaleString(), color: 'text-violet-300'  },
          { icon: <BookOpen size={20}/>,  label: 'Bolsas concedidas',   value: d.bolsasConcedidas.toString(),      color: 'text-fuchsia-300' },
          { icon: <DollarSign size={20}/>,label: 'Renda gerada (R$)',   value: `R$ ${(d.rendaGerada/1000).toFixed(0)}k`, color: 'text-orange-300'  },
          { icon: <Users size={20}/>,     label: 'Projetos sociais',    value: d.projetosSociais.toString(),       color: 'text-emerald-300' },
          { icon: <Leaf size={20}/>,      label: 'CO₂ compensado (t)',  value: d.co2Compensado.toString(),         color: 'text-green-400'   },
          { icon: <Globe size={20}/>,     label: 'ODS impactados',      value: d.odsImpactados.length.toString(),  color: 'text-cyan-300'    },
        ].map((k) => (
          <Card key={k.label} className="flex items-center gap-4">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/8 ${k.color}`}>
              {k.icon}
            </div>
            <div>
              <p className="text-xs text-white/50">{k.label}</p>
              <b className={`text-2xl font-black ${k.color}`}>{k.value}</b>
            </div>
          </Card>
        ))}
      </div>

      {/* ODS badges */}
      <Card>
        <h3 className="mb-4 font-black">ODS impactados</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ods.filter(o => d.odsImpactados.includes(o.num)).map((o) => (
            <div
              key={o.num}
              className="flex items-center gap-3 rounded-2xl p-3"
              style={{ background: `${o.color}22`, border: `1px solid ${o.color}55` }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
                style={{ background: o.color }}
              >
                {o.num}
              </div>
              <span className="text-xs font-semibold leading-tight text-white/80">{o.title}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Fundo circular */}
      <div className="glass rounded-[2rem] p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🌱</span>
          <div>
            <h3 className="text-xl font-black">Fundo de Impacto Circular</h3>
            <p className="mt-2 text-white/60 text-sm leading-relaxed">
              5% de cada transação na Zuppi vai automaticamente para o fundo circular de impacto.
              Os recursos financiam bolsas de acesso, projetos sociais e compensação de carbono.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="glass rounded-2xl px-4 py-2 text-center">
                <b className="block text-xl text-emerald-300">R$ {Math.round(d.rendaGerada * 0.05 / 1000)}k</b>
                <p className="text-xs text-white/45">no fundo</p>
              </div>
              <div className="glass rounded-2xl px-4 py-2 text-center">
                <b className="block text-xl text-cyan-300">{d.bolsasConcedidas}</b>
                <p className="text-xs text-white/45">bolsas ativas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
