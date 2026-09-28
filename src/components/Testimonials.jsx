import React from 'react';
import { Star, Quote, HeartHandshake, Dumbbell, Scale } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Maria Helena e Família",
      age: "74 anos • Porto Alegre",
      category: "Home Care & Saúde do Idoso",
      icon: HeartHandshake,
      badgeColor: "bg-brand-100 text-brand-800",
      content: "Minha mãe estava perdendo muito peso após uma cirurgia e recusava comida. O Leandro veio na nossa casa com um carinho e paciência ímpares. Ajustou as preparações, conversou com a cuidadora e em três meses minha mãe recuperou a força nas pernas e a disposição para caminhar. Um profissional raro!",
      rating: 5
    },
    {
      name: "Carlos Eduardo Santos",
      age: "42 anos • Porto Alegre",
      category: "Emagrecimento & Reeducação",
      icon: Scale,
      badgeColor: "bg-emerald-100 text-emerald-800",
      content: "Eu já tinha tentado de tudo: low carb radical, jejum... e sempre recuperava o peso em dobro. Com o Leandro aprendi a comer sem culpa, mantendo meu churrasco no fim de semana e a rotina do trabalho. Já são -15kg em 6 meses com exames de colesterol e glicose 100% normalizados.",
      rating: 5
    },
    {
      name: "Juliana Rocha",
      age: "31 anos • Porto Alegre",
      category: "Nutrição Esportiva & ISAK",
      icon: Dumbbell,
      badgeColor: "bg-amber-100 text-amber-800",
      content: "Treino musculação há 5 anos e estava travada. A avaliação ISAK no MedPlex abriu meus olhos: a balança não se mexia, mas com o ajuste de carboidratos e suplementos ganhei 3kg de massa pura e baixei meu percentual de gordura. O cara realmente entende de treino!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Depoimentos Reais
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-4">
            Histórias de Transformação e Cuidado
          </h2>

          <p className="text-stone-600 text-base sm:text-lg">
            Mais do que números na balança, nosso foco é devolver energia, saúde, longevidade e autoestima para cada paciente.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => {
            const Icon = rev.icon;
            return (
              <div
                key={idx}
                className="bg-surface rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category and Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${rev.badgeColor}`}>
                      {rev.category}
                    </span>
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-brand-200 mb-3" />

                  <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                    "{rev.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-brand-950 text-base">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-stone-500">
                      {rev.age}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
