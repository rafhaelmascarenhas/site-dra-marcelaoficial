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
    const [currentIndex, setCurrentIndex] = React.useState(0);

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
        }, 5000); 
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
        <div className="relative w-full h-[420px] md:h-[540px] flex items-center justify-center">
            
            {/* Carousel Wrapper with perspective */}
            <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] transform-style-3d">
              {images.map((image, index) => {
                const length = images.length;
                let distance = (index - currentIndex + length) % length;
                
                if (distance > length / 2) {
                    distance -= length;
                }

                const isCenter = distance === 0;
                const isAdjacent = Math.abs(distance) === 1;
                const isVisible = Math.abs(distance) <= 1; 

                const zIndex = isCenter ? 20 : isAdjacent ? 10 : 0;
                const opacity = isCenter ? 1 : isAdjacent ? 0.6 : 0;

                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute w-[280px] h-[400px] md:w-[320px] md:h-[480px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]',
                      'flex items-center justify-center bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white',
                      // Optimization: Hint to browser to anticipate transform changes
                      'will-change-transform'
                    )}
                    style={{
                      transform: `
                        translateX(${distance * (isCenter ? 0 : 35)}%) 
                        scale(${isCenter ? 1 : 0.8})
                        rotateY(${isCenter ? 0 : distance * -10}deg)
                        translateZ(${isCenter ? 0 : -80}px)
                      `,
                      zIndex: zIndex,
                      opacity: opacity,
                      filter: isCenter ? 'blur(0px) contrast(1.05)' : 'blur(1px) grayscale(30%)',
                      visibility: isVisible || isAdjacent ? 'visible' : 'hidden', 
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      // Use eager loading only for the center image to prioritize LCP
                      loading={isCenter ? "eager" : "lazy"}
                      className="object-cover object-top w-full h-full"
                      width={320}
                      height={480}
                    />
                    {!isCenter && <div className="absolute inset-0 bg-white/30 "></div>}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Buttons */}
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