import { Card } from '@/components/ui/Card';
import { Shield, CheckCircle } from 'lucide-react';
const items = [
  { label:'Uso de dados para match inteligente',      granted:true  },
  { label:'Análise de perfil por IA',                granted:true  },
  { label:'Compartilhamento com empresas parceiras', granted:false },
  { label:'Comunicações de marketing',               granted:false },
];
export function ConsentPanel() {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-5">
        <Shield size={20} className="text-violet-300"/>
        <h3 className="font-black text-xl">Consentimentos LGPD</h3>
      </div>
      <div className="space-y-3">
        {items.map(item=>(
          <div key={item.label} className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
            <span className="text-sm text-white/80">{item.label}</span>
            <div className={`flex h-6 w-11 items-center rounded-full px-0.5 transition ${item.granted ? 'bg-emerald-500' : 'bg-white/20'}`}>
              <div className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${item.granted ? 'translate-x-5' : 'translate-x-0'}`}/>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-white/35">Você pode alterar seus consentimentos a qualquer momento conforme a LGPD.</p>
    </Card>
  );
}
