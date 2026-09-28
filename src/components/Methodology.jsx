import React from 'react';
import { 
  ClipboardList, 
  Stethoscope, 
  Apple, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function Methodology({ onOpenBooking }) {
  const steps = [
    {
      step: "01",
      icon: ClipboardList,
      title: "Triagem & Pré-Consulta",
      desc: "Antes do nosso encontro, você preenche um questionário detalhado sobre sua rotina, histórico clínico, preferências e aversões alimentares. Assim, chegamos à consulta com foco 100% nas suas metas."
    },
    {
      step: "02",
      icon: Stethoscope,
      title: "Avaliação Antropométrica ISAK",
      desc: "Na clínica ou no seu domicílio, aplico medições científicas milimétricas (adipômetro, paquímetro e trenas). Analisamos também minuciosamente seus exames de sangue recentes."
    },
    {
      step: "03",
      icon: Apple,
      title: "Engenharia do Plano Realista",
      desc: "Nada de cardápios de gaveta. Cada refeição é calculada para caber no seu orçamento e no tempo que você tem para cozinhar. Você recebe opções práticas de substituição."
    },
    {
      step: "04",
      icon: Smartphone,
      title: "App no Celular & Suporte Contínuo",
      desc: "Seu plano completo fica disponível no aplicativo com lista de compras. Inclui período de refino de 7 dias para ajustes finos e contato direto comigo via WhatsApp para esclarecer dúvidas."
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-surface border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
            Passo a Passo
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-4">
            Como Funciona a Sua Jornada Nutricional
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Um processo estruturado, transparente e focado em adesão sustentável a curto, médio e longo prazo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-100 text-brand-800 flex items-center justify-center transition-colors border border-brand-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif font-bold text-2xl text-stone-200 group-hover:text-brand-300 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-brand-950 text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
