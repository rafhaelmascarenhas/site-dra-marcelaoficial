import React from 'react';
import { TESTIMONIALS } from '../constants';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { StatsCarousel } from './StatsCarousel';

export const Authority: React.FC = () => {
  return (
    <section id="depoimentos" className="pt-0 pb-0 bg-transparent overflow-hidden relative">
      
      {/* 1. Full Width Stats Carousel */}
      <div className="mb-12 md:mb-16 relative z-10">
         <StatsCarousel />
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Animated Testimonials Section */}
        <div className="relative">
             {/* HEADER */}
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4 mb-6">
                <div>
                    <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tighter mb-2">Resultados Reais</h2>
                    <p className="text-gray-300 font-medium text-base md:text-lg">Histórias de quem transformou sua biologia.</p>
                </div>
                {/* Decorative Line */}
                <div className="hidden md:block h-px flex-1 bg-white/10 ml-12 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent w-full h-full transform -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
            </div>

            {/* Testimonials */}
            <AnimatedTestimonials 
                testimonials={TESTIMONIALS} 
                autoplay={true} 
                className="pb-0"
            />
        </div>

      </div>
    </section>
  );
};