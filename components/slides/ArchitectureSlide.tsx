"use client";

import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechBadge } from "@/components/shared/TechBadge";
import { ModuleBlock } from "@/components/shared/ModuleBlock";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimateOnScroll";
import { techStack, modules } from "@/data/architecture";

export function ArchitectureSlide() {
  return (
    <SlideWrapper id="architecture" index={5} variant="dark">
      <SectionHeading
        title="Архитектура"
        subtitle="Модульная архитектура на базе Unity и OpenXR, готовая к масштабированию."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Левая часть: Технологический стек */}
        <div>
          <AnimateOnScroll>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Технологический стек
            </h3>
          </AnimateOnScroll>
          <StaggerContainer className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <StaggerItem key={tech.label}>
                <TechBadge icon={tech.icon} label={tech.label} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Правая часть: Модули */}
        <div>
          <AnimateOnScroll>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Основные модули
            </h3>
          </AnimateOnScroll>
          <StaggerContainer className="grid gap-3 sm:grid-cols-2">
            {modules.map((mod) => (
              <StaggerItem key={mod.name}>
                <ModuleBlock name={mod.name} description={mod.description} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Поддерживаемые форматы */}
      <AnimateOnScroll delay={0.4}>
        <div className="mt-10 rounded-lg border border-surface-border bg-surface-card/30 p-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-text-muted">Поддерживаемые форматы:</span>
            <span className="rounded bg-surface-card px-3 py-1 font-mono text-xs text-brand-400">
              .obj
            </span>
            <span className="rounded bg-surface-card px-3 py-1 font-mono text-xs text-brand-400">
              .mtl
            </span>
            <span className="rounded bg-surface-card px-3 py-1 font-mono text-xs text-text-muted">
              .png / .jpg
            </span>
            <span className="text-text-muted">
              Vertex Color поддерживается
            </span>
          </div>
        </div>
      </AnimateOnScroll>
    </SlideWrapper>
  );
}
