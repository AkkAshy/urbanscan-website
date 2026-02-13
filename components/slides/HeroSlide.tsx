"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { useFullpage } from "@/components/layout/FullpageContainer";

export function HeroSlide() {
  const { scrollToSlide } = useFullpage();

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
              VR-визуализация LiDAR-сканов
            </div>
          </AnimateOnScroll>

          {/* Заголовок */}
          <AnimateOnScroll delay={0.15}>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Urban<span className="text-brand-500">Scan</span>
            </h1>
          </AnimateOnScroll>

          {/* Подзаголовок */}
          <AnimateOnScroll delay={0.3}>
            <p className="mt-6 max-w-xl text-lg text-text-secondary md:text-xl">
              Шагните в реальность. Загрузите 3D-скан — и пройдитесь по нему
              в VR, как будто вы там.
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
                Узнать больше
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSlide(6)}
                className="border-surface-border text-white hover:bg-surface-card"
              >
                Связаться с нами
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Правая часть — изображение сканера */}
        <AnimateOnScroll variant="slideRight" delay={0.2}>
          <div className="flex items-center justify-center">
            <Image
              src="/images/lidar-scanner.jpg"
              alt="Share S20 SLAM — LiDAR сканер"
              width={500}
              height={600}
              className="max-h-[60vh] w-auto object-contain mix-blend-lighten"
              priority
            />
          </div>
        </AnimateOnScroll>
      </div>

      {/* Стрелка скролла */}
      <button
        onClick={() => scrollToSlide(1)}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-muted animate-bounce-slow"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown size={28} />
      </button>
    </SlideWrapper>
  );
}
