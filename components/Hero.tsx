import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Component as LuxuryButton } from './ui/button';
import { FeatureCarousel } from './ui/feature-carousel';

export const Hero: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Images for the carousel - ONLY Dra. Marcela photos (or high-end lookalikes for mockups)
  const carouselImages = [
    { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", alt: "Dra Marcela Brasil - Portrait" },
    { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop", alt: "Dra Marcela Brasil - Clinic" },
    { src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop", alt: "Dra Marcela Brasil - Consultation" },
    { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", alt: "Dra Marcela Brasil - Close up" }, // Repeating main for effect if needed
  ];

  return (
    <section className="relative min-h-screen pt-36 pb-20 px-4 overflow-hidden flex flex-col items-center justify-center">
      
      {/* IMPROVED BACKGROUND: Cleaner, Subtle gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[#FFFFFF]">
         {/* Top Right Gold/Taupe Glow */}
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(212,175,55,0.08),rgba(255,255,255,0))] blur-3xl"></div>
         {/* Bottom Left Soft Gray/Blue Glow */}
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(151,124,113,0.1),rgba(255,255,255,0))] blur-3xl"></div>
         {/* Center Highlights */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center space-y-12">
        
        {/* Text Content */}
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#F4EDE5] border border-[#D4AF37]/30 shadow-sm">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#977C71]"></span>
                <span className="text-[11px] font-bold tracking-widest text-[#977C71] uppercase">Medicina de Precisão</span>
            </div>
            
            {/* Headlines */}
            <h1 className="animate-fade-in-up delay-100 font-sans font-extrabold text-5xl sm:text-6xl md:text-8xl text-black tracking-tighter leading-[1.05]">
                Não adivinhamos,<br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#977C71] to-[#D4AF37] opacity-100">nós mapeamos.</span>
            </h1>
            
            <p className="animate-fade-in-up delay-200 font-medium text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Uma abordagem clínica baseada 100% em dados genéticos para garantir longevidade, estética e alta performance.
            </p>

            {/* Buttons - Mobile Fixed Widths */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
                <div className="w-full sm:w-auto" onClick={(e) => scrollToSection(e, 'diagnostico')}>
                    <LuxuryButton 
                        variant="primary"
                        icon={<ArrowRight />}
                        fullWidth
                        className="w-full sm:w-auto min-w-[240px]"
                    >
                        Iniciar Jornada
                    </LuxuryButton>
                </div>
                <div className="w-full sm:w-auto" onClick={(e) => scrollToSection(e, 'metodologia')}>
                    <LuxuryButton 
                        variant="outline"
                        icon={<FileText />}
                        fullWidth
                        className="w-full sm:w-auto min-w-[240px]"
                    >
                        Entenda o Método
                    </LuxuryButton>
                </div>
            </div>
        </div>

        {/* 3D CAROUSEL SECTION */}
        <div className="w-full animate-fade-in-up delay-500 mt-8">
             <FeatureCarousel images={carouselImages} />
        </div>

      </div>
    </section>
  );
};