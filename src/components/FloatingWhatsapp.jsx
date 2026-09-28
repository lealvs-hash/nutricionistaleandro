import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsapp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17752409667/oZQZCOrzm5UcEMOMgZfC'
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-stone-800 text-xs font-semibold py-2.5 px-4 rounded-2xl shadow-xl border border-stone-200 animate-bounce">
          <span>Tire dúvidas ou agende no WhatsApp!</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-600 ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href="https://wa.me/5551991333905?text=Ol%C3%A1%2C%20Leandro!%20Estava%20no%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group pulse-ring"
        aria-label="Falar com Nutricionista Leandro Alves no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
}
