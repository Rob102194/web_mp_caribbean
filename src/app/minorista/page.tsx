import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingBag, Tag, Clock, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import CatalogGrid from '@/components/domain/CatalogGrid';

export const metadata: Metadata = {
  title: 'Minorista — MP Caribbean | Consulta Disponibilidad y Precios',
  description:
    'Encuentra productos de calidad importada para tu negocio o consumo personal. Precios unitarios y consulta inmediata vía WhatsApp.',
};

export default function MinoristPage() {
  return (
    <>
      {/* Hero Minorista */}
      <section id="minorista-hero" className="bg-[#0A0F1E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0D2525] to-[#0A0F1E]" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#2DD4BF]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-5">
            <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Inicio</Link>
            <span className="text-slate-600">/</span>
            <span className="text-[#2DD4BF] text-sm font-medium">Minorista</span>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#2DD4BF]/20 border border-[#2DD4BF]/30 flex items-center justify-center shrink-0">
              <ShoppingBag size={26} className="text-[#2DD4BF]" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Canal{' '}
                <span className="text-gradient-teal">Minorista</span>
              </h1>
              <p className="text-slate-400 text-lg mt-2 max-w-2xl">
                Productos de calidad importada accesibles para tu negocio o consumo personal. Consulta precio, disponibilidad y recibe atención inmediata.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mb-8">
            {[
              { icon: Tag, title: 'Precio Transparente', desc: 'Precio unitario visible sin rodeos.' },
              { icon: Clock, title: 'Respuesta Inmediata', desc: 'Consulta en WhatsApp y recibe respuesta hoy.' },
              { icon: CheckCircle, title: 'Calidad Garantizada', desc: 'Los mismos productos que elegimos para el canal B2B.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-xl p-4 border border-white/8">
                <Icon size={18} className="text-[#2DD4BF] mb-2" />
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="#catalogo"
              id="minorista-cta-catalog"
              className="flex items-center gap-2 bg-[#2DD4BF] text-[#0A0F1E] font-bold px-6 py-3 rounded-xl hover:bg-[#14B8A6] transition-colors text-sm shadow-md"
            >
              Ver Productos <ArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '18095550000'}?text=${encodeURIComponent('Hola, quisiera consultar disponibilidad y precios para compra al detalle.')}`}
              target="_blank"
              rel="noopener noreferrer"
              id="minorista-whatsapp-btn"
              className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20BA5C] transition-colors text-sm shadow-md"
            >
              <MessageCircle size={16} /> Consultar Ahora
            </a>
          </div>
        </div>
      </section>

      <CatalogGrid />
    </>
  );
}
