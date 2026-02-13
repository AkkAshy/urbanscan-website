"use client";

import Image from "next/image";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnScroll";
import { Timer, Weight, Wifi, Battery, Scan, Cpu } from "lucide-react";
import { useT } from "@/lib/i18n/context";

const specIcons = [Scan, Timer, Weight, Battery, Wifi, Cpu];

export function DeviceSlide() {
  const t = useT();

  return (
    <SlideWrapper id="device" index={1} variant="gradient">
      <div className="grid h-full items-center gap-6 md:grid-cols-[1fr_1fr] md:gap-16 lg:gap-20">
        {/* Левая часть — изображение */}
        <AnimateOnScroll variant="slideLeft">
          <div className="flex items-center justify-center">
            <Image
              src="/images/lidar-scanner.png"
              alt="Share S20 SLAM"
              width={700}
              height={900}
              className="h-[50vh] w-auto object-contain drop-shadow-[0_0_60px_rgba(0,102,255,0.2)] md:h-[70vh]"
            />
          </div>
        </AnimateOnScroll>

        {/* Правая часть — описание */}
        <div className="flex flex-col justify-center">
          <AnimateOnScroll>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-card/50 px-4 py-1.5 text-sm text-text-secondary">
              {t.device.badge}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {t.device.title} <span className="text-brand-500">{t.device.titleAccent}</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="mt-5 max-w-lg text-lg text-text-secondary md:text-xl">
              {t.device.description}
            </p>
          </AnimateOnScroll>

          {/* Характеристики */}
          <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {t.device.specs.map((spec, i) => {
              const Icon = specIcons[i];
              return (
                <StaggerItem key={spec.label}>
                  <div className="flex items-start gap-3 rounded-lg border border-surface-border/50 bg-surface-card/30 p-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{spec.label}</p>
                      <p className="text-sm text-text-muted">{spec.value}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </SlideWrapper>
  );
}
