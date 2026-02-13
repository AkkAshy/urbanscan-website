"use client";

import { Laptop, Monitor } from "lucide-react";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpecTable } from "@/components/shared/SpecTable";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { useT } from "@/lib/i18n/context";

export function RequirementsSlide() {
  const t = useT();

  return (
    <SlideWrapper id="requirements" index={4} variant="gradient">
      <SectionHeading
        title={t.requirements.title}
        subtitle={t.requirements.subtitle}
        className="mb-8 md:mb-10"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Ноутбук — слева */}
        <AnimateOnScroll>
          <div className="rounded-xl border border-surface-border bg-surface-card/50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                <Laptop className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{t.requirements.laptop.title}</h3>
                <p className="text-sm text-text-muted">{t.requirements.laptop.subtitle}</p>
              </div>
            </div>
            <SpecTable
              specs={t.requirements.laptop.specs}
              showFutureProof={false}
              headers={t.requirements.table}
            />
          </div>
        </AnimateOnScroll>

        {/* Десктоп — справа */}
        <AnimateOnScroll delay={0.15}>
          <div className="rounded-xl border border-surface-border bg-surface-card/50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                <Monitor className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{t.requirements.desktop.title}</h3>
                <p className="text-sm text-text-muted">{t.requirements.desktop.subtitle}</p>
              </div>
            </div>
            <SpecTable
              specs={t.requirements.desktop.specs}
              showFutureProof={true}
              headers={t.requirements.table}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </SlideWrapper>
  );
}
