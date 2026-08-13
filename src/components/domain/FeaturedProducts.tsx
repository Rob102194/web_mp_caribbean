import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { catalog, WHATSAPP_NUMBER } from '@/data/catalog';

const featured = catalog.filter((p) => p.isPopular && p.inStock);

export default function FeaturedProducts() {
  return (
    <section id="destacados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E6A817] mb-2">Nuestros Productos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Productos{' '}
            <span className="text-gradient-gold">Destacados</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Una selección de los productos más solicitados de nuestro catálogo.
            Calidad de importación directa, disponible para tu negocio.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {featured.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0A0F1E]/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1 bg-[#E6A817] text-[#0A0F1E] text-[10px] font-bold px-2.5 py-1 rounded-full">
                    <Star size={9} fill="currentColor" /> Destacado
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                  {product.brand}
                </p>
                <h3 className="text-slate-900 font-bold text-lg leading-snug mb-3">
                  {product.name}
                </h3>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {product.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle size={12} className="text-[#0D9488] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hola, me interesa obtener más información sobre el producto *${product.name}* (${product.brand}). ¿Podrían enviarme detalles?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`featured-wa-${product.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold py-2.5 rounded-xl hover:bg-[#20BA5C] transition-colors text-sm mt-auto"
                >
                  <MessageCircle size={15} />
                  Consultar Producto
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="rounded-2xl bg-[#0A0F1E] px-8 py-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#E6A817]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E6A817] mb-2">Catálogo Completo</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              ¿Interesado en abastecerte?
            </h3>
            <p className="text-slate-400 text-sm mb-7 max-w-md mx-auto leading-relaxed">
              Explora el catálogo completo con precios, condiciones y disponibilidad real,
              adaptado al tipo de compra que necesitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mayorista"
                id="featured-cta-mayorista"
                className="flex items-center justify-center gap-2 bg-[#E6A817] text-[#0A0F1E] font-bold px-6 py-3 rounded-xl hover:bg-[#F5C842] transition-colors shadow-md text-sm"
              >
                Canal Mayorista <ArrowRight size={15} />
              </Link>
              <Link
                href="/minorista"
                id="featured-cta-minorista"
                className="flex items-center justify-center gap-2 bg-[#2DD4BF]/15 text-[#2DD4BF] font-bold px-6 py-3 rounded-xl hover:bg-[#2DD4BF]/25 border border-[#2DD4BF]/40 transition-colors text-sm"
              >
                Canal Minorista <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
