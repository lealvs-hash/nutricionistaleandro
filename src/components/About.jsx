import React from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Heart, 
  Dumbbell, 
  Sparkles,
  Quote
} from 'lucide-react';

export default function About({ onOpenBooking }) {
  const credentials = [
    {
      title: "Nutricionista Clínico e Hospitalar",
      desc: "Experiência hospitalar no cuidado a pacientes em UTI, pós-operatório e diferentes graus de internação e complexidade.",
      badge: "Hospitalar"
    },
    {
      title: "Programa PICCAP - HCPA",
      desc: "Atenção à Saúde do Adulto e Idoso no Hospital de Clínicas de Porto Alegre.",
      badge: "Hospitalar"
    },
    {
      title: "Pós-Graduado em Nutrição Clínica & Doenças Crônicas",
      desc: "Manejo de diabetes, hipertensão, dislipidemia, oncologia e doença renal.",
      badge: "Especialista"
    },
    {
      title: "Pós-Graduado em Nutrição Esportiva",
      desc: "Periodização de treinamento, hipertrofia e recomposição corporal.",
      badge: "Performance"
    },
    {
      title: "Certificação Internacional ISAK Nível 1",
      desc: "Padrão ouro mundial em avaliação antropométrica milimétrica.",
      badge: "Internacional"
    },
    {
      title: "Bacharelado em Nutrição",
      desc: "Inscrito no Conselho Regional de Nutricionistas sob o CRN2 20221.",
      badge: "Graduação"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Experience Highlight */}
          <div className="w-full lg:w-5/12">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background border */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-200 rounded-3xl -z-10"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-premium bg-stone-100 border border-stone-200">
                <img
                  src="/images/leandro-perfil.jpg"
                  alt="Nutricionista Leandro Alves em Porto Alegre"
                  className="w-full h-auto object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "/foto leandroo.jpeg";
                  }}
                />
                
                {/* Floating Quote Box */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-950/90 backdrop-blur-md p-4 rounded-2xl text-white border border-brand-800">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-brand-100 italic leading-snug">
                      "Não acredito em dietas restritivas ou promessas irreais. Meu compromisso é unir ciência médica, rotina viável e respeito pela sua história."
                    </p>
                  </div>
                  <p className="text-[11px] font-bold text-emerald-400 text-right mt-1">
                    — Paulo Leandro Alves, CRN2 20221
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Story */}
          <div className="w-full lg:w-7/12">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Trajetória e Propósito
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-950 mb-6 leading-tight">
              Quem é Paulo Leandro Alves?
            </h2>

            <div className="prose prose-stone text-stone-600 space-y-4 text-base leading-relaxed mb-8">
              <p>
                A minha trajetória com a nutrição não começou apenas nas salas de aula e nos hospitais, mas na <strong>minha própria vida</strong>. Fui uma criança e um adolescente com sobrepeso e obesidade. Até hoje conheço de perto o desafio de quem tem facilidade para ganhar peso, a frustração de ver resultados sumirem ao menor descuido e o peso emocional do efeito sanfona.
              </p>
              
              <p>
                É exatamente por viver essa realidade que a minha metodologia de trabalho é acolhedora e realista: <strong>eu abomino o terrorismo nutricional</strong>. Comer precisa continuar sendo um ato de prazer, convívio social e sustentabilidade a longo prazo.
              </p>

              <p>
                No âmbito clínico e hospitalar, possuo sólida experiência atuando em hospitais de Porto Alegre no cuidado direto a pacientes internados em <strong>UTI, pós-operatório e diferentes graus de complexidade e internação</strong>, além de passagem pelo programa <strong>PICCAP (Atenção à Saúde do Adulto e Idoso) no Hospital de Clínicas de Porto Alegre (HCPA)</strong>, conduzindo a recuperação nutricional de quadros graves, reabilitação geriátrica, prevenção de sarcopenia e suporte a doenças crônicas em hospitais, clínicas e ILPIs (Instituições de Longa Permanência para Idosos).
              </p>

              <p>
                Paralelamente, sou <strong>praticante de musculação há mais de 20 anos</strong> e adepto de artes marciais. Sei o que significa treinar duro, passar por fases de déficit e superávit calórico, quebrar platôs e buscar recomposição corporal. Uno o melhor da prática com o mais rigoroso embasamento científico.
              </p>
            </div>

            {/* Academic Credentials Box */}
            <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm">
              <div className="mb-4">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full mb-2 border border-emerald-200">
                  Nutricionista Clínico e Hospitalar
                </span>
                <h3 className="text-lg font-serif font-bold text-brand-950 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-700" />
                  Formação Acadêmica & Certificações
                </h3>
              </div>

              <div className="space-y-3.5">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-1 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm text-stone-900">{cred.title}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-100/70 text-brand-800">
                          {cred.badge}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">{cred.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
