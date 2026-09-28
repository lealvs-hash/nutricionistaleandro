import React from 'react';
import { 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  MapPin, 
  ChevronRight,
  Heart,
  Dumbbell,
  CheckCircle2
} from 'lucide-react';

export default function Hero({ onOpenBooking, onScrollToQuiz }) {
  const handleWhatsappConversion = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17752409667/oZQZCOrzm5UcEMOMgZfC'
      });
    }
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/40 via-surface to-surface">
      {/* Background Glows */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-brand-200/35 rounded-full filter blur-[100px] pointer-events-none -z-10 translate-x-1/3"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-amber-100/30 rounded-full filter blur-[90px] pointer-events-none -z-10 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Text & CTAs */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200/80 text-brand-900 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Porto Alegre (MedPlex Santana) • Home Care • Online</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-brand-950 leading-[1.18] tracking-tight mb-6">
              Nutrição de precisão para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-800 via-brand-700 to-emerald-700 italic">
                Emagrecimento, Saúde do Idoso & Performance.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Acompanhamento nutricional individualizado para <strong>adultos e pessoas idosas (60+)</strong>. 
              Sem radicalismos e sem fórmulas genéricas: aliamos ciência médica, empatia humana e a mais avançada 
              <strong> Avaliação Física Padrão Ouro ISAK</strong> para resultados definitivos.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-10">
              <button
                onClick={onOpenBooking}
                className="bg-brand-900 hover:bg-brand-800 text-white px-7 py-4 rounded-2xl font-semibold text-base shadow-premium hover:shadow-hover transition-all duration-300 flex items-center justify-center gap-2.5 transform active:scale-95 group"
              >
                <Calendar className="w-5 h-5 text-brand-300 group-hover:scale-110 transition-transform" />
                <span>Agendar Consulta</span>
                <ChevronRight className="w-4 h-4 text-brand-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToQuiz}
                className="bg-white hover:bg-stone-50 text-brand-900 border border-stone-200 px-6 py-4 rounded-2xl font-medium text-base shadow-sm hover:border-brand-300 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Simular Meu Perfil Nutricional</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-100">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">HCPA (PICCAP)</p>
                  <p className="text-[11px] text-stone-500 leading-tight">Saúde do Adulto & Idoso</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-100">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Certificação ISAK</p>
                  <p className="text-[11px] text-stone-500 leading-tight">Padrão Ouro Internacional</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-100">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">CRN2 20221</p>
                  <p className="text-[11px] text-stone-500 leading-tight">Atendimento Humanizado</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image & Floating Badges */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-brand-700 to-emerald-500 rounded-3xl opacity-20 blur-lg -z-10"></div>
              
              <div className="relative bg-white p-2.5 sm:p-3 rounded-3xl shadow-premium border border-stone-100 overflow-hidden">
                <img
                  src="/images/leandro-consultorio.jpg"
                  alt="Nutricionista Leandro Alves em seu consultório no MedPlex Santana"
                  className="w-full h-auto max-h-[500px] object-cover object-top rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "/WhatsApp Image 2025-11-12 at 17.29.13.jpeg";
                  }}
                />

                {/* Subtitle tag on photo */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-stone-200/80 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-500 font-medium">Consultório Principal</p>
                      <p className="text-sm font-bold text-brand-950">MedPlex Santana • Torre Sul</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Aberto
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-stone-100 items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm border border-amber-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Antropometria ISAK</p>
                  <p className="text-[11px] text-stone-500 leading-tight">Precisão milimétrica</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="hidden sm:flex absolute -bottom-5 -right-4 bg-brand-900 text-white py-3 px-4 rounded-2xl shadow-2xl items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-800 text-emerald-300 flex items-center justify-center">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">20+ Anos de Prática</p>
                  <p className="text-[10px] text-brand-200 leading-tight">Musculação & Esporte</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
