import { Ship, Plane, Clock, Shield, BarChart3, Award } from 'lucide-react';

const trustCards = [
  {
    icon: Ship,
    title: 'Importación Marítima',
    description:
      'Contenedores FCL y LCL desde Norteamérica, Europa y Latinoamérica. Gestionamos aduana, flete y documentación.',
    detail: 'Tiempos: 15–45 días según origen',
    color: '#1A2D57',
  },
  {
    icon: Plane,
    title: 'Carga Aérea Express',
    description:
      'Para pedidos urgentes o muestras comerciales. Cobertura desde Miami, Panamá y Bogotá directamente a Santo Domingo.',
    detail: 'Tiempos: 2–5 días hábiles',
    color: '#E6A817',
  },
  {
    icon: Clock,
    title: 'Disponible en Plaza',
    description:
      'Inventario local listo para entrega inmediata. Sin espera de importación, perfecto para resurtido rápido.',
    detail: 'Entrega: 24–72 horas en RD',
    color: '#0D9488',
  },
  {
    icon: Shield,
    title: 'Garantía Corporativa',
    description:
      'Todos nuestros productos cuentan con certificaciones sanitarias (CEDOPEX, DIGEGA) y son trazables desde origen.',
    detail: 'Certificaciones internacionales vigentes',
    color: '#1A2D57',
  },
  {
    icon: BarChart3,
    title: 'Precios por Volumen',
    description:
      'Estructura de precios escalonada: mejor precio a mayor volumen. Cotizaciones en 24 h vía WhatsApp Business.',
    detail: 'MOQ flexible según producto',
    color: '#E6A817',
  },
  {
    icon: Award,
    title: 'Experiencia Comprobada',
    description:
      'Más de 10 años distribuyendo a supermercados, hoteles, restaurantes y mayoristas en toda la región caribeña.',
    detail: '+200 clientes activos en RD y el Caribe',
    color: '#0D9488',
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
            Conectamos fabricantes internacionales con distribuidores, cadenas de supermercados, hoteles y negocios en todo el Caribe con eficiencia, transparencia y garantía de calidad.
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
            { value: '+200', label: 'Clientes Activos' },
            { value: '10+', label: 'Años de Experiencia' },
            { value: '7', label: 'Categorías de Producto' },
            { value: '24h', label: 'Respuesta a Cotizaciones' },
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
