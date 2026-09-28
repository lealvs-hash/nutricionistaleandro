import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  MessageCircle, 
  Building2, 
  Home, 
  Video, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [modality, setModality] = useState('clinica');
  const [goal, setGoal] = useState('emagrecimento');
  const [preferredShift, setPreferredShift] = useState('manha');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17752409667/oZQZCOrzm5UcEMOMgZfC'
      });
    }

    const modLabels = {
      clinica: 'Presencial na Clínica (MedPlex Santana)',
      domiciliar: 'Domiciliar (Home Care em Porto Alegre)',
      online: 'Consulta Online por Vídeo'
    };

    const goalLabels = {
      emagrecimento: 'Emagrecimento e Reeducação Alimentar',
      geriatria: 'Saúde do Idoso (60+) / Sarcopenia / Reabilitação',
      esportiva: 'Nutrição Esportiva e Ganho de Massa',
      sonda: 'Terapia Nutricional Enteral (Sonda) ou Disfagia',
      clinica_geral: 'Manejo de Doença Crônica (Diabetes, Pressão, etc)'
    };

    const shiftLabels = {
      manha: 'Turno da Manhã',
      tarde: 'Turno da Tarde',
      noite: 'Fim de tarde / Noite'
    };

    const text = `Olá, Leandro! Gostaria de agendar uma consulta nutricional.
- Meu nome: ${name || 'Não informado'}
- Formato: ${modLabels[modality] || modality}
- Objetivo principal: ${goalLabels[goal] || goal}
- Preferência de horário: ${shiftLabels[preferredShift] || preferredShift}`;

    const url = `https://wa.me/5551991333905?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-brand-950 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-brand-300 hover:text-white hover:bg-brand-900 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-900 text-emerald-300 text-xs font-semibold mb-3 border border-brand-800">
            <Sparkles className="w-3.5 h-3.5" />
            Agendamento Rápido
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Agende sua Consulta
          </h3>
          <p className="text-brand-200 text-xs sm:text-sm mt-1">
            Escolha o formato ideal e fale diretamente com o Dr. Leandro no WhatsApp.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
          {/* Nome */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Maria da Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent text-sm bg-surface"
            />
          </div>

          {/* Modalidade */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              Modalidade Desejada
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'clinica', label: 'Na Clínica', icon: Building2 },
                { id: 'domiciliar', label: 'Domiciliar', icon: Home },
                { id: 'online', label: 'Online', icon: Video },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = modality === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setModality(item.id)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      isSelected
                        ? 'border-brand-600 bg-brand-50 text-brand-900 font-bold ring-1 ring-brand-500'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-brand-700" />
                    <span className="text-xs">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              Objetivo Principal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-600 text-sm bg-surface"
            >
              <option value="emagrecimento">Emagrecimento & Reeducação Alimentar</option>
              <option value="geriatria">Saúde do Idoso (60+) & Sarcopenia</option>
              <option value="esportiva">Nutrição Esportiva & Ganho de Massa</option>
              <option value="sonda">Disfagia ou Dieta por Sonda (Enteral)</option>
              <option value="clinica_geral">Controle de Doenças Crônicas (Diabetes/Pressão)</option>
            </select>
          </div>

          {/* Turno de preferência */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
              Melhor Período para Consulta
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'manha', label: 'Manhã' },
                { id: 'tarde', label: 'Tarde' },
                { id: 'noite', label: 'Fim de tarde' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPreferredShift(item.id)}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                    preferredShift === item.id
                      ? 'bg-brand-900 text-white border-brand-900'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4 text-base active:scale-98"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Continuar para o WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Seus dados estão protegidos. Resposta rápida no horário comercial.
          </p>
        </form>
      </div>
    </div>
  );
}
