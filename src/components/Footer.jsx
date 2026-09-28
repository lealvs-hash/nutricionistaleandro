import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  ArrowUp 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Col 1: Bio / Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/favicon.png" 
                alt="Logotipo Leandro Alves" 
                className="w-8 h-8 rounded-lg object-cover brightness-110"
                onError={(e) => {
                  e.currentTarget.src = "/favicom-500x500.png";
                }}
              />
              <span className="font-serif font-bold text-xl text-white">
                Leandro Alves
              </span>
            </div>

            <p className="text-xs text-brand-400 font-semibold tracking-wide">
              Nutricionista Clínico, Esportivo & Geriatria • CRN2 20221
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              Otimizando a composição corporal, saúde e qualidade de vida de adultos e idosos com ciência sólida, antropometria ISAK de precisão e humanização.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/leandro.alves.nutri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/leandronutricionista"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5551991333905"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Áreas de Atuação */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="#geriatria" className="hover:text-white transition-colors">Saúde do Idoso (Geriatria & 60+)</a></li>
              <li><a href="#geriatria" className="hover:text-white transition-colors">Prevenção e Reversão de Sarcopenia</a></li>
              <li><a href="#geriatria" className="hover:text-white transition-colors">Disfagia e Terapia Enteral (Sonda)</a></li>
              <li><a href="#emagrecimento" className="hover:text-white transition-colors">Reeducação & Emagrecimento Sustentável</a></li>
              <li><a href="#esportiva" className="hover:text-white transition-colors">Nutrição Esportiva & Hipertrofia</a></li>
              <li><a href="#avaliacao-fisica" className="hover:text-white transition-colors">Avaliação Física Padrão Ouro ISAK</a></li>
            </ul>
          </div>

          {/* Col 3: Modalidades & Locais */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">
              Atendimento
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Na Clínica:</strong> MedPlex Santana (Torre Sul, Sala 601) - Porto Alegre/RS
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Home Care:</strong> Atendimento domiciliar em residências e ILPIs em Porto Alegre
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Online:</strong> Consultas por vídeo via Google Meet em todo o Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato Direto */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contato Direto
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <a 
                href="https://wa.me/5551991333905" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>(51) 99133-3905</span>
              </a>

              <a 
                href="mailto:nutrilealves@gmail.com" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>nutrilealves@gmail.com</span>
              </a>

              <div className="pt-2">
                <p className="text-[11px] text-stone-500">Horário de Atendimento:</p>
                <p className="text-xs text-stone-300">Segunda a Sexta: 08h às 20h</p>
              </div>

              <button
                onClick={scrollToTop}
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 font-semibold transition-colors"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 text-center space-y-3">
          <p className="text-[11px] text-stone-500 leading-relaxed max-w-4xl mx-auto">
            Conteúdo estritamente informativo em conformidade com o <strong>Código de Ética do Nutricionista (Resolução CFN nº 599/2018)</strong>. 
            As informações disponibilizadas neste site não substituem o diagnóstico ou acompanhamento nutricional individualizado realizado por profissional habilitado.
          </p>

          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} Leandro Alves Nutricionista • Todos os direitos reservados • Porto Alegre / RS.
          </p>
        </div>

      </div>
    </footer>
  );
}
