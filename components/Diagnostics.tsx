import React from 'react';
import { DIAGNOSTICS_DATA } from '../constants';
import { ScanLine, Calendar } from 'lucide-react';
import { Component as LuxuryButton } from './ui/button';

export const Diagnostics: React.FC = () => {
  const epigeneticsData = DIAGNOSTICS_DATA[0];
  const geneticsData = DIAGNOSTICS_DATA[1];

  // Shared Card Component - Liquid Glass Dark Edition
  const DiagnosticCard = ({ data }: { data: typeof DIAGNOSTICS_DATA[0] }) => (
    <div className="group relative overflow-hidden rounded-[2.5rem] h-[500px] w-full shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/10 bg-[#0a0a0a]">
        
        {/* Background Image */}
        <div className="absolute inset-0 transition-transform duration-1000 ease-in-out group-hover:scale-105">
            <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover transition-all duration-700 
                filter brightness-[0.8] contrast-[1.1]
                group-hover:brightness-100"
            />
        </div>

        {/* LIQUID GLASS OVERLAY - Dark & Sophisticated */}
        {/* 1. Base Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-all duration-500"></div>
        
        {/* 2. The Liquid Glass Sheen (Subtle Tint + Blur) */}
        <div className="absolute inset-0 bg-[#0a0a0a]/10 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-700"></div>
        
        {/* 3. Surface Highlight (Top Right Reflection) */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#D4AF37]/10 transition-colors duration-700"></div>

        {/* 4. Glass Border Inner Ring */}
        <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none"></div>

        {/* Content Container */}
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
            
            {/* Top: Icon & Action Icon */}
            <div className="flex justify-between items-start">
                {/* Icon Container - Frosted Glass Pill */}
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-500 transform group-hover:scale-110">
                    <data.icon size={28} strokeWidth={1.5} />
                </div>
                
                {/* ScanLine for semantic meaning */}
                <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ScanLine size={20} />
                </div>
            </div>

            {/* Bottom: Text Content */}
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 backdrop-blur-md mb-4">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{data.title.includes('DNA') ? 'Genética' : 'Epigenética'}</span>
                </div>

                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight mb-3 leading-none drop-shadow-xl">
                    {data.title.split('(')[0]} <br/>
                    <span className="text-gray-300 text-2xl font-light italic">{data.title.split('(')[1]?.replace(')', '') || ''}</span>
                </h3>
                
                <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed mb-6 max-w-sm drop-shadow-md border-l-2 border-[#D4AF37] pl-4">
                    {data.description}
                </p>

                {/* Details List */}
                <div className="space-y-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {data.details.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
                            <span className="text-white/90 font-medium text-xs md:text-sm tracking-wide">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <section id="diagnostico" className="pt-20 pb-12 md:py-20 px-6 relative bg-transparent">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-[#D4AF37]"></div>
                    <span className="text-[#977C71] font-bold tracking-widest text-xs uppercase">Diagnóstico de Precisão</span>
                </div>
                <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-black tracking-tighter leading-none mb-4">
                  O Fim da Tentativa e Erro.
                </h2>
                <p className="text-gray-500 text-lg font-medium max-w-lg">
                  Não tratamos sintomas genéricos. Mapeamos sua biologia única.
                </p>
            </div>
            
            {/* Desktop Button */}
            <div className="hidden md:block">
                 <a href="#contato">
                    <LuxuryButton 
                        variant="outline"
                        icon={<Calendar />}
                    >
                        Agendar Mapeamento
                    </LuxuryButton>
                 </a>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-12">
          <DiagnosticCard data={epigeneticsData} />
          <DiagnosticCard data={geneticsData} />
        </div>
        
        {/* Mobile Button - Reduced Margin Bottom */}
        <div className="md:hidden flex justify-center w-full mb-4">
             <a href="#contato" className="w-full">
                <LuxuryButton 
                    variant="primary"
                    icon={<Calendar />}
                    fullWidth
                >
                    Agendar Mapeamento
                </LuxuryButton>
            </a>
        </div>

      </div>
    </section>
  );
};