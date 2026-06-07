import { Card } from '@/components/ui/Card';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const steps = [
  { title: 'Cadastro e perfil',         done: true,  desc: 'Habilidades, objetivo, disponibilidade'       },
  { title: 'Primeiro desafio',          done: true,  desc: 'Projeto pequeno para construir histórico'     },
  { title: 'Match com mentor',          done: true,  desc: 'Copiloto para o projeto guiado'               },
  { title: 'Entrega e avaliação',       done: false, desc: 'Critérios de aceite validados pelo cliente'   },
  { title: 'Score e portfólio',         done: false, desc: 'Evidências de entrega real'                   },
  { title: 'Desafios maiores',          done: false, desc: 'Projetos de maior valor e complexidade'       },
];

export function StudentJourney() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0">
          <Image src="/images/aluno.png" alt="Aluno" fill className="object-contain drop-shadow-[0_0_15px_rgba(255,122,24,0.4)]" />
        </div>
        <div>
          <h2 className="text-2xl font-black">Jornada do Aluno</h2>
          <p className="text-white/55">Do primeiro desafio à renda consistente.</p>
        </div>
      </div>
      <Card>
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                {s.done
                  ? <CheckCircle size={20} className="text-emerald-400 shrink-0" />
                  : <Circle size={20} className="text-white/25 shrink-0" />}
                {i < steps.length - 1 && <div className="mt-2 h-full w-px bg-white/10" />}
              </div>
              <div className={`pb-4 ${s.done ? 'text-white' : 'text-white/45'}`}>
                <b className="text-sm">{i+1}. {s.title}</b>
                <p className="text-xs text-white/50 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
