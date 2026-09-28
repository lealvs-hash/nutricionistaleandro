import React from 'react';
import { 
  Building2, 
  Home, 
  Video, 
  Check, 
  ArrowRight, 
  MapPin, 
  Calendar,
  Sparkles,
  Users
} from 'lucide-react';

export default function ServiceModes({ onOpenBooking }) {
  const modes = [
    {
      id: 'online',
      title: "Atendimento Online",
      badge: "Praticidade Total",
      subtitle: "Nacional e Internacional via Vídeo",
      icon: Video,
      color: "border-stone-200 bg-white",
      iconBg: "bg-brand-50 text-brand-700",
      description: "Jornada 100% digital e prática! Após a triagem prévia, analisamos exames e histórico clínico. Nossa consulta ocorre ao vivo via Google Meet, alinhamos o cardápio e você sai com tudo no aplicativo de celular com suporte.",
      features: [
        "Consulta ao vivo por videoconferência (Google Meet)",
        "Entrega do cardápio e receitas via App",
        "Ajustes de 7 dias e suporte tira-dúvidas no WhatsApp",
        "Ideal para quem tem rotina corrida ou mora fora de POA"
      ],
      ctaText: "Agendar Consulta Online",
      ctaType: "secondary"
    },
    {
      id: 'clinica',
      title: "Na Clínica (Presencial)",
      badge: "Consultório Próprio",
      subtitle: "MedPlex Santana • Porto Alegre / RS",
      icon: Building2,
      color: "border-brand-500 bg-white ring-2 ring-brand-500/20 shadow-premium",
      iconBg: "bg-brand-900 text-white",
      highlight: true,
      description: "No moderno complexo de saúde MedPlex Santana. Conversamos pessoalmente sobre sua história, aplicamos a conduta técnica e realizamos a Avaliação Física ISAK completa (adipômetro, paquímetro e trenas).",
      features: [
        "Avaliação Antropométrica ISAK milimétrica completa",
        "Ambiente climatizado, privativo e com acessibilidade total",
        "Estacionamento no local e fácil acesso",
        "Cardápio no App + suporte contínuo entre consultas"
      ],
      ctaText: "Agendar Consulta Presencial",
      ctaType: "primary"
    },
    {
      id: 'domiciliar',
      title: "Domiciliar (Home Care)",
      badge: "Destaque Idosos",
      subtitle: "Em toda a cidade de Porto Alegre",
      icon: Home,
      color: "border-brand-300 bg-brand-50/50",
      iconBg: "bg-brand-700 text-white",
      description: "Levo a estrutura do consultório e o padrão ISAK até o conforto do seu lar. A consulta envolve avaliação corporal segura, montagem da dieta e treinamento prático de familiares e cuidadores.",
      features: [
        "Sem necessidade de deslocamento para pessoas idosas",
        "Atendimento especializado para acamados e pós-alta hospitalar",
        "Prescrição e manejo completo de dietas enterais (sondas)",
        "Acolhimento da família e orientações diretas aos cuidadores"
      ],
      ctaText: "Consultar Atendimento em Casa",
      ctaType: "primary-green"
    }
  ];

  return (
    <section id="modalidades" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-700" />
            Flexibilidade de Atendimento
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-4">
            Escolha o Formato Mais Confortável para Você
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Formatos desenhados para atender desde quem tem uma rotina intensa de trabalho até quem necessita de cuidados delicados e acolhedores no ambiente familiar.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.id}
                className={`rounded-3xl p-7 sm:p-8 border flex flex-col justify-between transition-all duration-300 relative ${mode.color}`}
              >
                {/* Top Badge */}
                <div className="flex justify-between items-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${mode.iconBg}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                    {mode.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="font-serif font-bold text-brand-950 text-2xl mb-1">
                    {mode.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-4">
                    {mode.subtitle}
                  </p>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {mode.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-8">
                    {mode.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
                    mode.highlight
                      ? 'bg-brand-900 hover:bg-brand-800 text-white shadow-premium'
                      : mode.id === 'domiciliar'
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-200'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{mode.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
