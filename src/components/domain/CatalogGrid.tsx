'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import Input from '@/components/ui/Input';
import { useMode } from '@/context/ModeContext';
import { catalog, CATEGORIES } from '@/data/catalog';
import type { Product, SupplyType } from '@/types/product';

type SupplyFilter = 'todos' | SupplyType;

export default function CatalogGrid() {
  const { mode } = useMode();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [supplyFilter, setSupplyFilter] = useState<SupplyFilter>('todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return catalog.filter((p) => {
      const matchCat = category === 'Todos' || p.category === category;
      const matchSupply =
        supplyFilter === 'todos' ||
        p.supplyType === supplyFilter ||
        p.supplyType === 'ambos';
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchCat && matchSupply && matchSearch;
    });
  }, [search, category, supplyFilter]);

  const isMayorista = mode === 'mayorista';

  return (
    <section id="catalogo" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E6A817] mb-2">Nuestros Productos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Catálogo{' '}
            <span className={isMayorista ? 'text-gradient-gold' : 'text-gradient-teal'}>
              {isMayorista ? 'Mayorista' : 'Minorista'}
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            {isMayorista
              ? 'Precios por volumen, importación directa y disponibilidad inmediata en plaza.'
              : 'Encuentra el producto ideal con disponibilidad inmediata y consulta en segundos.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1">
            <Input
              id="catalog-search"
              placeholder="Buscar por nombre, marca o categoría…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<Search size={15} />}
              aria-label="Buscar productos"
            />
          </div>

          {isMayorista && (
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} className="text-slate-400 shrink-0" />
              <select
                id="supply-filter"
                value={supplyFilter}
                onChange={(e) => setSupplyFilter(e.target.value as SupplyFilter)}
                aria-label="Filtrar por tipo de suministro"
                className="bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-[#E6A817] focus:ring-2 focus:ring-[#E6A817]/20 cursor-pointer"
              >
                <option value="todos">Todos los tipos</option>
                <option value="importacion">Importación</option>
                <option value="plaza">En Plaza</option>
                <option value="ambos">Ambos</option>
              </select>
            </div>
          )}
        </div>

        {/* Category pills */}
        <div className="flex gap-2 flex-wrap mb-8" role="group" aria-label="Filtrar por categoría">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`category-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={[
                'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border',
                category === cat
                  ? isMayorista
                    ? 'bg-[#1A2D57] text-white border-[#1A2D57] shadow-sm'
                    : 'bg-[#0D9488] text-white border-[#0D9488] shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50',
              ].join(' ')}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-slate-500">
            {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'} encontrados
          </p>
          {(search || category !== 'Todos' || supplyFilter !== 'todos') && (
            <button
              onClick={() => { setSearch(''); setCategory('Todos'); setSupplyFilter('todos'); }}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={12} /> Limpiar filtros
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger">
            {filtered.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard
                  product={product}
                  mode={mode}
                  onDetail={setSelectedProduct}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search size={40} className="text-slate-300 mb-4" />
            <h3 className="text-lg font-semibold text-slate-600 mb-1">Sin resultados</h3>
            <p className="text-slate-400 text-sm">Prueba con otro término o limpia los filtros.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          mode={mode}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
