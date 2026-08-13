import Link from 'next/link';
import { MessageCircle, ChevronDown, Building2, ShoppingBag, ArrowRight } from 'lucide-react';
import FeaturedProducts from '@/components/domain/FeaturedProducts';
import B2BTrustSection from '@/components/domain/B2BTrustSection';
import { WHATSAPP_NUMBER } from '@/data/catalog';

export default function HomePage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section id="hero" className="relative min-h-[92vh] flex items-center bg-[#0A0F1E] overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#132040] to-[#0A0F1E]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#E6A817]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2DD4BF]/8 rounded-full blur-3xl pointer-events-none" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Abastecemos{' '}
              <span className="text-gradient-gold">tu negocio</span>
              <br />
              con{' '}
              <span className="text-gradient-teal">lo mejor</span>
              <br />
              del mercado internacional
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Importación mayorista y distribución adaptada a las necesidades de tu empresa. Solicita tu cotización directa y recibe respuesta en menos de 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/mayorista"
                id="hero-cta-mayorista"
                className="flex items-center justify-center gap-2.5 bg-[#E6A817] text-[#0A0F1E] font-bold px-7 py-4 rounded-xl hover:bg-[#F5C842] transition-all duration-200 shadow-lg hover:shadow-[#E6A817]/30 text-base group"
              >
                <Building2 size={18} className="group-hover:scale-110 transition-transform" />
                Canal Mayorista
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/minorista"
                id="hero-cta-minorista"
                className="flex items-center justify-center gap-2.5 bg-[#2DD4BF]/15 text-[#2DD4BF] font-bold px-7 py-4 rounded-xl hover:bg-[#2DD4BF]/25 border border-[#2DD4BF]/40 transition-all duration-200 text-base group"
              >
                <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                Canal Minorista
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right — WhatsApp CTA card */}
          <div className="hidden lg:flex justify-center animate-slide-right">
            <div className="relative glass rounded-3xl p-8 max-w-sm w-full border border-white/15 shadow-2xl">
              <div className="absolute -top-3 -right-3 bg-[#25D366] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse-glow">
                ¡Cotiza ya!
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center mb-5">
                <MessageCircle size={28} className="text-[#25D366]" strokeWidth={1.8} />
              </div>

              <h3 className="text-white font-bold text-xl mb-2">Cotización Directa</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Recibe tu cotización personalizada en menos de 24 horas. Sin formularios complicados.
              </p>

              <div className="space-y-2 mb-6">
                {['Precios por volumen', 'Condiciones de entrega', 'Disponibilidad inmediata', 'Muestras comerciales'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] text-[10px] font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría recibir más información sobre sus productos y precios.')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#20BA5C] transition-colors shadow-md text-sm"
              >
                <MessageCircle size={16} /> Iniciar Conversación
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
          <span className="text-xs">Explorar</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ─── B2B Trust Section ─── */}
      <B2BTrustSection />

      {/* ─── Featured Products ─── */}
      <FeaturedProducts />
    </>
  );
}
