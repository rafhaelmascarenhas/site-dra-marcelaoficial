"use client";

import React, { useRef, useEffect, ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface StarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  borderWidth?: number;
  variant?: 'primary' | 'outline' | 'gold' | 'light';
}

export function StarButton({
  children,
  lightWidth = 100,
  duration = 3,
  lightColor,
  borderWidth = 1,
  className,
  variant = 'primary',
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

  const variants = {
    primary: {
      light: lightColor || "#ffffff",
      classes: cn(
        // Base: Glass Escuro e Profundo (Mais contraste - Restaurado)
        "bg-black/80 backdrop-blur-xl text-white",
        
        // Borda Sutil
        "border border-white/10",

        // PROFUNDIDADE REAL (High Fidelity)
        // 1. Inset Top: Luz branca nítida (Highlight)
        // 2. Inset Bottom: Sombra suave interna
        // 3. Drop Shadow: Sombra externa larga e macia (Soft Shadow)
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),inset_0_-2px_4px_0_rgba(0,0,0,0.3),0_12px_24px_-6px_rgba(0,0,0,0.6)]",
        
        // INTERAÇÃO PREMIUM (Micro Lift)
        "hover:-translate-y-[2px]", // O botão "flutua" levemente
        "hover:bg-black/90",
        "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_20px_32px_-8px_rgba(0,0,0,0.7)]", // Aumenta a sombra projetada
        "active:translate-y-[1px] active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.5)]" // Feedback de clique
      )
    },
    outline: {
      light: lightColor || "#ffffff",
      classes: cn(
        // Base: Vidro Branco Leitoso (Mais contraste e presença)
        "bg-white/10 backdrop-blur-md text-white font-semibold",
        
        // Borda: Branca Translúcida Forte
        "border border-white/30",
        
        // Sombra: Leve brilho branco para destacar do fundo escuro
        "shadow-[0_4px_20px_rgba(0,0,0,0.1)]",
        
        // Hover: Fica mais branco e evidente (Feedback claro)
        "hover:bg-white/20 hover:border-white/50 hover:text-white",
        "hover:shadow-[0_4px_25px_rgba(255,255,255,0.15)]",
        
        "transition-all duration-300"
      )
    },
    gold: {
      light: lightColor || "#ffffff",
      classes: cn(
        "bg-[#D4AF37]/90 backdrop-blur-md text-white",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_20px_rgba(212,175,55,0.3)]",
        "hover:bg-[#D4AF37] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)]",
        "border-white/10"
      )
    },
    light: {
      light: lightColor || "#D4AF37",
      classes: cn(
        "bg-[#F9F8F6] text-[#977C71]",
        "shadow-md",
        "hover:bg-[#D4AF37] hover:text-white hover:shadow-lg",
        "border border-white/50"
      )
    }
  };

  const currentVariant = variants[variant] || variants.primary;

  return (
    <button
      onClick={onClick}
      style={
        {
          "--duration": duration,
          "--light-width": `${lightWidth}px`,
          "--light-color": currentVariant.light,
          "--border-width": `${borderWidth}px`,
          isolation: "isolate",
        } as CSSProperties
      }
      ref={pathRef}
      className={cn(
        // LAYOUT & TIPOGRAFIA REFINADA
        "relative z-[3] overflow-hidden h-14 px-8",
        "inline-flex items-center justify-center gap-3", // Gap fixo de 12px (gap-3)
        "rounded-[50px] whitespace-nowrap",
        
        // Texto mais "caro" (Semi-bold + Tracking Wide apenas, não Widest)
        "text-sm font-semibold uppercase tracking-wide",
        
        // Transições de base
        "transition-all duration-300 ease-out",
        "disabled:pointer-events-none disabled:opacity-50 group",
        
        currentVariant.classes,
        className,
      )}
      {...props}
    >
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
      
      {/* Brilho Superior Sutil (Apenas para Primary e Gold para dar volume) */}
      {(variant === 'primary' || variant === 'gold') && (
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent rounded-t-[50px] pointer-events-none mix-blend-overlay" />
      )}

      {/* Conteúdo Centralizado */}
      <span className="z-10 relative flex items-center gap-3">
        {children}
      </span>
    </button>
  );
}
