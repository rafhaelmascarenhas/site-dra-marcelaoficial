import React from 'react';
import { motion } from 'framer-motion';
import { JOURNEY_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-12 md:py-20 px-6 relative bg-transparent">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Standardized */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-[#D4AF37]"></div>
                    <span className="text-[#F9F8F6] font-bold tracking-widest text-xs uppercase">Jornada do Paciente</span>
                </div>
                <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-white tracking-tighter mb-4">
                    Metodologia Exclusiva.
                </h2>
                <p className="font-medium text-gray-200 text-lg md:text-xl max-w-2xl">
                    Do diagnóstico à execução. Uma jornada clara, sem suposições.
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
            {JOURNEY_STEPS.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} // Reduzi de 40 para 20
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} // Margin negativa para disparar antes
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }} // Duration aumentada
                className="group relative h-[340px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_4px_20px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-all duration-500"
              >
                 {/* Background Image */}
                 <img 
                    src={step.image} 
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0 opacity-80"
                 />
                 
                 {/* Overlay - Darker for readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                 {/* Content Wrapper */}
                 <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                     
                     {/* Top Section */}
                     <div className="flex justify-between items-start">
                        {/* Glass Icon Box */}
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-500">
                             <step.icon size={22} strokeWidth={1.5} />
                        </div>
                        
                        {/* Step Number */}
                        <span className="font-sans font-extrabold text-5xl text-white/10 tracking-tighter group-hover:text-white/30 transition-colors">
                            {step.step}
                        </span>
                     </div>

                     {/* Bottom Section */}
                     <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-white mb-2 tracking-tight">
                             {step.title}
                         </h3>
                         <div className="h-px w-12 bg-[#D4AF37] mb-3 opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-700"></div>
                         <p className="text-gray-300 font-medium text-base md:text-lg leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                             {step.description}
                         </p>
                     </div>
                 </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};