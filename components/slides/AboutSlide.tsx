"use client";

import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { workflowSteps } from "@/data/workflow";

export function AboutSlide() {
  return (
    <SlideWrapper id="about" index={2} variant="dark">
      <SectionHeading
        title="Что такое UrbanScan?"
        subtitle="Мы превращаем реальные помещения в виртуальные прогулки. Всего три шага."
        className="mb-6 md:mb-8"
      />

      {/* Пример результата сканирования — ограничиваем высоту */}
      <AnimateOnScroll delay={0.15}>
        <div className="mb-6 overflow-hidden rounded-2xl border border-surface-border">
          <Image
            src="/images/scan-example.jpg"
            alt="Пример 3D-скана здания — результат работы UrbanScan"
            width={1200}
            height={400}
            className="max-h-[35vh] w-full object-cover"
          />
          <div className="bg-surface-card/80 px-5 py-2 text-center">
            <p className="text-sm text-text-secondary">
              Результат сканирования — точная цифровая копия здания
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Инфографика: 3 шага со стрелками */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-0">
        {workflowSteps.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === workflowSteps.length - 1;

          return (
            <div key={step.step} className="flex flex-col items-center md:flex-row">
              {/* Карточка шага */}
              <AnimateOnScroll delay={0.3 + i * 0.15}>
                <div className="flex w-56 flex-col items-center rounded-2xl border border-surface-border bg-surface-card/60 p-4 text-center">
                  <span className="mb-1.5 text-xs font-bold uppercase tracking-widest text-brand-400">
                    Шаг {step.step}
                  </span>

                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10">
                    <Icon className="h-6 w-6 text-brand-400" />
                  </div>

                  <h3 className="text-sm font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Стрелка между шагами */}
              {!isLast && (
                <AnimateOnScroll variant="fadeIn" delay={0.3 + i * 0.15 + 0.1}>
                  <div className="my-2 flex items-center justify-center md:mx-4 md:my-0">
                    <ChevronRight size={28} className="hidden text-brand-500/40 md:block" />
                    <ChevronDown size={28} className="text-brand-500/40 md:hidden" />
                  </div>
                </AnimateOnScroll>
              )}
            </div>
          );
        })}
      </div>
    </SlideWrapper>
  );
}
