import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Component as Button } from './button'; // Using our Luxury Button
import { cn } from '../../lib/utils';

// --- TYPES ---
interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: string;
  images: { src: string; alt: string; }[];
}

// --- HERO CAROUSEL COMPONENT ---
export const FeatureCarousel = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ title, subtitle, images, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    // Auto-play
    React.useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // Slower for luxury feel
        return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full flex flex-col items-center justify-center',
          className
        )}
        {...props}
      >
        {/* Main Showcase Section */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
            
            {/* Carousel Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] transform-style-3d">
              {images.map((image, index) => {
                const offset = index - currentIndex;
                const total = images.length;
                let pos = (offset + total) % total;
                // Center the wrap-around logic
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute w-[280px] h-[400px] md:w-[320px] md:h-[480px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]',
                      'flex items-center justify-center bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white'
                    )}
                    style={{
                      transform: `
                        translateX(${pos * 50}%) 
                        scale(${isCenter ? 1 : isAdjacent ? 0.8 : 0.6})
                        rotateY(${pos * -5}deg)
                        translateZ(${isCenter ? 0 : -100}px)
                      `,
                      zIndex: isCenter ? 20 : isAdjacent ? 10 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
                      filter: isCenter ? 'blur(0px) contrast(1.05)' : 'blur(2px) grayscale(50%)',
                      visibility: Math.abs(pos) > 2 ? 'hidden' : 'visible',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                    {/* Overlay for non-center items */}
                    {!isCenter && <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>}
                    
                    {/* Gradient Overlay for luxury feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Buttons - Use Outline with solid background for contrast */}
            <div className="absolute inset-x-0 bottom-0 md:top-1/2 md:-translate-y-1/2 flex justify-center md:justify-between items-center px-4 md:px-12 pointer-events-none z-30 gap-4 md:gap-0">
                <div className="pointer-events-auto">
                    <Button
                        variant="outline" 
                        size="icon"
                        onClick={handlePrev}
                        className="rounded-full h-12 w-12 bg-[#F4EDE5] border-[#977C71]/30 shadow-lg text-[#977C71]"
                        icon={<ChevronLeft />}
                    />
                </div>
                <div className="pointer-events-auto">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        className="rounded-full h-12 w-12 bg-[#F4EDE5] border-[#977C71]/30 shadow-lg text-[#977C71]"
                        icon={<ChevronRight />}
                    />
                </div>
            </div>
        </div>
      </div>
    );
  }
);

FeatureCarousel.displayName = 'FeatureCarousel';