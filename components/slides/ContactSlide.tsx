"use client";

import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function ContactSlide() {
  return (
    <SlideWrapper id="contact" index={7} variant="darker" raw>
      {/* Фоновый градиент — покрывает нижнюю часть */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,_rgba(0,102,255,0.12)_0%,_transparent_100%)]" />

      {/* Основной контент — по центру */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Готовы увидеть свои сканы в VR?
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="mt-4 max-w-lg text-base text-text-secondary md:text-lg">
            Свяжитесь с нами, чтобы обсудить внедрение UrbanScan
            в ваш рабочий процесс.
          </p>
        </AnimateOnScroll>

        {/* Контактная информация */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <span className="text-xl font-semibold text-white md:text-2xl">
              iMax IT Company
            </span>
            <span className="text-lg font-medium text-brand-400 md:text-xl">
              +998 91 255 52 60
            </span>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Копирайт — абсолютно прибит к низу слайда */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
        <AnimateOnScroll delay={0.45}>
          <p className="text-xs text-text-muted/50">
            &copy; {new Date().getFullYear()} UrbanScan. Все права защищены.
          </p>
        </AnimateOnScroll>
      </div>
    </SlideWrapper>
  );
}
