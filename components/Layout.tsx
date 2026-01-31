import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Component as LuxuryButton } from './ui/button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-500">
        <div className={`
            pointer-events-auto
            flex items-center justify-between
            /* LIQUID GLASS - Adjusted for Dark Theme */
            bg-[#977C71]/30 backdrop-blur-xl
            border border-white/20
            shadow-lg shadow-black/10
            rounded-full
            transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
            ${isScrolled 
                ? 'w-[95%] max-w-6xl py-2 px-6 shadow-xl' 
                : 'w-[98%] max-w-7xl py-3 px-8'
            }
        `}>
          
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center group relative z-10 mr-4">
            <span className={`
                font-sans font-extrabold tracking-tight text-white transition-all duration-300 whitespace-nowrap
                ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}
            `}>
              Dra. Marcela Brasil
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center">
             <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                <a 
                    key={link.label}
                    href={link.href} 
                    className="px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 relative group"
                >
                    {link.label}
                </a>
                ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-end relative z-10 ml-4">
            <a href="#contato">
                <button className={`
                    bg-[#F9F8F6] text-[#977C71] rounded-full font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all shadow-md
                    ${isScrolled ? 'px-6 py-2.5 text-[10px]' : 'px-7 py-3 text-xs'}
                `}>
                    Agendar
                </button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors relative z-10 backdrop-blur-md" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#977C71]/95 backdrop-blur-3xl md:hidden flex flex-col pt-32 px-8 animate-fade-in">
           
          <div className="space-y-6 flex flex-col items-center text-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-2xl font-sans font-bold text-white tracking-tight hover:text-[#D4AF37] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="mt-auto mb-10 w-full">
            <LuxuryButton 
                variant="primary" 
                fullWidth
                onClick={() => setIsOpen(false)}
            >
                Agendar Consulta
            </LuxuryButton>
          </div>
        </div>
      )}
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#1A1A1A] text-white py-12 md:py-20 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-sans font-extrabold text-2xl tracking-tight text-white mb-6 block">
              Dra. Marcela Brasil
            </span>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Medicina de precisão focada em longevidade, emagrecimento e performance. Mapeando sua biologia para resultados definitivos.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[#D4AF37] uppercase tracking-widest text-xs mb-6">Navegação</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#D4AF37] uppercase tracking-widest text-xs mb-6">Contato</h4>
            <div className="space-y-4">
              <a href="https://www.instagram.com/dra.marcelabrasil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Instagram size={16} />
                </div>
                <span className="text-sm">@dramarcelabrasil</span>
              </a>
              <a href="mailto:contato@clinica.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Mail size={16} />
                </div>
                <span className="text-sm">contato@clinica.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Dra. Marcela Brasil. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            CRM/SP 123.456
          </p>
        </div>
      </div>
    </footer>
  );
};