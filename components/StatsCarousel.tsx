
"use client";

import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

interface StatItem {
  preLabel?: string;
  value: string;
  subValue?: string; // For things like "kg" or "%" if separate
  label: string;
}

const STATS_DATA: StatItem[] = [
  {
    value: "2.000",
    label: "Pacientes Atendidos"
  },
  {
    preLabel: "Mais de",
    value: "1.000",
    subValue: "kg",
    label: "Gordura Eliminada"
  },
  {
    preLabel: "Média de",
    value: "95",
    subValue: "%",
    label: "Taxa de Fidelização"
  },
  {
    preLabel: "Menos de",
    value: "< 2",
    subValue: "%",
    label: "Taxa de Reganho"
  }
];

export const StatsCarousel = () => {
  return (
    <div className="w-full py-12 bg-white/40 backdrop-blur-md border-y border-[#D4AF37]/10 relative overflow-hidden">
        {/* Gradients for fade effect on edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FBF9F7] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FBF9F7] to-transparent z-10"></div>

        <Carousel
          opts={{ loop: true }}
          plugins={[
            // @ts-ignore - Embla types can be tricky with CDN imports sometimes, but logic works
            AutoScroll({ 
                speed: 0.6, // Slower speed
                startDelay: 0,
                stopOnInteraction: false,
                stopOnMouseEnter: true
            })
          ]}
        >
          <CarouselContent className="ml-0 items-center">
            {/* Repeating data multiple times to ensure smooth infinite scroll even on large screens */}
            {[...STATS_DATA, ...STATS_DATA, ...STATS_DATA, ...STATS_DATA].map((stat, index) => (
              <CarouselItem
                key={index}
                className="pl-0 basis-auto"
              >
                <div className="mx-8 md:mx-16 flex flex-col items-center justify-center text-center whitespace-nowrap select-none">
                    
                    {stat.preLabel && (
                        <span className="text-[#977C71] text-[10px] font-bold uppercase tracking-widest mb-1 block">
                            {stat.preLabel}
                        </span>
                    )}
                    
                    <div className="flex items-baseline justify-center">
                        <span className="font-sans font-extrabold text-5xl md:text-6xl text-[#1A1A1A] tracking-tighter">
                            {stat.value}
                            {stat.subValue && <span className="text-3xl md:text-4xl ml-1 text-[#D4AF37]">{stat.subValue}</span>}
                        </span>
                    </div>
                    
                    <span className="text-gray-500 font-medium text-sm mt-2 block">
                        {stat.label}
                    </span>
                    
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </div>
  );
};