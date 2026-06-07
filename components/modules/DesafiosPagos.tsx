import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Clock, Zap, Filter } from 'lucide-react';

const challenges = [
  { id:'1', title:'Landing page para ONG local',         area:'Design / Web',      reward:'R$ 900',  match:96, days:'10 dias', skills:['HTML','CSS','Figma'],         level:'Iniciante'    },
  { id:'2', title:'Automação de atendimento WhatsApp',   area:'IA / Automação',    reward:'R$ 1.200',match:91, days:'14 dias', skills:['n8n','APIs','JS'],             level:'Intermediário' },
  { id:'3', title:'Campanha de descarte consciente',     area:'Marketing / ESG',   reward:'R$ 750',  match:88, days:'7 dias',  skills:['Canva','Copywriting'],        level:'Iniciante'    },
  { id:'4', title:'Dashboard de vendas no Excel',        area:'Dados / Excel',     reward:'R$ 600',  match:84, days:'5 dias',  skills:['Excel','VBA'],                level:'Iniciante'    },
  { id:'5', title:'App de agendamento para clínica',     area:'Dev / Mobile',      reward:'R$ 2.400',match:79, days:'21 dias', skills:['React Native','Supabase'],    level:'Avançado'     },
  { id:'6', title:'Identidade visual para startup',      area:'Design / Branding', reward:'R$ 850',  match:93, days:'8 dias',  skills:['Figma','Illustrator'],        level:'Intermediário' },
];

const levelColor: Record<string, string> = {
  Iniciante:    'badge-green',
  Intermediário:'badge-orange',
  Avançado:     'badge-magenta',
};

export function DesafiosPagos() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black">Desafios Pagos</h2>
          <p className="text-white/55">Problemas reais transformados em oportunidades de renda.</p>
        </div>
        <button className="btn btn-ghost text-sm flex items-center gap-2">
          <Filter size={15}/> Filtrar
        </button>
      </div>

      {/* Grid de desafios */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((c) => (
          <Card key={c.id}>
            <div className="flex items-start justify-between gap-2">
              <span className="badge badge-purple">{c.area}</span>
              <div className="flex items-center gap-1 text-xs text-white/40">
                <Clock size={12}/> {c.days}
              </div>
            </div>

            <h3 className="mt-4 font-black leading-snug">{c.title}</h3>

            <div className="mt-3 flex flex-wrap gap-1">
              {c.skills.map(s => (
                <span key={s} className="badge badge-purple text-[10px]">{s}</span>
              ))}
              <span className={`badge ${levelColor[c.level]} text-[10px]`}>{c.level}</span>
            </div>

            <div className="mt-5 flex items-end justify-between border-t border-white/8 pt-4">
              <div>
                <p className="text-xs text-white/45">Pagamento</p>
                <b className="text-2xl font-black text-orange-300">{c.reward}</b>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/45">Match</p>
                <div className="flex items-center gap-1">
                  <Zap size={13} className="text-fuchsia-400"/>
                  <b className="text-xl font-black">{c.match}%</b>
                </div>
              </div>
            </div>

            <Link href={`/desafios`} className="btn btn-primary mt-4 w-full text-sm">
              Quero este desafio <ArrowRight size={14}/>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
