"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { workflowSteps } from "@/data/workflow";

export function WorkflowSlide() {
  return (
    <SlideWrapper id="workflow" index={3} variant="gradient">
      <SectionHeading
        title="Как это работает"
        subtitle="Всего три шага — от реального помещения до виртуальной прогулки."
      />

      {/* Инфографика: 3 шага со стрелками */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-0">
        {workflowSteps.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === workflowSteps.length - 1;

          return (
            <div key={step.step} className="flex flex-col items-center md:flex-row">
              {/* Карточка шага */}
              <AnimateOnScroll delay={i * 0.2}>
                <div className="flex w-64 flex-col items-center rounded-2xl border border-surface-border bg-surface-card/60 p-8 text-center">
                  {/* Номер шага */}
                  <span className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-400">
                    Шаг {step.step}
                  </span>

                  {/* Иконка */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10">
                    <Icon className="h-8 w-8 text-brand-400" />
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* Описание */}
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Стрелка между шагами */}
              {!isLast && (
                <AnimateOnScroll variant="fadeIn" delay={i * 0.2 + 0.1}>
                  <div className="my-2 flex items-center justify-center md:mx-6 md:my-0">
                    {/* Горизонтальная стрелка — десктоп */}
                    <ChevronRight
                      size={28}
                      className="hidden text-brand-500/40 md:block"
                    />
                    {/* Вертикальная стрелка — мобилка */}
                    <ChevronDown
                      size={28}
                      className="text-brand-500/40 md:hidden"
                    />
                  </div>
                </AnimateOnScroll>
              )}
            </div>
          );
        })}
      </div>

      {/* Пояснение внизу */}
      <AnimateOnScroll delay={0.7}>
        <p className="mt-10 text-center text-sm text-text-muted">
          Весь процесс занимает от 10 минут — в зависимости от размера помещения.
        </p>
      </AnimateOnScroll>
    </SlideWrapper>
  );
}
