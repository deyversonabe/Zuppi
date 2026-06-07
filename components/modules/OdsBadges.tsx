import { Card } from '@/components/ui/Card';
const ods = [
  { num:4,  title:'Educação de qualidade',            color:'#C5192D' },
  { num:8,  title:'Trabalho decente e crescimento',   color:'#A21942' },
  { num:10, title:'Redução das desigualdades',        color:'#DD1367' },
  { num:11, title:'Cidades sustentáveis',              color:'#FD9D24' },
  { num:17, title:'Parcerias para implementação',     color:'#19486A' },
];
export function OdsBadges({ active = [4,8,10,11,17] }: { active?: number[] }) {
  return (
    <Card>
      <h3 className="mb-4 font-black">ODS impactados pela Zuppi</h3>
      <div className="flex flex-wrap gap-3">
        {ods.filter(o => active.includes(o.num)).map(o => (
          <div key={o.num} className="flex items-center gap-2 rounded-2xl px-3 py-2" style={{background:`${o.color}25`,border:`1px solid ${o.color}55`}}>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white" style={{background:o.color}}>{o.num}</div>
            <span className="text-xs font-semibold text-white/80">{o.title}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
