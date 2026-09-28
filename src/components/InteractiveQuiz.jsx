import React, { useState } from 'react';
import { 
  Sparkles, 
  User, 
  Users, 
  Target, 
  Activity, 
  MapPin, 
  Home, 
  Video, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw,
  MessageCircle
} from 'lucide-react';

export default function InteractiveQuiz() {
  const [patientType, setPatientType] = useState('self'); // 'self', 'elderly_family', 'sports'
  const [objective, setObjective] = useState('emagrecimento');
  const [modality, setModality] = useState('clinica');

  const handleWhatsappSend = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17752409667/oZQZCOrzm5UcEMOMgZfC'
      });
    }

    const patientLabel = patientType === 'self' 
      ? 'para mim mesmo' 
      : patientType === 'elderly_family' 
        ? 'para meu familiar idoso' 
        : 'para performance esportiva';

    const objLabel = {
      'emagrecimento': 'Emagrecimento e Reeducação Alimentar',
      'hipertrofia': 'Ganho de Massa Muscular e Nutrição Esportiva',
      'longevidade': 'Saúde do Idoso, Longevidade e Sarcopenia',
      'cronicas': 'Controle de Doenças Crônicas (Diabetes, Hipertensão, Renal)',
      'sonda': 'Nutrição Enteral (Sonda) / Disfagia'
    }[objective] || 'Acompanhamento Nutricional';

    const modLabel = {
      'clinica': 'Presencial no MedPlex Santana',
      'domiciliar': 'Domiciliar (Home Care) em Porto Alegre',
      'online': 'Online por Vídeo (Google Meet)'
    }[modality] || 'Consulta';

    const message = `Olá, Leandro! Simulei meu perfil no seu site e gostaria de agendar uma consulta:
- Paciente: ${patientLabel}
- Foco: ${objLabel}
- Formato desejado: ${modLabel}`;

    const url = `https://wa.me/5551991333905?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="simulador" className="py-20 bg-surface-alt border-b border-stone-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Simulador Interativo
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-3">
            Descubra o Plano e Abordagem Ideal
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Selecione seu perfil em 3 cliques rápidos para receber a conduta nutricional mais recomendada para a sua realidade.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-stone-200/90">
          
          <div className="space-y-8">
            {/* Step 1: Para quem */}
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                1. Para quem é o acompanhamento?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'self', label: 'Para mim', sub: 'Adulto / Rotina ativa', icon: User },
                  { id: 'elderly_family', label: 'Familiar Idoso (60+)', sub: 'Pais, avós ou acamado', icon: Users },
                  { id: 'sports', label: 'Atleta / Praticante', sub: 'Musculação ou artes marciais', icon: Activity },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = patientType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPatientType(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                        isSelected 
                          ? 'border-brand-600 bg-brand-50/70 shadow-sm ring-1 ring-brand-500' 
                          : 'border-stone-200 hover:border-stone-300 bg-surface'
                      }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-brand-600 text-white' : 'bg-stone-200 text-stone-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-stone-900">{item.label}</div>
                        <div className="text-xs text-stone-500">{item.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Objetivo */}
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                2. Qual é a principal prioridade clínica?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { id: 'emagrecimento', label: 'Emagrecimento & Reeducação', desc: 'Perda de gordura preservando massa magra' },
                  { id: 'hipertrofia', label: 'Ganho Muscular & Performance', desc: 'Periodização de macros e suplementos' },
                  { id: 'longevidade', label: 'Saúde do Idoso & Sarcopenia', desc: 'Prevenção de quedas, fraqueza e autonomia' },
                  { id: 'cronicas', label: 'Diabetes, Pressão ou Renal', desc: 'Ajuste metabólico e suporte a exames' },
                  { id: 'sonda', label: 'Disfagia & Nutrição por Sonda', desc: 'Manejo de engasgos e terapia enteral domiciliar' },
                ].map((item) => {
                  const isSelected = objective === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setObjective(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isSelected 
                          ? 'border-brand-600 bg-brand-50/70 shadow-sm ring-1 ring-brand-500' 
                          : 'border-stone-200 hover:border-stone-300 bg-surface'
                      }`}
                    >
                      <div className="font-semibold text-sm text-stone-900 mb-1">{item.label}</div>
                      <div className="text-xs text-stone-500">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Formato */}
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                3. Onde prefere realizar a consulta?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'clinica', label: 'Na Clínica (MedPlex)', desc: 'Santana, Porto Alegre • ISAK completo', icon: MapPin },
                  { id: 'domiciliar', label: 'Domiciliar (Home Care)', desc: 'No conforto da sua casa em POA', icon: Home },
                  { id: 'online', label: 'Online por Vídeo', desc: 'Google Meet + App + Todo o Brasil', icon: Video },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = modality === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setModality(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                        isSelected 
                          ? 'border-brand-600 bg-brand-50/70 shadow-sm ring-1 ring-brand-500' 
                          : 'border-stone-200 hover:border-stone-300 bg-surface'
                      }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-brand-600 text-white' : 'bg-stone-200 text-stone-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-stone-900">{item.label}</div>
                        <div className="text-xs text-stone-500">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recommended Protocol Summary Box */}
            <div className="mt-8 bg-gradient-to-br from-brand-900 to-brand-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800 text-emerald-300 text-xs font-semibold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Conduta Recomendada para Este Perfil
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                    {objective === 'emagrecimento' && 'Reeducação Estruturada com Preservação de Massa Magra'}
                    {objective === 'hipertrofia' && 'Periodização Nutricional e Ergogênicos Baseados em Evidência'}
                    {objective === 'longevidade' && 'Atenção Geriátrica, Força Muscular e Suporte à Longevidade'}
                    {objective === 'cronicas' && 'Manejo Clínico de Patologias e Proteção Metabólica'}
                    {objective === 'sonda' && 'Protocolo Especializado de Terapia Enteral e Adaptação de Textura'}
                  </h3>
                  <p className="text-brand-200 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    {modality === 'clinica' && 'Inclui Anamnese profunda no MedPlex Santana + Avaliação Antropométrica Internacional ISAK (dobras, ossos e músculos) + Cardápio no App com suporte contínuo via WhatsApp.'}
                    {modality === 'domiciliar' && 'Levo toda a estrutura clínica e ISAK até sua residência em Porto Alegre. Alinhamento com cuidadores/família, cálculo exato e suporte direto.'}
                    {modality === 'online' && 'Consulta ao vivo via Google Meet com envio prévio de fotos/exames, entrega do planejamento no App do paciente e monitoramento próximo de evolução.'}
                  </p>
                </div>

                <div className="w-full lg:w-auto shrink-0">
                  <button
                    onClick={handleWhatsappSend}
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-brand-950 font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5 text-brand-950" />
                    <span>Iniciar pelo WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
