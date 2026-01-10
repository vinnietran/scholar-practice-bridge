import { useState, useEffect } from "react";

interface ClientLogo {
  name: string;
  logo?: string;
  logoSize?: "sm" | "md" | "lg";
}

interface ClientLogoCarouselProps {
  clients: ClientLogo[];
  interval?: number;
}

export function ClientLogoCarousel({ clients, interval = 3000 }: ClientLogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % clients.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [clients.length, interval]);

  const currentClient = clients[currentIndex];
  
  const sizeClasses = {
    sm: "h-16 md:h-20 max-w-[200px]",
    md: "h-20 md:h-24 max-w-[220px]",
    lg: "h-24 md:h-28 max-w-[250px]",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[120px]">
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {currentClient.logo ? (
          <img 
            src={currentClient.logo} 
            alt={currentClient.name}
            className={`${sizeClasses[currentClient.logoSize || "sm"]} object-contain`}
          />
        ) : (
          <span className="px-6 py-3 bg-secondary rounded-lg text-secondary-foreground font-medium text-lg">
            {currentClient.name}
          </span>
        )}
      </div>
      
      {/* Progress dots */}
      <div className="flex gap-2 mt-6">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
              }, 150);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary w-6" 
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`View ${clients[index].name}`}
          />
        ))}
      </div>
    </div>
  );
}
