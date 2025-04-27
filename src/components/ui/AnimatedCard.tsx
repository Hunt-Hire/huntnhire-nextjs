import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  animationDirection?: "up" | "down" | "left" | "right" | "scale";
  animationDelay?: number;
  hoverEffect?: boolean;
}

const AnimatedCard = ({
  children,
  className,
  animationDirection = "up",
  animationDelay = 0,
  hoverEffect = true,
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";

    switch (animationDirection) {
      case "up":
        return "animate-fade-in-up";
      case "down":
        return "animate-fade-in-down";
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      case "scale":
        return "animate-scale-in";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <div
      ref={cardRef}
      style={{ animationDelay: `${animationDelay}ms` }}
      className={cn(
        "glass-card p-6 md:p-8 opacity-0",
        getAnimationClass(),
        hoverEffect &&
          "transition-transform duration-300 hover:translate-y-[-5px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
