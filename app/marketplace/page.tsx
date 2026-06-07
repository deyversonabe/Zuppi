import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { Card } from '@/components/ui/Card';
const services = [
  { title:'Landing page profissional', author:'Lucas Ferreira', price:'R$ 400', delivery:'5 dias', category:'Design' },
  { title:'Automação WhatsApp',        author:'Camila Santos',  price:'R$ 700', delivery:'7 dias', category:'IA'     },
  { title:'Dashboard Excel avançado',  author:'Rafael Oliveira',price:'R$ 300', delivery:'3 dias', category:'Dados'  },
  { title:'Identidade visual completa',author:'Julia Martins',  price:'R$ 600', delivery:'10 dias',category:'Brand'  },
];
export default function MarketplacePage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10 pb-28 md:pb-10">
        <h1 className="section-title mb-2">Marketplace <span className="neon-text">Zuppi</span></h1>
        <p className="text-white/55 mb-8">Serviços criados por alunos validados.</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map(s => (
            <Card key={s.title}>
              <span className="badge badge-purple mb-3">{s.category}</span>
              <h3 className="font-black leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-white/55">por {s.author}</p>
              <div className="mt-4 flex justify-between border-t border-white/8 pt-4">
                <b className="text-xl text-orange-300">{s.price}</b>
                <span className="text-xs text-white/40">{s.delivery}</span>
              </div>
              <button className="btn btn-primary mt-4 w-full text-sm">Contratar</button>
            </Card>
          ))}
        </div>
      </div>
      <Footer /><MobileBottomNav />
    </main>
  );
}
