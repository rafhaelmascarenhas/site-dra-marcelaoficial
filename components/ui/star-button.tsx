"use client";

import React, { useRef, useEffect, ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface StarButtonProps {
  children: ReactNode;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function StarButton({
  children,
  lightWidth = 100, // Reduzi um pouco a largura do rastro
  duration = 3,
  lightColor = "#ffffff",
  backgroundColor = "transparent", // Fundo controlado via classes agora
  borderWidth = 1,
  className,
  onClick,
  ...props
}: StarButtonProps) {
  const pathRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const div = pathRef.current;
      div.style.setProperty(
        "--path",
        `path('M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0')`,
      );
    }
  }, []);

  return (
    <button
      onClick={onClick}
      style={
        {
          "--duration": duration,
          "--light-width": `${lightWidth}px`,
          "--light-color": lightColor,
          "--border-width": `${borderWidth}px`,
          isolation: "isolate",
        } as CSSProperties
      }
      ref={pathRef}
      className={cn(
        "relative z-[3] overflow-hidden h-14 px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[50px] text-sm font-bold uppercase tracking-widest transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 group",
        
        // --- BASE SUAVIZADA ---
        // Preto translúcido com Blur (Vidro Fumê)
        "bg-black/60 backdrop-blur-md text-white/90",
        
        // --- EFEITO GLASS SUTIL ---
        // Inset Top: Luz branca muito mais suave (0.15)
        // Inset Bottom: Sombra suave para volume
        // Drop Shadow: Sombra projetada mais leve
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(0,0,0,0.3),0_4px_20px_rgba(0,0,0,0.2)]",
        
        // Hover: Fica um pouco mais sólido e brilhante
        "hover:bg-black/70 hover:text-white",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_4px_rgba(0,0,0,0.4),0_8px_25px_rgba(0,0,0,0.3)]",
        "hover:scale-[1.01] active:scale-[0.99]",
        
        // Borda quase invisível para acabamento
        "border border-white/5",
        
        className,
      )}
      {...props}
    >
      {/* Animação da Luz na Borda (Opacity reduzida para não ofuscar) */}
      <div
        className="absolute aspect-square inset-0 animate-star-btn bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)] opacity-70 mix-blend-screen"
        style={
          {
            offsetPath: "var(--path)",
            offsetDistance: "0%",
            width: "var(--light-width)",
          } as CSSProperties
        }
      />
      
      {/* Brilho Superior Suave (Gradiente) */}
      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent rounded-t-[50px] pointer-events-none" />

      {/* Conteúdo */}
      <span className="z-10 relative flex items-center gap-2 drop-shadow-sm">
        {children}
      </span>
    </button>
  );
}
