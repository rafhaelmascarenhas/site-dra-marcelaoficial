import React from 'react';
import { motion } from 'framer-motion';
import { DIAGNOSTICS_DATA } from '../constants';
import { ScanLine, Calendar, Check } from 'lucide-react'; 
import { StarButton } from './ui/star-button';
import { cn } from '../lib/utils';

export const Diagnostics: React.FC = () => {
  const epigeneticsData = DIAGNOSTICS_DATA[0];
  const geneticsData = DIAGNOSTICS_DATA[1];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Shared Card Component
  const DiagnosticCard = ({ data, index }: { data: typeof DIAGNOSTICS_DATA[0], index: number }) => {
    // Logic: If no image is provided, render the "Genetics" style card (Liquid Black Glass)
    const isGeneticsCard = !data.image;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className={cn(
            "group relative overflow-hidden rounded-[2.5rem] h-[500px] w-full transition-all duration-500",
            isGeneticsCard 
                // LIQUID GLASS BLACK: Deep black/zinc background, very subtle border, shadow
                ? "bg-[#09090b] border border-white/5 hover:border-[#D4AF37]/30 hover:shadow-2xl hover:shadow-black/50" 
                // STANDARD CARD:
                : "bg-[#0a0a0a] border border-white/10 shadow-2xl"
        )}>
            
            {/* 1. BACKGROUND IMAGE (For Epigenetics) */}
            {!isGeneticsCard && (
                <div className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover:scale-105">
                    <img 
                        src={data.image} 
                        alt={data.title} 
                        className="w-full h-full object-cover transition-all duration-700 
                        filter brightness-[0.8] contrast-[1.1]
                        group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-all duration-500"></div>
                </div>
            )}

            {/* 2. LIQUID GLASS EFFECT (For Genetics) */}
            {isGeneticsCard && (
                <>
                    {/* Glossy Reflection - Sharp Gradient from top */}
                    <div className="absolute inset-x-0 top-0 h-[250px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-60"></div>
                    
                    {/* Bottom Glow - Subtle Gold */}
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>
                    
                    {/* No noise/grain (removed 'esfumaçado') for pure glass look */}
                </>
            )}

            {/* Content Container */}
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                
                {/* Header */}
                <div className="flex justify-between items-start w-full">
                    {/* Label */}
                    <div className={cn(
                        "inline-block px-3 py-1 rounded-full backdrop-blur-md border",
                        isGeneticsCard 
                            ? "bg-transparent border-white/20 text-gray-400"
                            : "bg-[#D4AF37]/20 border-[#D4AF37]/30 text-[#D4AF37]"
                    )}>
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                            {data.title.includes('DNA') ? 'GENÉTICA' : 'EPIGENÉTICA'}
                        </span>
                    </div>

                    {/* Icon */}
                    <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                        isGeneticsCard 
                            // Genetics Icon: Minimalist, no heavy background
                            ? "border border-white/10 text-[#D4AF37] group-hover:text-white group-hover:border-[#D4AF37]" 
                            : "bg-white/10 backdrop-blur-xl border border-white/20 text-white group-hover:bg-[#D4AF37] group-hover:text-black"
                    )}>
                        <data.icon size={22} strokeWidth={1.5} />
                    </div>
                </div>

                {/* Body Content */}
                <div className="mt-auto">
                    <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight mb-3 leading-[1.1]">
                        {data.title.split('(')[0]} 
                        {isGeneticsCard && <span className="text-[#D4AF37]"> DNA</span>}
                    </h3>
                    
                    {!isGeneticsCard && (
                         <span className="text-xl font-light italic text-gray-300 block mb-4">
                             {data.title.split('(')[1]?.replace(')', '') || ''}
                         </span>
                    )}

                    <p className={cn(
                        "text-base font-medium leading-relaxed mb-8 max-w-sm",
                        isGeneticsCard ? "text-gray-400" : "text-gray-300 border-l-2 border-[#D4AF37] pl-4"
                    )}>
                        {data.description}
                    </p>

                    {/* Check List - Styled like the reference print */}
                    <div className="space-y-4">
                        {data.details.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 group/item">
                                {isGeneticsCard ? (
                                    // Checkmark inside circle styling
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#D4AF37]/50 flex items-center justify-center group-hover/item:bg-[#D4AF37] transition-all">
                                        <Check size={10} className="text-[#D4AF37] group-hover/item:text-black" />
                                    </div>
                                ) : (
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
                                )}
                                <span className={cn(
                                    "font-medium text-sm tracking-wide transition-colors",
                                    isGeneticsCard ? "text-gray-300 group-hover/item:text-white" : "text-white/90"
                                )}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
  };

  return (
    <section id="diagnostico" className="pt-20 pb-12 md:py-20 px-6 relative bg-transparent">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-[#D4AF37]"></div>
                    <span className="text-[#F9F8F6] font-bold tracking-widest text-xs uppercase">Diagnóstico de Precisão</span>
                </div>
                <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-white tracking-tighter leading-none mb-4">
                  O Fim da Tentativa e Erro.
                </h2>
                <p className="text-gray-200 text-lg font-medium max-w-lg">
                  Não tratamos sintomas genéricos. Mapeamos sua biologia única.
                </p>
            </div>
            
            {/* Desktop Button */}
            <div className="hidden md:block">
                 <StarButton 
                    variant="outline"
                    onClick={() => scrollToSection('contato')}
                >
                    Agendar Mapeamento
                    <Calendar className="w-4 h-4" />
                </StarButton>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-12">
          <DiagnosticCard data={epigeneticsData} index={0} />
          <DiagnosticCard data={geneticsData} index={1} />
        </div>
        
        {/* Mobile Button */}
        <div className="md:hidden flex justify-center w-full mb-4">
             <StarButton 
                variant="outline"
                onClick={() => scrollToSection('contato')}
                className="w-full"
            >
                Agendar Mapeamento
                <Calendar className="w-4 h-4" />
            </StarButton>
        </div>

      </div>
    </section>
  );
};