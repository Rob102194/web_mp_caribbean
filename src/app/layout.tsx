import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'MP Caribbean — Importadora y Distribuidora Mayorista',
  description:
    'Soluciones de importación mayorista y distribución diseñadas para tu empresa. Cotiza al por mayor o consulta disponibilidad para tu negocio en segundos.',
  keywords: ['importadora mayorista', 'distribuidora internacional', 'importación de alimentos', 'proveedor B2B', 'abastecimiento mayorista', 'logística internacional'],
  openGraph: {
    title: 'MP Caribbean — Importadora y Distribuidora Mayorista',
    description: 'Soluciones de importación y distribución diseñadas para potenciar tu empresa.',
    type: 'website',
    locale: 'es',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
