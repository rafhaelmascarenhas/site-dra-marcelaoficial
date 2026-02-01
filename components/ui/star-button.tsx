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
        "bg-black/40 backdrop-blur-xl text-white/95",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.2),0_4px_20px_rgba(0,0,0,0.15)]",
        "hover:bg-black/50 hover:text-white",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_30px_rgba(0,0,0,0.25)]",
        "border border-white/5"
      )
    },
    outline: {
      light: lightColor || "#ffffff",
      classes: cn(
        // Base: Neutra e Limpa
        "bg-white/10 backdrop-blur-md text-white font-semibold",
        "border border-white/20",
        
        // Hover: Apenas ilumina o fundo e a borda (sem glow dourado exagerado)
        "hover:bg-white/20 hover:border-white/40 hover:text-white",
        // Removida a sombra dourada
        "hover:shadow-none",
        
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
        "relative z-[3] overflow-hidden h-14 px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[50px]",
        "text-sm font-bold uppercase tracking-widest transition-all duration-300",
        "disabled:pointer-events-none disabled:opacity-50 group",
        "border", 
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
      
      {/* Brilho Superior apenas para Primary/Gold */}
      {(variant === 'primary' || variant === 'gold') && (
        <div className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-white/15 to-transparent rounded-t-[50px] pointer-events-none" />
      )}

      <span className="z-10 relative flex items-center gap-2 drop-shadow-sm">
        {children}
      </span>
    </button>
  );
}
