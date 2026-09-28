import React from 'react';
import { 
  Utensils, 
  Clock, 
  Flame, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function WeightLossSection({ onOpenBooking }) {
  const pillars = [
    {
      icon: Utensils,
      title: "Sem Terrorismo Nutricional",
      desc: "Esqueça a proibição cega de carboidratos, do arroz com feijão ou do seu doce favorito. O segredo duradouro está no balanço calórico, na distribuição e nas quantidades certas."
    },
    {
      icon: Clock,
      title: "Adequação à sua Rotina Real",
      desc: "Um plano que respeita a sua vida real. Comida acessível que cabe no seu bolso, sem receitas mirabolantes de três horas ou ingredientes difíceis de encontrar."
    },
    {
      icon: Flame,
      title: "Gordura Menor, Músculo Preservado",
      desc: "O objetivo nunca é apenas ver a balança cair a qualquer custo. Focamos em perder gordura subcutânea e visceral preservando sua massa magra para evitar a flacidez."
    },
    {
      icon: Compass,
      title: "Autonomia para a Vida Toda",
      desc: "Você vai aprender a lidar com festas, viagens e jantares de trabalho. O propósito final é que você se torne o gestor da sua própria alimentação, livre do efeito sanfona."
    }
  ];

  return (
    <section id="emagrecimento" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
          
          {/* Right Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-700" />
              Perda de Peso Sustentável
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-6 leading-tight">
              Emagrecimento com Saúde, Prazer e Resultados Definitivos
            </h2>

            <p className="text-stone-600 text-base sm:text-lg mb-5 leading-relaxed">
              O maior erro de quem quer emagrecer é adotar restrições extremas que geram ansiedade, compulsão alimentar e desistência na terceira semana. 
            </p>

            <p className="text-stone-600 text-base sm:text-lg mb-8 leading-relaxed">
              Como alguém que viveu essa luta contra a balança na adolescência, construo um plano alimentar com <strong>comida de verdade, sabor e flexibilidade</strong>. Você atinge seus objetivos estéticos e de saúde sentindo prazer no processo.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="space-y-3 mb-8">
              {[
                "Plano calculado para seu metabolismo basal e rotina de passos/atividades",
                "Opções de substituições inteligentes para você não enjoar",
                "Acompanhamento contínuo da composição corporal com antropometria ISAK"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <span className="text-stone-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="bg-brand-900 hover:bg-brand-800 text-white font-semibold px-7 py-3.5 rounded-xl text-sm shadow-premium transition-all inline-flex items-center gap-2"
            >
              <span>Quero Emagrecer com Saúde</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Left Cards Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-100 text-brand-700 flex items-center justify-center mb-4 transition-colors border border-brand-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-serif font-bold text-brand-950 text-lg mb-2">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
