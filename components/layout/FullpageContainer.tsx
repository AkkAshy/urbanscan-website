"use client";

import { useRef, createContext, useContext, type ReactNode } from "react";
import { useActiveSlide } from "@/hooks/useActiveSlide";

interface FullpageContextValue {
  activeIndex: number;
  scrollToSlide: (index: number) => void;
  totalSlides: number;
}

const FullpageContext = createContext<FullpageContextValue>({
  activeIndex: 0,
  scrollToSlide: () => {},
  totalSlides: 0,
});

export const useFullpage = () => useContext(FullpageContext);

interface FullpageContainerProps {
  children: ReactNode;
  totalSlides: number;
}

export function FullpageContainer({
  children,
  totalSlides,
}: FullpageContainerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { activeIndex, scrollToSlide } = useActiveSlide(containerRef);

  return (
    <FullpageContext.Provider value={{ activeIndex, scrollToSlide, totalSlides }}>
      <main
        ref={containerRef}
        className="fullpage-container scrollbar-hide"
      >
        {children}
      </main>
    </FullpageContext.Provider>
  );
}
