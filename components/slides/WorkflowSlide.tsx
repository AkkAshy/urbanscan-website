"use client";

import { ArrowRight, ArrowDown } from "lucide-react";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WorkflowStep } from "@/components/shared/WorkflowStep";
import {
  StaggerContainer,
  StaggerItem,
  AnimateOnScroll,
} from "@/components/shared/AnimateOnScroll";
import { scannerSteps, viewerSteps } from "@/data/workflow";

export function WorkflowSlide() {
  return (
    <SlideWrapper id="workflow" index={2} variant="gradient">
      <SectionHeading
        title="Как это работает"
        subtitle="Два простых процесса. Один сканирует — другой смотрит в VR."
      />

      <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr]">
        {/* Левая колонка: Сканирующий */}
        <div>
          <AnimateOnScroll>
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-brand-500">
              Сканирующий
            </h3>
          </AnimateOnScroll>
          <StaggerContainer className="flex flex-col gap-4">
            {scannerSteps.map((step) => (
              <StaggerItem key={step.step}>
                <WorkflowStep
                  icon={step.icon}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  accentColor="blue"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Центральная стрелка — передача OBJ */}
        <AnimateOnScroll
          variant="fadeIn"
          delay={0.3}
          className="flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-text-muted">
            <div className="hidden md:block">
              <ArrowRight size={32} className="text-brand-500/50" />
            </div>
            <div className="md:hidden">
              <ArrowDown size={32} className="text-brand-500/50" />
            </div>
            <span className="font-mono text-xs text-brand-400">.obj</span>
          </div>
        </AnimateOnScroll>

        {/* Правая колонка: Управляющий */}
        <div>
          <AnimateOnScroll>
            <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Управляющий
            </h3>
          </AnimateOnScroll>
          <StaggerContainer className="flex flex-col gap-4">
            {viewerSteps.map((step) => (
              <StaggerItem key={step.step}>
                <WorkflowStep
                  icon={step.icon}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  accentColor="green"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Пояснение */}
      <AnimateOnScroll delay={0.5}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted">
          <span>Могут быть разными людьми</span>
          <span className="hidden sm:inline">•</span>
          <span>В разных местах</span>
          <span className="hidden sm:inline">•</span>
          <span>В разное время</span>
        </div>
      </AnimateOnScroll>
    </SlideWrapper>
  );
}
