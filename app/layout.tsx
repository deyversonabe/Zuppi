import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zuppi | Resolva problemas reais. Ganhe experiência. Gere renda.',
  description:
    'Plataforma de economia do conhecimento orientada por problemas reais — desafios pagos, match inteligente, projeto guiado, renda e impacto mensurável.',
  keywords: ['educação', 'problemas reais', 'desafios pagos', 'mentoria', 'IA', 'renda', 'impacto social'],
  openGraph: {
    title: 'Zuppi | Resolva problemas reais. Ganhe renda.',
    description: 'Conecta alunos, mentores e empresas em desafios pagos com match inteligente.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-grid">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
