'use client';
import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Send } from 'lucide-react';
export function CompanyProblemForm() {
  const [sent, setSent] = useState(false);
  if (sent) return (
    <Card className="text-center py-10">
      <p className="text-4xl mb-4">✅</p>
      <h3 className="text-xl font-black">Problema enviado!</h3>
      <p className="mt-2 text-white/55">Nossa IA vai analisar e transformar em desafio em até 24h.</p>
    </Card>
  );
  return (
    <Card>
      <h3 className="text-xl font-black mb-2">Publicar um problema</h3>
      <p className="text-white/55 text-sm mb-5">Descreva a dor da sua empresa. Transformamos em desafio pago para alunos resolverem.</p>
      <div className="space-y-4">
        <div><label className="text-sm text-white/60 mb-1 block">Título do problema</label><input className="zuppi-input" placeholder="Ex: Precisamos de automação para atendimento"/></div>
        <div><label className="text-sm text-white/60 mb-1 block">Descrição detalhada</label><textarea className="zuppi-input min-h-[100px] resize-none" placeholder="Contexto, volume, impacto no negócio..."/></div>
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-sm text-white/60 mb-1 block">Segmento</label><input className="zuppi-input" placeholder="Saúde, Varejo..."/></div>
          <div><label className="text-sm text-white/60 mb-1 block">Budget estimado</label><input className="zuppi-input" placeholder="R$ 500 - R$ 2.000"/></div>
        </div>
        <button onClick={() => setSent(true)} className="btn btn-primary w-full"><Send size={16}/> Enviar problema</button>
      </div>
    </Card>
  );
}
