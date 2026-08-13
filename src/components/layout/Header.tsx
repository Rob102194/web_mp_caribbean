'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/mayorista', label: 'Mayorista' },
    { href: '/minorista', label: 'Minorista' },
    { href: '#catalogo', label: 'Catálogo' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header
      id="main-header"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0A0F1E]/95 backdrop-blur-lg shadow-2xl border-b border-white/5'
          : 'bg-[#0A0F1E]',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" id="header-logo" className="flex items-center gap-2.5 group" aria-label="MP Caribbean — Inicio">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E6A817] to-[#C88B00] flex items-center justify-center shadow-md group-hover:shadow-[#E6A817]/30 transition-shadow duration-300">
              <Anchor size={18} strokeWidth={2.5} className="text-[#0A0F1E]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base tracking-tight">MP Caribbean</span>
              <span className="text-[#E6A817] text-[10px] font-medium tracking-widest uppercase">Importadora</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-[#0D1526] border-t border-white/8 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
