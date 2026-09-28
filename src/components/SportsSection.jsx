import React from 'react';
import { 
  Dumbbell, 
  Zap, 
  Flame, 
  BatteryCharging, 
  ArrowRight, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

export default function SportsSection({ onOpenBooking }) {
  const sportsCards = [
    {
      icon: Dumbbell,
      title: "Periodização Nutricional",
      desc: "Distribuição cirúrgica dos macronutrientes alinhada aos seus blocos de treino. Energia máxima nos dias pesados e déficit controlado para secar mantendo as cargas na academia."
    },
    {
      icon: Zap,
      title: "Suplementação de Nível A",
      desc: "Sem desperdício de dinheiro com pós milagrosos. Prescrição focada em ergogênicos com comprovação científica máxima (creatina, beta-alanina, whey protein, cafeína)."
    },
    {
      icon: Flame,
      title: "Recomposição Corporal",
      desc: "Ajustes de particionamento calórico e timing proteico para otimizar a sensibilidade insulínica e canalizar os nutrientes para a síntese proteica muscular."
    },
    {
      icon: BatteryCharging,
      title: "Recuperação & Pré/Pós Treino",
      desc: "Estratégias para rápida reposição de glicogênio muscular, atenuação das dores tardias (DOMS) e prevenção de overtraining em rotinas de alta intensidade ou artes marciais."
    }
  ];

  return (
    <section id="esportiva" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Dumbbell className="w-3.5 h-3.5 text-brand-700" />
              Alta Performance & Hipertrofia
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-6 leading-tight">
              Nutrição Esportiva Praticada por Quem Vive o Treino Diariamente
            </h2>

            <p className="text-stone-600 text-base sm:text-lg mb-4 leading-relaxed">
              A ciência acadêmica é indispensável, mas <strong>entender o que acontece debaixo da barra de agachamento transforma tudo</strong>. Pratico musculação há mais de duas décadas e sou adepto de artes marciais.
            </p>

            <p className="text-stone-600 text-base sm:text-lg mb-6 leading-relaxed">
              Já estive em todas as etapas que você enfrenta: ganho de volume (*bulking*), definição severa (*cutting*), fadiga e quebra de platôs. Traduzo essa experiência prática e o rigor científico em um protocolo que se adapta à sua intensidade de treino.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-brand-900 hover:bg-brand-800 text-white font-semibold px-6 py-3.5 rounded-xl text-sm shadow-premium transition-all inline-flex items-center gap-2"
              >
                <span>Agendar Nutrição Esportiva</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-stone-500 font-medium">
                ⚡ Planos para iniciantes, intermediários e atletas
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {sportsCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface p-6 rounded-3xl border border-stone-200/90 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-900 text-emerald-300 flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif font-bold text-brand-950 text-lg mb-2">
                      {card.title}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {card.desc}
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
