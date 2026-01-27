import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactElement<any>;
  title?: string;
  variant?: 'primary' | 'outline' | 'glass' | 'ghost'; 
  size?: 'default' | 'icon'; 
  className?: string;
  fullWidth?: boolean;
}

export const Component: React.FC<ButtonProps> = ({
  children,
  icon,
  title,
  variant = 'primary',
  size = 'default',
  className = "",
  fullWidth = false,
  ...props
}) => {
  
  // Base style: Rounded-Full (Pill shape)
  const baseStyles = `
    relative group overflow-hidden 
    flex items-center justify-center gap-3
    transition-all duration-500 ease-out
    font-sans font-bold text-xs uppercase tracking-widest
    disabled:opacity-50 disabled:pointer-events-none
    rounded-full
  `;

  const sizeStyles = {
    default: "h-14 px-8",
    icon: "h-12 w-12 p-0 flex items-center justify-center" 
  };

  const variants = {
    // Primary: Taupe solid base -> HOVER GOLD (#D4AF37)
    primary: `
      bg-[#977C71] text-white 
      border border-[#D4AF37]/30 
      hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:scale-[1.02]
      shadow-[0_4px_14px_0_rgba(151,124,113,0.39)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
    `,
    
    // Outline: RESTORED GOLD HOVER
    // Uses semi-transparent white background for legibility, but lights up GOLD on hover
    outline: `
      bg-white/40 backdrop-blur-sm
      text-[#977C71] border border-[#977C71]/40
      hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white
      hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)]
    `,

    // Glass: For dark backgrounds
    glass: `
      bg-white/10 backdrop-blur-md border border-white/20 text-white
      hover:bg-white/20 hover:border-[#D4AF37]/50
    `,
    
    // Ghost: Minimalist
    ghost: `
      bg-white/40 backdrop-blur-md border border-white/40 text-[#1A1A1A]
      hover:bg-white hover:text-[#977C71]
    `
  };

  const content = children || title;

  return (
    <button
      {...props}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variants[variant],
        fullWidth ? 'w-full' : 'w-auto',
        className
      )}
    >
      {/* Icon Styling */}
      {icon && React.cloneElement(icon, { 
        size: 18, 
        className: cn(
           "transition-transform duration-300 group-hover:scale-110",
           // Outline: Icon follows text color (Taupe -> White). Primary: Always white.
           variant === 'outline' ? "text-current" : "text-white"
        )
      })}
      
      {content && <span className="relative z-10">{content}</span>}
      
      {/* Shine Effect for Primary and Outline (on hover) */}
      {(variant === 'primary' || variant === 'outline') && (
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300" />
      )}
    </button>
  );
};

export const Button = Component;