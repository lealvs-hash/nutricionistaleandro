import React from 'react';
import { 
  Scale, 
  HeartHandshake, 
  Dumbbell, 
  Home, 
  ArrowUpRight 
} from 'lucide-react';

export default function StatsRibbon() {
  const pillars = [
    {
      icon: Scale,
      title: "Emagrecimento Real",
      desc: "Sem efeito sanfona e sem terrorismo com carboidratos.",
      href: "#emagrecimento",
      tag: "Adultos"
    },
    {
      icon: HeartHandshake,
      title: "Geriatria & 60+",
      desc: "Sarcopenia, longevidade, reabilitação e disfagia/sondas.",
      href: "#geriatria",
      tag: "Idosos & Família"
    },
    {
      icon: Dumbbell,
      title: "Nutrição Esportiva",
      desc: "Periodização, hipertrofia e recomposição corporal.",
      href: "#esportiva",
      tag: "Performance"
    },
    {
      icon: Home,
      title: "Home Care Domiciliar",
      desc: "Estrutura clínica e ISAK levados até a sua residência.",
      href: "#modalidades",
      tag: "Porto Alegre"
    }
  ];

  return (
    <section className="bg-brand-950 py-10 sm:py-12 border-y border-brand-900 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <a
                key={idx}
                href={pillar.href}
                className="group p-5 rounded-2xl bg-brand-900/40 hover:bg-brand-900/80 border border-brand-800/60 hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-800/80 group-hover:bg-brand-500/20 text-emerald-400 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-brand-800/60 text-brand-300 border border-brand-700/50">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-white font-serif font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                    {pillar.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  
                  <p className="text-brand-200/80 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
