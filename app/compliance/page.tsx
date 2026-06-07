import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ConsentPanel } from '@/components/modules/ConsentPanel';
import { Card } from '@/components/ui/Card';
import { Shield } from 'lucide-react';
export default function CompliancePage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-10 space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/40 to-fuchsia-500/30"><Shield size={24} className="text-violet-300"/></div>
          <div><h1 className="text-3xl font-black">Privacidade & LGPD</h1><p className="text-white/55">Zuppi segue rigorosamente a LGPD.</p></div>
        </div>
        <ConsentPanel />
        <Card>
          <h2 className="font-black mb-3">Seus direitos</h2>
          <ul className="space-y-2 text-sm text-white/70">
            {['Acesso aos seus dados','Correção de dados incorretos','Eliminação dos seus dados','Portabilidade de dados','Revogação de consentimento'].map(r=>(
              <li key={r} className="flex items-center gap-2"><span className="text-emerald-400">✓</span>{r}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/35">Contato: privacidade@zuppi.com.br</p>
        </Card>
      </div>
      <Footer />
    </main>
  );
}
