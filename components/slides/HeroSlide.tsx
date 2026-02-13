"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { useFullpage } from "@/components/layout/FullpageContainer";
import { useT } from "@/lib/i18n/context";

export function HeroSlide() {
  const { scrollToSlide } = useFullpage();
  const t = useT();

  return (
    <SlideWrapper id="hero" index={0} variant="darker" className="relative">
      {/* Фоновая сетка/паттерн */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.08)_0%,_transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Левая часть — текст */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Бейдж */}
          <AnimateOnScroll delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-card/50 px-4 py-1.5 text-xs text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.hero.badge}
            </div>
          </AnimateOnScroll>

          {/* Заголовок */}
          <AnimateOnScroll delay={0.15}>
            <h1 className="text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
              {t.hero.title}<span className="text-brand-500">{t.hero.titleAccent}</span>
            </h1>
          </AnimateOnScroll>

          {/* Подзаголовок */}
          <AnimateOnScroll delay={0.3}>
            <p className="mt-6 max-w-xl text-xl text-text-secondary md:text-2xl">
              {t.hero.subtitle}
            </p>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll delay={0.45}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => scrollToSlide(1)}
                className="bg-brand-500 text-white hover:bg-brand-600 px-8"
              >
                {t.hero.cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSlide(5)}
                className="border-surface-border text-white hover:bg-surface-card"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Правая часть — изображение сканера */}
        <AnimateOnScroll variant="slideRight" delay={0.2}>
          <div className="flex items-center justify-center">
            <Image
              src="/images/lidar-scanner.png"
              alt="Share S20 SLAM — LiDAR"
              width={720}
              height={860}
              className="h-[70vh] min-w-[280px] object-contain drop-shadow-[0_0_50px_rgba(0,102,255,0.25)] md:h-[85vh]"
              priority
            />
          </div>
        </AnimateOnScroll>
      </div>

      {/* Стрелка скролла */}
      <button
        onClick={() => scrollToSlide(1)}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-muted animate-bounce-slow"
        aria-label={t.hero.scrollAriaLabel}
      >
        <ChevronDown size={28} />
      </button>
    </SlideWrapper>
  );
}
