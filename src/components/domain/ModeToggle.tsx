'use client';

import { useMode } from '@/context/ModeContext';
import { Building2, ShoppingBag } from 'lucide-react';

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div
      id="mode-toggle"
      role="group"
      aria-label="Seleccionar modo de compra"
      className="flex items-center bg-[#0D1526] rounded-2xl p-1 gap-0.5 border border-white/10"
    >
      <button
        id="mode-toggle-mayorista"
        role="radio"
        aria-checked={mode === 'mayorista'}
        onClick={() => setMode('mayorista')}
        className={[
          'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer',
          mode === 'mayorista'
            ? 'bg-[#E6A817] text-[#0A0F1E] shadow-md'
            : 'text-slate-400 hover:text-white',
        ].join(' ')}
      >
        <Building2 size={15} strokeWidth={2.2} />
        <span>Mayorista</span>
      </button>

      <button
        id="mode-toggle-minorista"
        role="radio"
        aria-checked={mode === 'minorista'}
        onClick={() => setMode('minorista')}
        className={[
          'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer',
          mode === 'minorista'
            ? 'bg-[#2DD4BF] text-[#0A0F1E] shadow-md'
            : 'text-slate-400 hover:text-white',
        ].join(' ')}
      >
        <ShoppingBag size={15} strokeWidth={2.2} />
        <span>Minorista</span>
      </button>
    </div>
  );
}
