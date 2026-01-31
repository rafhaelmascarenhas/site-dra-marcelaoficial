"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import React from "react";

function FloatingPaths({ position }: { position: number }) {
  // Maintaining the exact geometry and visual settings you approved
  const paths = Array.from({ length: 36 }, (_, i) => {
    const opacity = 0.4 + i * 0.015; 
    const width = 0.8 + i * 0.03;
    
    return {
      id: i,
      d: `M-${360 - i * 5 * position} -${180 + i * 6}C-${360 - i * 5 * position} -${180 + i * 6} -${300 - i * 5 * position} ${210 - i * 6} ${140 - i * 5 * position} ${330 - i * 6}C${600 - i * 5 * position} ${460 - i * 6} ${670 - i * 5 * position} ${860 - i * 6} ${670 - i * 5 * position} ${860 - i * 6}`,
      opacity,
      width,
    };
  });

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full"
      viewBox="-520 -360 1700 1320"
      fill="none"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <linearGradient id={`pathGradient-${position}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#F9F8F6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* 
         NEW: Group Wrapper for Global Floating Animation 
         This creates the "breathing" movement of the whole structure
      */}
      <motion.g
        initial={{ y: 0, rotate: 0 }}
        animate={{ 
            y: [0, -15, 0], // Gentle float up and down
            rotate: [0, 1, 0] // Extremely subtle rotation for organic feel
        }}
        transition={{
            duration: 15 + Math.random() * 5, // Slow, relaxed pace (15-20s)
            repeat: Infinity,
            ease: "easeInOut"
        }}
      >
        {paths.map((p) => (
            <motion.path
            key={p.id}
            d={p.d}
            stroke={`url(#pathGradient-${position})`}
            strokeWidth={p.width}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            
            // Initial State: Invisible and undrawn
            initial={{ pathLength: 0, opacity: 0 }}
            
            // Animation State: Fully drawn, with pulsing opacity
            animate={{ 
                pathLength: 1, 
                opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4] // Pulse between dim and bright
            }}
            
            // Transition Configuration
            transition={{
                pathLength: { 
                    duration: 3, 
                    delay: 0.2 + p.id * 0.05, 
                    ease: "easeOut" 
                }, // Draw-in once
                opacity: { 
                    duration: 6 + Math.random() * 3, // Random pulse speed for each line
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.2 + p.id * 0.05 // Stagger the start
                }
            }}
            />
        ))}
      </motion.g>
    </motion.svg>
  );
}

interface BackgroundPathsProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
}

export function BackgroundPaths({ children, className }: BackgroundPathsProps) {
    return (
        <div className={cn("relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-brand-bg", className)}>
            
            {/* Background Container */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-70">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#977C71]/5 via-transparent to-[#977C71]/30 pointer-events-none" />
        </div>
    );
}