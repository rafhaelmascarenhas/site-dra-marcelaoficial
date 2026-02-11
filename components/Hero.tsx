import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, FileText, Circle } from 'lucide-react';
import { StarButton } from './ui/star-button';
import { FeatureCarousel } from './ui/feature-carousel';
import { cn } from '../lib/utils';

export const Hero: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Images for the carousel
  const carouselImages = [
    { src: "hero1.webp", alt: "Dra Marcela Brasil - Portrait" },
    { src: "hero2.webp", alt: "Dra Marcela Brasil - Clinic" },
    { src: "hero3.webp", alt: "Dra Marcela Brasil - Consultation" },
    { src: "hero4.webp", alt: "Dra Marcela Brasil - Close up" },
  ];

  // Animation Variants
  const fadeUpVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
              duration: 1,
              delay: 0.5 + i * 0.2,
              ease: [0.25, 0.4, 0.25, 1],
          },
      }),
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-brand-bg pt-32 pb-20">
      
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center space-y-10 px-4">
        
        {/* Text Content */}
        <div className="max-w-4xl mx-auto">
            
            {/* Badge */}
            <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="mb-8"
            >
                <StarButton 
                    variant="outline"
                    className="h-auto py-2 px-6 text-xs md:text-sm tracking-widest font-bold uppercase pointer-events-none"
                >
                    <Circle className="h-2 w-2 fill-[#D4AF37]" />
                    Medicina de Precisão
                </StarButton>
            </motion.div>
            
            {/* Headlines */}
            <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-extrabold mb-6 tracking-tight leading-[1.05]">
                    <span className="block text-white">Não adivinhamos,</span>
                    <span className="block text-[#D4AF37] drop-shadow-md">
                        nós mapeamos.
                    </span>
                </h1>
            </motion.div>
            
            <motion.div
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="mb-8"
            >
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-sm">
                    Uma abordagem clínica baseada 100% em dados precisos para garantir longevidade, estética e alta performance.
                </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
            >
                {/* Botão Primário - StarButton Primary (Vidro Fumê) */}
                <div className="w-full sm:w-auto">
                  <StarButton
                    variant="primary"
                    onClick={(e) => scrollToSection(e, 'diagnostico')}
                    className="w-full sm:w-auto min-w-[240px]"
                  >
                    Iniciar Jornada
                    <ArrowRight className="w-4 h-4" />
                  </StarButton>
                </div>

                {/* Botão Secundário - StarButton Outline (LIMPO, SEM DOURADO) */}
                <div className="w-full sm:w-auto">
                    <StarButton
                        variant="outline"
                        onClick={(e) => scrollToSection(e, 'metodologia')}
                        className="w-full sm:w-auto min-w-[240px]"
                        // REMOVIDO: lightColor="#D4AF37"
                    >
                        Entenda o Método
                        <FileText className="w-4 h-4" />
                    </StarButton>
                </div>
            </motion.div>
        </div>

        {/* 3D CAROUSEL SECTION */}
        <motion.div 
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="w-full mt-8"
        >
             <FeatureCarousel images={carouselImages} />
        </motion.div>

      </div>
    </div>
  );
};