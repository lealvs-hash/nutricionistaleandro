import React from 'react';
import { 
  Check, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Receipt, 
  ArrowRight 
} from 'lucide-react';

export default function Plans({ onOpenBooking }) {
  const plans = [
    {
      id: 'trimestral',
      name: "Acompanhamento Trimestral",
      tagline: "Ideal para metas pontuais, ganho rápido ou início de reeducação.",
      highlight: false,
      features: [
        "Consulta inicial completa + Reavaliações com ISAK",
        "Engenharia do plano alimentar personalizado",
        "Entrega do cardápio completo via Aplicativo",
        "Ajustes de 7 dias e suporte tira-dúvidas contínuo no WhatsApp",
        "Emissão de recibo para reembolso em planos de saúde"
      ],
      whatsappMsg: "Olá, Leandro! Gostaria de consultar os valores e disponibilidade do Acompanhamento Trimestral."
    },
    {
      id: 'semestral',
      name: "Acompanhamento Semestral",
      badge: "Mais Recomendado",
      tagline: "O tempo de ouro para controle de doenças crônicas e recomposição definitiva.",
      highlight: true,
      features: [
        "Todas as vantagens do acompanhamento trimestral",
        "Ciclos progressivos de periodização e quebra de platôs",
        "Acompanhamento comparativo de exames laboratoriais a médio prazo",
        "Adaptações completas para datas comemorativas e viagens",
        "Suporte próximo e contínuo para consolidação de hábitos",
        "Emissão de recibo para reembolso de consulta"
      ],
      whatsappMsg: "Olá, Leandro! Gostaria de consultar os valores e disponibilidade do Acompanhamento Semestral."
    },
    {
      id: 'anual',
      name: "Acompanhamento Anual",
      tagline: "Para quem busca longevidade sustentável, alta performance e saúde contínua.",
      highlight: false,
      features: [
        "Acompanhamento de 12 meses com reavaliações programadas",
        "Ajustes de cardápio nas 4 estações do ano",
        "Monitoramento contínuo de sarcopenia, massa magra e bem-estar",
        "Canal prioritário e direto no WhatsApp",
        "Maior custo-benefício por consulta do consultório",
        "Emissão de recibo para solicitação de reembolso"
      ],
      whatsappMsg: "Olá, Leandro! Gostaria de consultar os valores e disponibilidade do Acompanhamento Anual."
    }
  ];

  const handleConsultPlan = (msg) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17752409667/oZQZCOrzm5UcEMOMgZfC'
      });
    }
    const url = `https://wa.me/5551991333905?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="planos" className="py-24 bg-brand-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-800/20 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-900 border border-brand-700/80 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Formatos de Acompanhamento
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Planos Estruturados para Resultados Reais
          </h2>

          <p className="text-brand-200 text-base sm:text-lg leading-relaxed">
            Acompanhamentos continuados com encontros periódicos, suporte tira-dúvidas e monitoramento milimétrico para garantir que você alcance e sustente seu objetivo.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-brand-300 font-medium">
            <Receipt className="w-4 h-4 text-emerald-400" />
            <span>Emitimos recibo oficial para reembolso junto ao seu plano de saúde</span>
          </div>
        </div>

        {/* 3 Plans Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight
                  ? 'bg-white text-stone-900 shadow-2xl ring-4 ring-emerald-500/30 -translate-y-2'
                  : 'bg-brand-900/60 border border-brand-800/80 text-white hover:bg-brand-900/80'
              }`}
            >
              {/* Badge if highlight */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-brand-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className={`font-serif font-bold text-2xl mb-2 ${plan.highlight ? 'text-brand-950' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs sm:text-sm mb-6 ${plan.highlight ? 'text-stone-500' : 'text-brand-300'}`}>
                  {plan.tagline}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-emerald-600' : 'text-emerald-400'}`} />
                      <span className={plan.highlight ? 'text-stone-700' : 'text-brand-100'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => handleConsultPlan(plan.whatsappMsg)}
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
                  plan.highlight
                    ? 'bg-brand-900 hover:bg-brand-800 text-white shadow-premium'
                    : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Valor no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Ethical Notice as required by CFN */}
        <div className="max-w-3xl mx-auto text-center border-t border-brand-800/60 pt-8">
          <p className="text-xs text-brand-300/80 leading-relaxed italic">
            * Conforme determina o Código de Ética do Nutricionista (Resolução CFN nº 599/2018), valores e honorários são fornecidos de forma transparente mediante contato direto individualizado, respeitando a complexidade de cada caso.
          </p>
        </div>

      </div>
    </section>
  );
}
