"use client";

import { cn } from "@/lib/utils";
import { slides } from "@/data/slides";
import { useFullpage } from "./FullpageContainer";

export function SlideDots() {
  const { activeIndex, scrollToSlide } = useFullpage();

  return (
    <nav
      className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      aria-label="Навигация по слайдам"
    >
      {slides.map((slide, i) => (
        <button
          key={slide.id}
          onClick={() => scrollToSlide(i)}
          aria-label={slide.label}
          title={slide.label}
          className={cn(
            "h-2.5 w-2.5 rounded-full transition-all duration-300",
            i === activeIndex
              ? "bg-brand-500 scale-125"
              : "bg-text-muted/50 hover:bg-text-secondary"
          )}
        />
      ))}
    </nav>
  );
}
