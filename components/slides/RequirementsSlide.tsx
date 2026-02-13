"use client";

import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpecTable } from "@/components/shared/SpecTable";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { requirements } from "@/data/requirements";

export function RequirementsSlide() {
  return (
    <SlideWrapper id="requirements" index={4} variant="gradient">
      <SectionHeading
        title="Системные требования"
        subtitle="Два устройства — для сканирования и для VR-просмотра."
      />

      <AnimateOnScroll>
        <Tabs defaultValue="desktop" className="w-full">
          <TabsList className="mx-auto mb-8 flex w-fit bg-surface-card">
            {requirements.map((req) => (
              <TabsTrigger
                key={req.id}
                value={req.id}
                className="data-[state=active]:bg-brand-500 data-[state=active]:text-white"
              >
                {req.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {requirements.map((req) => (
            <TabsContent key={req.id} value={req.id}>
              <div className="rounded-xl border border-surface-border bg-surface-card/50 p-6">
                <p className="mb-6 text-sm text-text-muted">{req.subtitle}</p>
                <SpecTable
                  specs={req.specs}
                  showFutureProof={req.showFutureProof}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </AnimateOnScroll>
    </SlideWrapper>
  );
}
