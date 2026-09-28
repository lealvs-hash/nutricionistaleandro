import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "O nutricionista atende por convênio médico?",
      a: "O atendimento é 100% particular. Isso me permite dedicar de 60 a 80 minutos exclusivos para cada paciente, sem a correria típica de convênios. No entanto, forneço recibo detalhado com CRN ativo para que você solicite o reembolso diretamente com seu plano de saúde (Unimed, Bradesco Saúde, SulAmérica, etc.)."
    },
    {
      q: "Como funciona o Atendimento Domiciliar (Home Care)?",
      a: "Atendo em residências e ILPIs em Porto Alegre. Levo todos os equipamentos de avaliação antropométrica adaptada, analiso exames laboratoriais e converso com o paciente, familiares e cuidadores para estruturar uma dieta segura, saborosa e viável na rotina da casa."
    },
    {
      q: "Quanto tempo dura uma consulta e quando recebo o plano?",
      a: "A consulta inicial leva em média de 60 a 80 minutos. Durante a consulta você já sai com as primeiras orientações e metas. O plano alimentar completo e individualizado é liberado no seu aplicativo em até 48 a 72 horas úteis com receitas práticas e lista de compras."
    },
    {
      q: "Para a avaliação física ISAK, qual é a roupa ideal?",
      a: "Para garantir a precisão milimétrica dos pontos anatômicos e dobras cutâneas: Homens devem vestir bermuda esportiva (sem camiseta e descalço); Mulheres devem vestir top esportivo e bermuda/shorts (descalça)."
    },
    {
      q: "E se eu não morar em Porto Alegre, posso consultar Online?",
      a: "Sim! O atendimento online tem a mesma qualidade técnica e é realizado ao vivo via Google Meet. Você envia seus exames e fotos prévias e recebe o plano completo no mesmo aplicativo utilizado pelos pacientes presenciais."
    },
    {
      q: "Tenho suporte entre as consultas se tiver dúvidas?",
      a: "Com certeza. Todos os acompanhamentos incluem canal direto comigo no WhatsApp para esclarecer dúvidas sobre substituições, compras no supermercado ou ajustes pontuais na rotina."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-200">
            <HelpCircle className="w-3.5 h-3.5 text-brand-700" />
            Tire Suas Dúvidas
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-stone-600 text-base">
            Informações claras e transparentes para você iniciar seu acompanhamento com total tranquilidade.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-soft ${
                  isOpen ? 'border-brand-500 ring-1 ring-brand-400' : 'border-stone-200 hover:border-brand-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-brand-950 text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg text-stone-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-brand-700 bg-brand-50' : 'rotate-0'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <div className={`accordion-grid ${isOpen ? 'open' : ''}`}>
                  <div className="accordion-inner">
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100">
                      {faq.a}
                    </div>
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
