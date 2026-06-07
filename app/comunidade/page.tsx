import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { Card } from '@/components/ui/Card';
import { Mascot } from '@/components/Mascot';
const posts = [
  { user:'Lucas Ferreira', text:'Acabei de entregar meu primeiro desafio Zuppi! R$ 900 e o cliente adorou 🚀', time:'2h', likes:24 },
  { user:'Camila Santos',  text:'Match incrível com a Ana Lima como mentora. Score foi de 79 para 87 em um projeto!', time:'5h', likes:18 },
  { user:'Rafael Oliveira',text:'Primeiro LOI assinado para a semifinal do Empreenda. Obrigado Zuppi AI pelo pitch!', time:'1d', likes:41 },
];
export default function ComunidadePage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <h1 className="section-title">Comunidade <span className="neon-text">Zuppi</span></h1>
            {posts.map(p => (
              <Card key={p.user}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/30 to-violet-600/30 font-black">{p.user[0]}</div>
                  <div><b className="text-sm">{p.user}</b><p className="text-xs text-white/40">{p.time}</p></div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">{p.text}</p>
                <p className="mt-3 text-xs text-white/40">❤️ {p.likes}</p>
              </Card>
            ))}
          </div>
          <div className="hidden lg:block"><Mascot variant="section" /></div>
        </div>
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
