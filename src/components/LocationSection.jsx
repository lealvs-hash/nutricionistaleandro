import React from 'react';
import { 
  MapPin, 
  Car, 
  Accessibility, 
  Building2, 
  ExternalLink, 
  Navigation, 
  Clock,
  Sparkles
} from 'lucide-react';

export default function LocationSection() {
  const addressUrl = "https://maps.google.com/?q=Rua+Gomes+Jardim,+301+-+Torre+Sul,+Santana,+Porto+Alegre+-+RS,+90620-130";

  return (
    <section id="localizacao" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-[2.5rem] shadow-premium border border-stone-200/90 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Details and Facilities */}
          <div className="w-full lg:w-5/12 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5 text-brand-700" />
                Consultório Presencial
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-950 mb-4">
                MedPlex Santana
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                O mais moderno complexo médico e de saúde do Rio Grande do Sul. Um espaço desenhado com foco em acolhimento, biossegurança, conforto e total privacidade para o paciente e sua família.
              </p>

              {/* Highlights List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0 border border-brand-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Endereço Completo</h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Rua Gomes Jardim, 301 • Sala 601<br />
                      Torre Sul • Bairro Santana<br />
                      Porto Alegre - RS • CEP 90620-130
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0 border border-brand-100">
                    <Accessibility className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Acessibilidade Total</h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Acesso nivelado, elevadores especiais, corredores amplos e banheiros adaptados para idosos e cadeirantes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0 border border-brand-100">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Estacionamento no Local</h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Estacionamento rotativo privativo no próprio prédio com serviço de manobrista para sua total comodidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0 border border-brand-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Horários de Atendimento</h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                      Segunda a Sexta, das 08h às 20h (mediante agendamento prévio).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Buttons */}
            <div className="pt-6 border-t border-stone-100 flex flex-wrap gap-3">
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-900 hover:bg-brand-800 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir no Google Maps</span>
              </a>

              <a
                href="https://waze.com/ul?q=Rua+Gomes+Jardim+301+Porto+Alegre"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-100 hover:bg-stone-200 text-stone-900 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 border border-stone-200 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir no Waze</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Google Map */}
          <div className="w-full lg:w-7/12 min-h-[420px] lg:min-h-full relative bg-stone-100 border-t lg:border-t-0 lg:border-l border-stone-200">
            <iframe
              title="Localização Consultório MedPlex Santana Nutricionista Leandro Alves"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.647565154336!2d-51.211516624446454!3d-30.0469851749221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951978438be0d853%3A0x7d0a7a020165c71b!2sRua%20Gomes%20Jardim%2C%20301%20-%20Santana%2C%20Porto%20Alegre%20-%20RS%2C%2090620-130!5e0!3m2!1spt-BR!2sbr!4v1708700000000!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
