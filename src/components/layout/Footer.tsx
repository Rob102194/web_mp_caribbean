import Link from 'next/link';
import { Anchor, Mail, Share2, Globe, ExternalLink, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data/catalog';

// Static year: update on new deploy or migrate Footer to 'use client' if dynamic year is needed
const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0A0F1E] text-slate-400 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E6A817] to-[#C88B00] flex items-center justify-center">
                <Anchor size={18} strokeWidth={2.5} className="text-[#0A0F1E]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base">MP Caribbean</span>
                <span className="text-[#E6A817] text-[10px] font-medium tracking-widest uppercase">Distribuidora</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              Soluciones de importación y distribución diseñadas para potenciar tu empresa. Tu aliado estratégico en abastecimiento internacional.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Share2, label: 'Redes Sociales', href: '#' },
                { icon: Globe, label: 'Web', href: '#' },
                { icon: ExternalLink, label: 'Más Info', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E6A817]/20 hover:text-[#E6A817] flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-2.5 text-sm">
              {['Importación Mayorista', 'Venta en Plaza', 'Logística y Entrega', 'Cotizaciones B2B', 'Catálogo de Productos'].map((item) => (
                <li key={item}>
                  <Link href="#catalogo" className="hover:text-[#E6A817] transition-colors duration-200">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Categorías</h3>
            <ul className="space-y-2.5 text-sm">
              {['Aceites y Grasas', 'Lácteos y Quesos', 'Embutidos y Carnes', 'Granos y Cereales', 'Bebidas y Jugos', 'Enlatados'].map((item) => (
                <li key={item}>
                  <Link href="#catalogo" className="hover:text-[#E6A817] transition-colors duration-200">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <MessageCircle size={15} className="text-[#E6A817] shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quisiera más información sobre sus servicios.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E6A817] transition-colors"
                >
                  Cotización Directa
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#E6A817] shrink-0" />
                <a href="mailto:ventas@mpcaribbean.com" className="hover:text-[#E6A817] transition-colors">ventas@mpcaribbean.com</a>
              </li>
            </ul>

            <div className="mt-5 p-3.5 rounded-xl bg-white/5 border border-white/8">
              <p className="text-xs text-slate-400 mb-1 font-medium">Horario B2B</p>
              <p className="text-xs text-slate-500">Lun – Vie: 8:00 am – 6:00 pm</p>
              <p className="text-xs text-slate-500">Sáb: 8:00 am – 1:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {COPYRIGHT_YEAR} MP Caribbean Distribuidora. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-400 transition-colors">Términos</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
