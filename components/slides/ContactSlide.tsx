"use client";

import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { useT } from "@/lib/i18n/context";

export function ContactSlide() {
  const t = useT();

  return (
    <SlideWrapper id="contact" index={5} variant="darker" raw>
      {/* Фоновый градиент */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,_rgba(0,102,255,0.12)_0%,_transparent_100%)]" />

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="mt-4 max-w-lg text-base text-text-secondary md:text-lg">
            {t.contact.subtitle}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <span className="text-xl font-semibold text-white md:text-2xl">
              {t.contact.company}
            </span>
            <span className="text-lg font-medium text-brand-400 md:text-xl">
              {t.contact.phone}
            </span>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Копирайт */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
        <AnimateOnScroll delay={0.45}>
          <p className="text-xs text-text-muted/50">
            &copy; {new Date().getFullYear()} {t.contact.copyright}
          </p>
        </AnimateOnScroll>
      </div>
    </SlideWrapper>
  );
}
