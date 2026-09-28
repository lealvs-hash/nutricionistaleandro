import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Geriatria & 60+', href: '#geriatria' },
    { label: 'Emagrecimento', href: '#emagrecimento' },
    { label: 'Esportiva', href: '#esportiva' },
    { label: 'Avaliação ISAK', href: '#avaliacao-fisica' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Consultório', href: '#localizacao' },
  ];

  const handleWhatsappConversion = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17752409667/oZQZCOrzm5UcEMOMgZfC'
      });
    }
  };

  return (
    <>
      {/* Top Banner Informativo */}
      <div className="bg-brand-950 text-brand-100 text-xs py-2 px-4 border-b border-brand-900/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-brand-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              MedPlex Santana • Porto Alegre / RS & Domiciliar
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-brand-200">
              Atendimento Clínico, Esportivo e Saúde do Idoso
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-brand-300 font-semibold">CRN2 20221</span>
            <span className="text-stone-500">•</span>
            <a 
              href="https://wa.me/5551991333905?text=Ol%C3%A1%2C%20Leandro!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappConversion}
              className="text-white hover:text-brand-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-brand-400" /> (51) 99133-3905
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-soft py-3' 
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group" title="Página Inicial Leandro Alves">
            <div className="relative">
              <img 
                src="/favicon.png" 
                alt="Logotipo Leandro Alves Nutricionista" 
                className="w-10 h-10 md:w-11 md:h-11 rounded-xl shadow-sm object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "/favicom-500x500.png";
                }}
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg md:text-xl text-brand-950 tracking-tight leading-none">
                  Leandro Alves
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-brand-50 text-brand-800 rounded-full border border-brand-200">
                  Nutricionista
                </span>
              </div>
              <span className="text-[11px] md:text-xs text-stone-500 font-medium mt-0.5">
                Clínica • Geriatria • Esportiva • ISAK
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-brand-800 text-sm font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-brand-900 hover:bg-brand-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-premium hover:shadow-hover transition-all duration-300 flex items-center gap-2 transform active:scale-95"
            >
              <Calendar className="w-4 h-4 text-brand-300" />
              <span>Agendar Consulta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenBooking}
              className="bg-brand-900 text-white p-2 rounded-lg text-xs font-semibold sm:hidden flex items-center gap-1"
              aria-label="Agendar"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-stone-700 hover:text-brand-900 hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label="Abrir Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/98 backdrop-blur-xl border-t border-stone-200 shadow-2xl px-6 py-6 transition-all duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-stone-700 hover:text-brand-900 font-medium py-2.5 border-b border-stone-100 text-base flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-stone-300" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-brand-900 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-transform"
                >
                  <Calendar className="w-5 h-5 text-brand-300" />
                  Agendar Consulta
                </button>

                <a
                  href="https://wa.me/5551991333905?text=Ol%C3%A1%2C%20Leandro!%20Gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsappConversion}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
