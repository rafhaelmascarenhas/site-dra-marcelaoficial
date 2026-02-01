"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative group overflow-hidden rounded-full cursor-pointer isolate",
          // Tipografia
          "font-sans font-bold text-xs uppercase tracking-widest text-white",
          
          // --- EFEITO DE VIDRO PRINCIPAL ---
          // Fundo semi-transparente preto + Desfoque forte
          "bg-black/40 backdrop-blur-xl",
          // Borda sutil semi-transparente
          "border border-white/10",
          
          // --- SOMBRAS DE VOLUME (O Segredo do Liquid Glass) ---
          // 1. Shadow externa suave
          // 2. Inset Top: Luz branca forte na borda superior
          // 3. Inset Bottom: Sombra escura profunda para dar peso
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-10px_20px_rgba(0,0,0,0.5)]",
          
          // Transições
          "transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)",
          
          // Estado Hover
          "hover:scale-105 hover:bg-black/50 hover:border-white/20",
          "hover:shadow-[0_15px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-10px_20px_rgba(0,0,0,0.6)]",
          
          // Estado Active
          "active:scale-95 active:shadow-[inset_0_5px_10px_rgba(0,0,0,0.5)]",
          
          className
        )}
        {...props}
      >
        {/* Camada de Ruído (Opcional, para textura) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Highlight Superior (Reflexo Curvo de Luz) */}
        <div className="absolute -top-[20%] left-0 right-0 h-[60%] bg-gradient-to-b from-white/20 to-transparent rounded-[100%] pointer-events-none blur-[1px]" />
        
        {/* Highlight Inferior (Reflexo de Borda) */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-white/10 to-transparent rounded-b-full pointer-events-none" />
        
        {/* Efeito Shine (Brilho que passa) */}
        <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none z-20" />

        {/* Conteúdo com sombra para legibilidade no vidro */}
        <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
          {children}
        </span>
      </button>
    );
  }
);

LiquidButton.displayName = "LiquidButton";
