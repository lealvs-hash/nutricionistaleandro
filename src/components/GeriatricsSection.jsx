import React, { useState } from 'react';
import { 
  HeartHandshake, 
  ChevronDown, 
  Sun, 
  Scale, 
  Bone, 
  UtensilsCrossed, 
  Activity, 
  Ribbon, 
  Brain, 
  Filter, 
  Check, 
  Home, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export default function GeriatricsSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0); // first item opened by default

  const specialtyItems = [
    {
      icon: Sun,
      title: "Envelhecimento Saudável & Longevidade",
      summary: "Manutenção da autonomia motora, vitalidade diária e suporte cognitivo.",
      details: "A nutrição geriátrica preventiva foca em manter a energia para as tarefas diárias, preservar a memória, fortalecer a imunidade e garantir a absorção ideal de micronutrientes essenciais (vitamina B12, cálcio, zinco, vitamina D), promovendo um envelhecimento ativo com total independência.",
      symptoms: ["Cansaço frequente", "Queda de imunidade", "Desejo de prevenção a longo prazo"]
    },
    {
      icon: Scale,
      title: "Perda de Peso Involuntária & Desnutrição",
      summary: "Estratégias hipercalóricas e hiperproteicas de alta aceitação.",
      details: "Perder peso sem motivo na terceira idade é um sinal de alerta grave. Desenvolvemos estratégias alimentares fracionadas de alta densidade nutricional, suplementação de fácil digestão e enriquecimento de preparações cotidianas para reverter a desnutrição sem empanturrar o paciente.",
      symptoms: ["Roupas folgadas rapidamente", "Falta de apetite crônica", "Apatia e fraqueza constante"]
    },
    {
      icon: Bone,
      title: "Sarcopenia & Quedas (Massa Muscular)",
      summary: "Ajuste milimétrico de proteínas e aminoácidos para resgatar a força.",
      details: "A perda acelerada de músculo é a causa número um de perda de equilíbrio, quedas e fraturas no idoso. Ajustamos a ingestão de proteínas de alto valor biológico e suplementos ergogênicos consagrados (como creatina geriátrica) para devolver firmeza, equilíbrio e segurança ao caminhar.",
      symptoms: ["Dificuldade para levantar da cadeira", "Passos lentos e arrastados", "Perda visível de volume muscular"]
    },
    {
      icon: UtensilsCrossed,
      title: "Disfagia & Nutrição Enteral (Sonda Domiciliar)",
      summary: "Manejo de engasgos e acompanhamento completo de dieta enteral em casa.",
      details: "Manejo rigoroso das alterações na deglutição para prevenir broncoaspiração e pneumonias aspirativas. Para pacientes que necessitam de sonda (nasogástrica, nasoenteral ou gastrostomia/GTT), realizo cálculo calórico-proteico, prescrição da fórmula industrializada ou artesanal e treinamento completo do cuidador.",
      symptoms: ["Tosse ou engasgo durante a refeição", "Uso de sonda enteral (SNE/GTT)", "Voz borbulhante após beber água"]
    },
    {
      icon: Activity,
      title: "Hipertensão, Diabetes & Colesterol",
      summary: "Regulação metabólica sem proibições radicais e auxílio médico.",
      details: "Conduta focada em estabilizar a glicemia (evitando picos e hipoglicemias perigosas), modular a pressão arterial e normalizar o perfil lipídico. O objetivo é reduzir os riscos cardiovasculares e muitas vezes auxiliar o médico a otimizar as doses dos medicamentos.",
      symptoms: ["Glicose desregulada", "Pressão oscilante", "Exames de sangue alterados"]
    },
    {
      icon: Ribbon,
      title: "Suporte Nutricional em Oncologia (Câncer)",
      summary: "Alívio de efeitos colaterais de quimioterapia e proteção do peso.",
      details: "Acompanhamento pré, durante e pós-tratamento oncológico. Focamos no alívio de náuseas, alterações de paladar, mucosite (feridas na boca) e prevenção da caquexia tumoral, mantendo o organismo forte para suportar as sessões de quimioterapia e radioterapia.",
      symptoms: ["Náuseas e enjoos frequentes", "Sensação de gosto metálico", "Perda rápida de massa celular"]
    },
    {
      icon: Brain,
      title: "Demências (Alzheimer, Parkinson e Outras)",
      summary: "Apoio prático a familiares e cuidadores para vencer a recusa alimentar.",
      details: "À medida que a cognição se altera, a alimentação pode se tornar um desafio diário: esquecimento de comer, recusa alimentar, agitação ou troca de horários. Ofereço orientação técnica e prática a familiares e cuidadores com estratégias para tornar a alimentação tranquila, segura e nutritiva.",
      symptoms: ["Esquecimento de refeições", "Recusa a comer pratos salgados", "Falta de concentração na mesa"]
    },
    {
      icon: Filter,
      title: "Doença Renal Crônica (Conservadora & Hemodiálise)",
      summary: "Controle cirúrgico de potássio, fósforo, ureia, sódio e proteínas.",
      details: "Na fase conservadora, modulamos a carga proteica e eletrólitos para retardar a progressão da lesão renal. Em pacientes em hemodiálise, o foco se inverte para prevenir a desnutrição dialítica e controlar líquidos com máxima segurança técnica.",
      symptoms: ["Ureia e creatinina elevadas", "Restrição de líquidos indicada pelo nefrologista", "Inchaço nas pernas"]
    }
  ];

  return (
    <section id="geriatria" className="py-24 bg-brand-50/60 border-y border-brand-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
            <HeartHandshake className="w-3.5 h-3.5 text-brand-700" />
            Especialidade em Geriatria & Reabilitação
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-4">
            Nutrição Especializada para Adultos 60+ e Reabilitação
          </h2>
          
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Com sólida <strong>experiência hospitalar</strong> atuando em hospitais de Porto Alegre no cuidado a pacientes internados em UTI, pós-operatório e diferentes graus de complexidade e internação — além de atuação no <strong>Hospital de Clínicas de Porto Alegre (PICCAP)</strong> e em instituições de longa permanência —, proporciono um olhar técnico e humano para a recuperação clínica, a saúde e a longevidade dos pacientes.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-brand-800 text-xs sm:text-sm font-semibold bg-white/80 px-4 py-1.5 rounded-full border border-brand-200 shadow-sm">
            <Home className="w-4 h-4 text-emerald-600" />
            <span>Disponível em Atendimento Domiciliar (Home Care) em toda Porto Alegre</span>
          </div>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {specialtyItems.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-soft ${
                  isOpen 
                    ? 'border-brand-500 shadow-premium ring-1 ring-brand-400' 
                    : 'border-stone-200/90 hover:border-brand-300'
                }`}
              >
                {/* Header Clickable */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-brand-900 text-emerald-300' : 'bg-brand-100 text-brand-800'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-brand-950 text-base sm:text-lg leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-stone-500 text-xs sm:text-sm mt-1">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className={`p-1.5 rounded-lg text-stone-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-brand-700 bg-brand-50' : 'rotate-0'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Animated Inner Content */}
                <div className={`accordion-grid ${isOpen ? 'open' : ''}`}>
                  <div className="accordion-inner">
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-stone-100 text-stone-600 text-sm leading-relaxed space-y-3">
                      <p>{item.details}</p>

                      <div className="bg-brand-50/70 p-3 rounded-xl border border-brand-100 text-xs">
                        <span className="font-bold text-brand-950 block mb-1">
                          Sinais de atenção comuns:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.symptoms.map((sym, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="bg-white px-2.5 py-1 rounded-md text-stone-700 border border-stone-200/80 font-medium"
                            >
                              • {sym}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Home Care Banner CTA for Geriatrics */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-brand-200 shadow-premium flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-900 text-emerald-300 flex items-center justify-center shrink-0 shadow-md">
              <Home className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-brand-950 text-lg sm:text-xl">
                Deseja atendimento no conforto do lar do seu familiar?
              </h4>
              <p className="text-stone-600 text-sm mt-0.5">
                Atendo em residências e ILPIs em Porto Alegre com todos os equipamentos de avaliação corporal.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full md:w-auto bg-brand-900 hover:bg-brand-800 text-white font-semibold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all whitespace-nowrap active:scale-95"
          >
            Consultar Regiões Domiciliares
          </button>
        </div>

      </div>
    </section>
  );
}
