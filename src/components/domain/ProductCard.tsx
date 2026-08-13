'use client';

import Image from 'next/image';
import { MessageCircle, Package, Globe, Star, Tag, Info } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import type { Product, UserMode } from '@/types/product';
import { WHATSAPP_NUMBER } from '@/data/catalog';

interface ProductCardProps {
  product: Product;
  mode: UserMode;
  onDetail: (product: Product) => void;
}

function buildWhatsAppUrl(product: Product, mode: UserMode): string {
  const text =
    mode === 'mayorista'
      ? `Hola, requiero cotización al por mayor para ${product.moq} ${product.moqUnit} de *${product.name}* (${product.brand}). ¿Pueden enviarme precios y condiciones?`
      : `Hola, consulto disponibilidad para el producto *${product.name}* (${product.brand}). Me gustaría más información.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const supplyLabels: Record<string, { label: string; variant: 'teal' | 'gold' | 'navy' }> = {
  importacion: { label: 'Importación', variant: 'teal' },
  plaza:       { label: 'En Plaza',    variant: 'gold' },
  ambos:       { label: 'Importación / Plaza', variant: 'navy' },
};

export default function ProductCard({ product, mode, onDetail }: ProductCardProps) {
  const supply = supplyLabels[product.supplyType];
  const isMayorista = mode === 'mayorista';
  const waUrl = buildWhatsAppUrl(product, mode);

  return (
    <article
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isPopular && (
            <Badge variant="gold">
              <Star size={10} fill="currentColor" /> Popular
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="red">Agotado</Badge>
          )}
        </div>

        {isMayorista && (
          <div className="absolute top-3 right-3">
            <Badge variant={supply.variant}>
              <Globe size={10} /> {supply.label}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">{product.brand}</p>
          <h3 className="text-slate-900 font-bold text-base leading-snug line-clamp-2">{product.name}</h3>
          <p className="text-slate-500 text-xs mt-1 line-clamp-2 leading-relaxed">{product.description}</p>
        </div>

        {/* Mode-specific price block */}
        <div className={[
          'rounded-xl p-3 transition-all duration-300',
          isMayorista ? 'bg-[#0A0F1E]/5 border border-[#0A0F1E]/10' : 'bg-[#2DD4BF]/8 border border-[#2DD4BF]/20',
        ].join(' ')}>
          {isMayorista ? (
            <div className="flex items-center gap-2">
              <Package size={14} className="text-[#1A2D57] shrink-0" />
              <div>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">MOQ mínimo</p>
                <p className="text-sm font-bold text-[#1A2D57]">
                  {product.moq} {product.moqUnit}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Tag size={14} className="text-[#0D9488] shrink-0" />
              <div>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Precio unitario</p>
                <p className="text-sm font-bold text-[#0D9488]">
                  {product.retailPrice != null
                    ? `USD $${product.retailPrice.toLocaleString('en-US')}`
                    : 'Consultar'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-1">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`whatsapp-btn-${product.id}`}
            className={[
              'flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md',
              product.inStock
                ? 'bg-[#25D366] text-white hover:bg-[#20BA5C]'
                : 'bg-slate-200 text-slate-400 pointer-events-none',
            ].join(' ')}
            aria-disabled={!product.inStock}
          >
            <MessageCircle size={15} strokeWidth={2.2} />
            {isMayorista ? 'Cotizar' : 'Consultar'}
          </a>
          <button
            id={`detail-btn-${product.id}`}
            onClick={() => onDetail(product)}
            aria-label={`Ver detalles de ${product.name}`}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:border-[#1A2D57] hover:text-[#1A2D57] hover:bg-[#1A2D57]/5 transition-all duration-200"
          >
            <Info size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}
