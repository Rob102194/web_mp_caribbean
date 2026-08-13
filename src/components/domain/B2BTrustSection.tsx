import { Ship, Clock, Shield, BarChart3, Award, FileCheck } from 'lucide-react';

const trustCards = [
  {
    icon: Ship,
    title: 'Importación Marítima',
    description:
      'Contenedores FCL y LCL de origen directo. Gestionamos aduana, flete y documentación para abastecer tu inventario sin complicaciones.',
    detail: 'Tiempos: 15–45 días según modalidad',
    color: '#38BDF8',
  },
  {
    icon: Clock,
    title: 'Disponible en Plaza',
    description:
      'Inventario local listo para entrega inmediata. El resurtido rápido que tu comercio necesita, sin esperas de importación.',
    detail: 'Disponibilidad inmediata para tu operación',
    color: '#0D9488',
  },
  {
    icon: Shield,
    title: 'Garantía de Calidad',
    description:
      'Todos nuestros productos cuentan con certificaciones sanitarias internacionales (FDA / HACCP) y son trazables desde origen.',
    detail: 'Certificaciones internacionales vigentes',
    color: '#38BDF8',
  },
  {
    icon: BarChart3,
    title: 'Precios por Volumen',
    description:
      'Estructura de precios escalonada: mejor precio a mayor volumen. Cotizaciones en 24 h directamente para tu empresa.',
    detail: 'MOQ flexible según producto',
    color: '#E6A817',
  },
  {
    icon: Award,
    title: 'Abastecimiento Directo',
    description:
      'Sin intermediarios innecesarios. Conectamos la producción internacional directamente con tu negocio, con máxima transparencia.',
    detail: 'Tu aliado estratégico en importación',
    color: '#0D9488',
  },
  {
    icon: FileCheck,
    title: 'Gestión Aduanera',
    description:
      'Gestionamos permisos, certificados sanitarios y trámites de aduana para que tu pedido llegue sin contratiempos ni demoras.',
    detail: 'Documentación completa incluida',
    color: '#E6A817',
  },
];

export default function B2BTrustSection() {
  return (
    <section id="b2b-trust" className="py-20 bg-[#0A0F1E] relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1A2D57]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E6A817]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E6A817] mb-3">Por qué elegirnos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Capacidad Logística{' '}
            <span className="text-gradient-gold">de Clase Mundial</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Conectamos fabricantes internacionales directamente con <strong className="text-slate-300">tu empresa</strong>, garantizando eficiencia, precios competitivos y un abastecimiento confiable para <strong className="text-slate-300">tu operación</strong>.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="group glass rounded-2xl p-6 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${card.color}30`, border: `1px solid ${card.color}40` }}
              >
                <card.icon size={22} style={{ color: card.color }} strokeWidth={1.8} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{card.description}</p>
              <p
                className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block"
                style={{ color: card.color, backgroundColor: `${card.color}15`, border: `1px solid ${card.color}30` }}
              >
                {card.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/8">
          {[
            { value: 'Tu MOQ', label: 'Cantidades a tu medida' },
            { value: '24h', label: 'Respuesta a Cotizaciones' },
            { value: '7', label: 'Categorías de Producto' },
            { value: '100%', label: 'Calidad Garantizada' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-gradient-gold">{stat.value}</p>
              <p className="text-slate-500 text-xs mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
