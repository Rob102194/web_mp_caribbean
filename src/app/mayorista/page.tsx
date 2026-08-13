import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Package, Globe, Ship, MessageCircle } from 'lucide-react';
import CatalogGrid from '@/components/domain/CatalogGrid';
import { WHATSAPP_NUMBER } from '@/data/catalog';

export const metadata: Metadata = {
  title: 'Mayorista — MP Caribbean | Importación y Distribución al Por Mayor',
  description:
    'Cotizaciones por volumen, importación directa FOB/CIF y disponibilidad en plaza para distribuidores, supermercados y cadenas hoteleras. Soluciones a la medida de tu empresa.',
};

export default function MayoristaPage() {
  return (
    <>
      {/* Hero Mayorista */}
      <section id="mayorista-hero" className="bg-[#0A0F1E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#132040] to-[#0A0F1E]" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#E6A817]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-5">
            <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Inicio</Link>
            <span className="text-slate-600">/</span>
            <span className="text-[#E6A817] text-sm font-medium">Mayorista</span>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#E6A817]/20 border border-[#E6A817]/30 flex items-center justify-center shrink-0">
              <Building2 size={26} className="text-[#E6A817]" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Canal{' '}
                <span className="text-gradient-gold">Mayorista</span>
              </h1>
              <p className="text-slate-400 text-lg mt-2 max-w-2xl">
                Soluciones de importación directa y distribución al por mayor diseñadas para potenciar tu operación. Abastecemos a supermercados, cadenas hoteleras, restaurantes y distribuidores con eficiencia y transparencia.
              </p>
            </div>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { icon: Package, label: 'MOQ Flexible' },
              { icon: Ship, label: 'Importación Marítima FCL/LCL' },
              { icon: Globe, label: 'Cobertura Internacional' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300"
              >
                <Icon size={14} className="text-[#E6A817]" />
                {label}
              </div>
            ))}
          </div>

          {/* CTA — único botón de acción */}
          <div className="mt-10">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, soy distribuidor y deseo cotizar al por mayor.')}`}
              target="_blank"
              rel="noopener noreferrer"
              id="mayorista-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20BA5C] transition-colors text-sm shadow-md"
            >
              <MessageCircle size={16} /> Solicitar Cotización
            </a>
          </div>
        </div>
      </section>

      <CatalogGrid mode="mayorista" />
    </>
  );
}
