import React from 'react';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';

export default function InstagramCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-400/10 rounded-full filter blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20 shadow-lg">
          <Instagram className="w-8 h-8 text-emerald-300" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
          Acompanhe Conteúdos Diários no Instagram
        </h2>

        <p className="text-brand-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Posto análises científicas descomplicadas sobre longevidade, reeducação alimentar sem radicalismo, suplementação esportiva e rotinas práticas para o dia a dia.
        </p>

        <a
          href="https://instagram.com/leandro.alves.nutri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white hover:bg-stone-100 text-brand-950 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Instagram className="w-5 h-5 text-emerald-700" />
          <span>Seguir @leandro.alves.nutri</span>
          <ArrowRight className="w-4 h-4 text-brand-900" />
        </a>
      </div>
    </section>
  );
}
