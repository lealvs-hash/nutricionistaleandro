import React from 'react';
import { 
  Award, 
  Shirt, 
  CheckCircle2, 
  Layers, 
  Scale, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function IsakSection({ onOpenBooking }) {
  const comparison = [
    {
      feature: "Precisão e Reprodutibilidade",
      isak: "Milimétrica e padronizada internacionalmente",
      standard: "Sensível a retenção de água, café e sono"
    },
    {
      feature: "Diferenciação Tecidual",
      isak: "Mede gordura subcutânea, massa óssea e muscular real",
      standard: "Estimativa indireta por condutividade elétrica"
    },
    {
      feature: "Evolução Corporal Real",
      isak: "Mapeia exatamente onde houve perda de gordura e ganho",
      standard: "Variação diária que confunde o paciente"
    }
  ];

  return (
    <section id="avaliacao-fisica" className="py-24 bg-surface-alt border-y border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
            <Award className="w-3.5 h-3.5 text-brand-700" />
            Certificação Internacional ISAK Nível 1
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-4">
            Avaliação Física Padrão Ouro Internacional
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Utilizo o método da <strong>ISAK</strong> <em>(International Society for the Advancement of Kinanthropometry)</em>, a entidade reguladora global da cineantropometria utilizada por comitês olímpicos e centros médicos de excelência.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Explanations and Comparison Table */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-soft">
              <h3 className="text-xl font-serif font-bold text-brand-950 mb-3">
                Por que a medição ISAK supera balanças comuns?
              </h3>
              
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Balanças comuns e muitas bioimpedâncias sofrem interferência drástica por desidratação momentânea, ingestão de café, fase do ciclo menstrual ou última refeição. Com o <strong>Adipômetro Clínico, Paquímetro Ósseo e Trena Antropométrica</strong>, medimos espessuras reais de pele e gordura, sabendo com exatidão matemática o que é gordura, água, osso e massa magra.
              </p>

              {/* Comparison Grid */}
              <div className="space-y-3">
                {comparison.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface border border-stone-200/80 text-xs sm:text-sm">
                    <span className="font-bold text-stone-900 block mb-1">{item.feature}:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                      <div className="flex items-start gap-1.5 text-brand-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>ISAK:</strong> {item.isak}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-stone-500">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span><strong>Outros:</strong> {item.standard}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation / Dress Code Guide */}
            <div className="bg-brand-50/80 border border-brand-200/90 rounded-3xl p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-brand-800 flex items-center justify-center shrink-0 shadow-sm border border-brand-100">
                  <Shirt className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-950 text-base sm:text-lg mb-1">
                    Preparo e Vestimenta para a Avaliação
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mb-3">
                    Tanto no consultório MedPlex quanto no atendimento domiciliar, é fundamental o uso de roupas adequadas para o acesso aos pontos anatômicos:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-white p-3 rounded-xl border border-brand-100">
                      <span className="font-bold text-brand-900 block mb-0.5">Homens:</span>
                      <p className="text-stone-600">Sem camiseta, shorts/bermuda esportiva e descalço.</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-brand-100">
                      <span className="font-bold text-brand-900 block mb-0.5">Mulheres:</span>
                      <p className="text-stone-600">Top esportivo, shorts/bermuda esportiva e descalça.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Real Photos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-premium border-4 border-white bg-white">
              <img
                src="/images/foto-isak.jpg"
                alt="Nutricionista Leandro Alves realizando medição antropométrica ISAK com adipômetro"
                className="w-full h-64 sm:h-72 object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "/foto isak.jpeg";
                }}
              />
              <div className="p-4 bg-white text-center">
                <p className="text-xs font-semibold text-brand-950">Medição milimétrica de dobras cutâneas</p>
                <p className="text-[11px] text-stone-500">Monitoramento real da evolução corporal</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-premium border-4 border-white bg-white">
              <img
                src="/images/guia-avaliacao-fisica.png"
                alt="Guia de vestimentas recomendadas para a avaliação física ISAK"
                className="w-full h-56 sm:h-64 object-contain p-4 bg-stone-50"
                onError={(e) => {
                  e.currentTarget.src = "/imagem avaliação fisica.png";
                }}
              />
              <div className="p-3 bg-white text-center border-t border-stone-100">
                <p className="text-xs text-stone-600 font-medium">Ilustração da vestimenta recomendada</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
