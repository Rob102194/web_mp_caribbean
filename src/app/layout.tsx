import type { Metadata } from 'next';
import './globals.css';
import { ModeProvider } from '@/context/ModeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'MP Caribbean — Distribuidora e Importadora Mayorista',
  description:
    'Plataforma B2B y B2C para distribución e importación de alimentos y bebidas en el Caribe. Cotiza al por mayor o consulta disponibilidad minorista en segundos vía WhatsApp.',
  keywords: ['distribuidora mayorista', 'importación', 'alimentos', 'Caribe', 'República Dominicana', 'B2B'],
  openGraph: {
    title: 'MP Caribbean — Distribuidora e Importadora Mayorista',
    description: 'Catálogo híbrido B2B/B2C para mayoristas y minoristas en el Caribe.',
    type: 'website',
    locale: 'es_DO',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <ModeProvider>
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ModeProvider>
      </body>
    </html>
  );
}
