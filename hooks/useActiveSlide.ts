"use client";

import { useEffect, useState, useCallback, type RefObject } from "react";

/**
 * Отслеживает текущий видимый слайд через IntersectionObserver.
 * Возвращает индекс активного слайда и функцию для скролла к слайду.
 */
export function useActiveSlide(containerRef: RefObject<HTMLElement | null>) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.querySelectorAll("[data-slide-index]");
    if (slides.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = Number(
              (entry.target as HTMLElement).dataset.slideIndex
            );
            if (!isNaN(index)) setActiveIndex(index);
          }
        }
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [containerRef]);

  const scrollToSlide = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;
      const slide = container.querySelector(
        `[data-slide-index="${index}"]`
      ) as HTMLElement;
      if (!slide) return;

      /* scrollTo на точную позицию — надёжнее чем scrollIntoView с scroll-snap */
      container.scrollTo({
        top: slide.offsetTop,
        behavior: "smooth",
      });
    },
    [containerRef]
  );

  return { activeIndex, scrollToSlide };
}
