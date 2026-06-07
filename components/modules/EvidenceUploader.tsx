'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Upload, FileText, CheckCircle } from 'lucide-react';
const types = ['Entrevista de validação','Print de conversa','LOI assinada','Resultado de piloto','Métrica de tração'];
export function EvidenceUploader() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [saved, setSaved] = useState(false);
  return (
    <Card>
      <h3 className="text-xl font-black mb-2">Upload de Evidência</h3>
      <p className="text-sm text-white/55 mb-5">Adicione provas reais para o Portfólio Empreendedor.</p>
      {saved ? (
        <div className="text-center py-6"><CheckCircle size={40} className="mx-auto text-emerald-400 mb-3"/><b>Evidência salva!</b></div>
      ) : (
        <div className="space-y-4">
          <div><label className="text-sm text-white/60 mb-1 block">Tipo de evidência</label>
            <select className="zuppi-input" value={type} onChange={e=>setType(e.target.value)}>
              <option value="">Selecionar...</option>
              {types.map(t=><option key={t}>{t}</option>)}
            </select>
          </div>
          <div><label className="text-sm text-white/60 mb-1 block">Título</label><input className="zuppi-input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Descreva a evidência"/></div>
          <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center text-white/40 hover:border-fuchsia-500/40 transition cursor-pointer">
            <Upload size={24} className="mx-auto mb-2"/><p className="text-sm">Arraste ou clique para fazer upload</p>
          </div>
          <button onClick={()=>setSaved(true)} className="btn btn-primary w-full"><FileText size={16}/>Salvar evidência</button>
        </div>
      )}
    </Card>
  );
}
