import React from 'react';
import { Award, Calendar, FileText } from 'lucide-react';
import { Component as LuxuryButton } from './ui/button';

export const Bio: React.FC = () => {
  return (
    <section id="bio" className="pt-12 pb-20 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-100">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Image Side (5 cols) */}
            <div className="md:col-span-5 relative">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                    <img 
                        src="bio1.webp" 
                        alt="Dra. Marcela Brasil" 
                        className="w-full h-full object-cover filter contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                
                {/* REFACTORED FLOATING BADGE: Glassmorphic Capsule */}
                <div className="absolute bottom-8 right-8 md:-right-6 bg-white/70 backdrop-blur-xl border border-white/50 p-4 pr-6 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                    <div className="bg-[#977C71] w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Award size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Experiência</p>
                        <p className="text-lg font-extrabold text-[#1A1A1A] leading-none">+15 Anos</p>
                    </div>
                </div>
                
                <div className="absolute -left-20 -top-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            </div>

            {/* Text Side (7 cols) */}
            <div className="md:col-span-7 space-y-8 pl-0 md:pl-10">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#D4AF37]"></div>
                        <span className="text-[#977C71] font-bold tracking-widest text-xs uppercase">Sobre a Especialista</span>
                    </div>
                    <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-black tracking-tighter leading-tight">
                        Dra. Marcela Brasil
                    </h2>
                    <p className="text-xl text-gray-400 font-medium mt-2">Diretora Clínica & Pesquisadora</p>
                </div>
                
                <div className="space-y-6 font-medium text-gray-600 leading-relaxed text-lg">
                    <p>
                        Defensora de uma medicina que não apenas remedia, mas <span className="text-black font-bold">potencializa a vida humana</span>. Com uma visão integrativa e tecnologia de ponta, Dra. Marcela construiu sua reputação baseada em resultados mensuráveis.
                    </p>
                    <p>
                        "O foco não é apenas tratar uma queixa pontual, mas mapear o funcionamento biológico do paciente para desbloquear sua melhor versão."
                    </p>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-auto">
                        <a href="#contato">
                            <LuxuryButton 
                                variant="primary" 
                                icon={<Calendar />}
                                className="w-full sm:w-[260px]"
                            >
                                Agendar Consulta
                            </LuxuryButton>
                        </a>
                    </div>
                    <div className="w-full sm:w-auto">
                        <a href="#metodologia">
                            <LuxuryButton 
                                variant="outline"
                                icon={<FileText />}
                                className="w-full sm:w-[260px]"
                            >
                                Ver Curriculo
                            </LuxuryButton>
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};