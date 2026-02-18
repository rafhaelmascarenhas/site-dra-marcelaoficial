import React from 'react';
import { Award, Calendar, FileText } from 'lucide-react';
import { StarButton } from './ui/star-button';
import { CONTACT_INFO } from '../constants';

export const Bio: React.FC = () => {
    
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank');
  };

  return (
    <section id="bio" className="pt-12 pb-20 md:py-24 px-6 bg-transparent border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Image Side (5 cols) */}
            <div className="md:col-span-5 relative">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 border border-white/10">
                    <img 
                        src="bio1.webp" 
                        alt="Dra. Marcela Brasil" 
                        className="w-full h-full object-cover filter contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 md:-right-6 bg-white/10 backdrop-blur-xl border border-white/30 p-4 pr-6 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                    <div className="bg-[#D4AF37] w-10 h-10 rounded-xl flex items-center justify-center text-black shadow-lg">
                        <Award size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-0.5">Experiência</p>
                        <p className="text-lg font-extrabold text-white leading-none">+12 Anos</p>
                    </div>
                </div>
                
                <div className="absolute -left-20 -top-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            </div>

            {/* Text Side (7 cols) */}
            <div className="md:col-span-7 space-y-8 pl-0 md:pl-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#D4AF37]"></div>
                        <span className="text-[#F9F8F6] font-bold tracking-widest text-xs uppercase">Sobre a Especialista</span>
                    </div>
                    <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-white tracking-tighter leading-tight">
                        Dra. Marcela Brasil
                    </h2>
                    <p className="text-xl text-gray-300 font-medium mt-2">Médica & Diretora Clínica</p>
                </div>
                
                <div className="space-y-6 font-medium text-gray-200 leading-relaxed text-lg">
                    <p>
                        Dra. Marcela Brasil defende uma medicina estratégica, fundamentada em ciência, dados e individualização real.
                    </p>
                    <p>
                        Com 12 anos de atuação clínica, seu trabalho vai além da queixa imediata. Ela investiga profundamente cada paciente, correlaciona sinais, exames e histórico, e estrutura protocolos personalizados voltados ao reequilíbrio hormonal, metabólico e inflamatório.
                    </p>
                    <p>
                        Aliando tecnologia de ponta a um acompanhamento próximo e criterioso, construiu sua reputação com base em resultados consistentes, mensuráveis e sustentáveis.
                    </p>
                    <p className="italic text-white border-l-4 border-[#D4AF37] pl-4 py-2 bg-white/5 rounded-r-lg">
                        “O objetivo não é apenas aliviar sintomas, mas compreender o funcionamento biológico individual de cada paciente para conduzi-lo à sua melhor performance física e metabólica.”
                    </p>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-auto">
                        <StarButton 
                            variant="primary"
                            className="w-full sm:w-[260px]"
                            onClick={handleWhatsAppClick}
                        >
                            Agendar Avaliação
                            <Calendar className="w-4 h-4" />
                        </StarButton>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};