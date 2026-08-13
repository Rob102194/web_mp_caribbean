'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, MessageCircle, Package, Tag, Globe, CheckCircle, XCircle } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import type { Product, UserMode } from '@/types/product';
import { WHATSAPP_NUMBER } from '@/data/catalog';

interface ProductDetailModalProps {
  product: Product;
  mode: UserMode;
  onClose: () => void;
}

function buildWhatsAppUrl(product: Product, mode: UserMode): string {
  const text =
    mode === 'mayorista'
      ? `Hola, requiero cotización al por mayor para ${product.moq} ${product.moqUnit} de *${product.name}* (${product.brand}). ¿Pueden enviarme precios y condiciones de entrega?`
      : `Hola, me interesa el producto *${product.name}* (${product.brand}). ¿Cuál es la disponibilidad actual?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const supplyLabels: Record<string, { label: string; variant: 'teal' | 'gold' | 'navy' }> = {
  importacion: { label: 'Importación Directa', variant: 'teal' },
  plaza:       { label: 'Disponible en Plaza',  variant: 'gold' },
  ambos:       { label: 'Importación / Plaza',   variant: 'navy' },
};

export default function ProductDetailModal({ product, mode, onClose }: ProductDetailModalProps) {
  const isMayorista = mode === 'mayorista';
  const waUrl = buildWhatsAppUrl(product, mode);
  const supply = supplyLabels[product.supplyType];

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      id="product-detail-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle del producto: ${product.name}`}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0A0F1E]/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        id="product-detail-modal-panel"
        className="relative bg-white w-full sm:max-w-2xl max-h-[95dvh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-modal-enter"
      >
        {/* Close */}
        <button
          id="product-detail-close"
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-slate-700 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative h-52 sm:h-64 shrink-0 bg-slate-100">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 672px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <Badge variant={supply.variant}>
              <Globe size={10} /> {supply.label}
            </Badge>
            {product.isPopular && <Badge variant="gold">⭐ Popular</Badge>}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">{product.brand}</p>
          <h2 id="modal-title" className="text-2xl font-bold text-slate-900 leading-snug mb-2">{product.name}</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">{product.description}</p>

          {/* Mode block */}
          <div className={[
            'rounded-2xl p-4 mb-5 border',
            isMayorista ? 'bg-[#0A0F1E]/5 border-[#0A0F1E]/10' : 'bg-[#2DD4BF]/8 border-[#2DD4BF]/25',
          ].join(' ')}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {isMayorista ? 'Información Mayorista' : 'Precio Minorista'}
            </h3>
            {isMayorista ? (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Package size={16} className="text-[#1A2D57]" />
                  <div>
                    <p className="text-[10px] text-slate-500">MOQ mínimo</p>
                    <p className="font-bold text-[#1A2D57]">{product.moq} {product.moqUnit}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Rango de precio</p>
                  <p className="font-semibold text-slate-700 text-sm">{product.wholesalePriceRange ?? 'A cotizar'}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-[#0D9488]" />
                <div>
                  <p className="text-[10px] text-slate-500">Precio sugerido</p>
                  <p className="text-2xl font-bold text-[#0D9488]">
                    {product.retailPrice != null
                      ? `USD $${product.retailPrice.toLocaleString('en-US')}`
                      : 'Consultar'}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Features */}
          {product.features.length > 0 && (
            <div className="mb-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Características</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specs */}
          {product.specifications.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Especificaciones Técnicas</h3>
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                {product.specifications.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={['flex justify-between items-center px-4 py-2.5 text-sm', i % 2 === 0 ? 'bg-slate-50' : 'bg-white'].join(' ')}
                  >
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="text-slate-800 font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stock */}
          <div className="flex items-center gap-2 mb-6">
            {product.inStock ? (
              <><CheckCircle size={15} className="text-emerald-500" /><span className="text-sm text-emerald-700 font-medium">Disponible en stock</span></>
            ) : (
              <><XCircle size={15} className="text-red-400" /><span className="text-sm text-red-600 font-medium">Sin stock momentáneo</span></>
            )}
          </div>

          {/* CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`modal-whatsapp-btn-${product.id}`}
            className={[
              'flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-base transition-all duration-200 shadow-md',
              product.inStock
                ? 'bg-[#25D366] text-white hover:bg-[#20BA5C] hover:shadow-lg'
                : 'bg-slate-200 text-slate-400 pointer-events-none',
            ].join(' ')}
            aria-disabled={!product.inStock}
          >
            <MessageCircle size={18} />
            {isMayorista ? 'Solicitar Cotización por Volumen' : 'Consultar Disponibilidad'}
          </a>
        </div>
      </div>
    </div>
  );
}
