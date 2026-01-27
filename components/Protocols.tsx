import React from 'react';
import { motion } from 'framer-motion';
import { PROTOCOLS_DATA } from '../constants';
import { Plus } from 'lucide-react';
import { Component as LuxuryButton } from './ui/button';

interface ProtocolCardProps {
  protocol: typeof PROTOCOLS_DATA[0];
  index: number;
}

const ProtocolCard: React.FC<ProtocolCardProps> = ({ protocol, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers slightly before element is fully in view
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`
        relative group overflow-hidden rounded-[2.5rem] h-[480px]
        ${protocol.colSpan}
        bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover:scale-105">
        <img 
          src={protocol.image} 
          alt={protocol.title} 
          className="w-full h-full object-cover transition-all duration-700 
            filter sepia-[0.15] brightness-[0.9] contrast-[0.95] saturate-[0.8] 
            group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
      
      {/* Content Container */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
        
        {/* Top Header */}
        <div className="flex justify-between items-start">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-500">
                <protocol.icon size={24} strokeWidth={1.5} />
            </div>
            
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Plus size={18} />
            </div>
        </div>

        {/* Bottom Content */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex flex-wrap gap-2 mb-4">
                {protocol.tags.slice(0, 2).map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wide text-white/90">
                    {tag}
                </span>
                ))}
            </div>
            
            <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-3 leading-tight drop-shadow-md">
                {protocol.title}
            </h3>
            
            <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out">
                <p className="text-gray-200 font-medium leading-relaxed max-w-lg pb-2">
                    {protocol.description}
                </p>
            </div>
        </div>

      </div>
    </motion.div>
  );
};

export const Protocols: React.FC = () => {
  return (
    <section id="protocolos" className="py-12 md:py-20 px-6 bg-transparent text-black relative">
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-[#D4AF37]"></div>
                    <span className="text-[#977C71] font-bold tracking-widest text-xs uppercase">Nossas Soluções</span>
                </div>
                <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-black tracking-tighter leading-none mb-6">
                  Protocolos Exclusivos.
                </h2>
                <p className="text-gray-500 text-lg font-medium max-w-lg">
                  A união entre medicina diagnóstica e terapias de alta performance.
                </p>
            </div>
            
            {/* Desktop Button */}
            <div className="hidden md:block">
                 <a href="#contato">
                    <LuxuryButton 
                        variant="outline"
                        icon={<Plus />}
                    >
                        Agendar Avaliação
                    </LuxuryButton>
                 </a>
            </div>
        </div>

        {/* Bento Grid Layout - Tightened Gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROTOCOLS_DATA.map((protocol, index) => (
            <ProtocolCard key={index} protocol={protocol} index={index} />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 text-center md:hidden mb-4">
            <a href="#contato" className="w-full">
                <LuxuryButton 
                    variant="primary"
                    icon={<Plus />}
                    fullWidth
                >
                    Agendar Avaliação
                </LuxuryButton>
            </a>
        </div>

      </div>
    </section>
  );
};
