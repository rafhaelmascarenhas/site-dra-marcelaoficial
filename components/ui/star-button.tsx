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
        // Base: Glass Escuro e Profundo
        "bg-black/80 backdrop-blur-xl text-white",
        
        // Borda Sutil
        "border border-white/10",

        // PROFUNDIDADE REAL (High Fidelity)
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),inset_0_-2px_4px_0_rgba(0,0,0,0.3),0_12px_24px_-6px_rgba(0,0,0,0.6)]",
        
        // INTERAÇÃO PREMIUM (Micro Lift)
        "hover:-translate-y-[2px]", 
        "hover:bg-black/90",
        "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_20px_32px_-8px_rgba(0,0,0,0.7)]", 
        "active:translate-y-[1px] active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.5)]" 
      )
    },
    outline: {
      light: lightColor || "#ffffff",
      classes: cn(
        // Base: Vidro Branco Leitoso (Ajuste fino: 10% -> 15%)
        "bg-white/15 backdrop-blur-md text-white font-semibold",
        
        // Borda: Branca um pouco mais definida (30% -> 40%)
        "border border-white/40",
        
        // Sombra: Adicionado glow branco muito sutil (5%) para destacar
        "shadow-[0_4px_20px_rgba(0,0,0,0.1),0_0_15px_rgba(255,255,255,0.05)]",
        
        // Hover: Clareia mais um pouco
        "hover:bg-white/25 hover:border-white/60 hover:text-white",
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
        "relative z-[3] overflow-hidden h-14 px-8",
        "inline-flex items-center justify-center gap-3", 
        "rounded-[50px] whitespace-nowrap",
        "text-sm font-semibold uppercase tracking-wide",
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
      
      {(variant === 'primary' || variant === 'gold') && (
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent rounded-t-[50px] pointer-events-none mix-blend-overlay" />
      )}

      <span className="z-10 relative flex items-center gap-3">
        {children}
      </span>
    </button>
  );
}
