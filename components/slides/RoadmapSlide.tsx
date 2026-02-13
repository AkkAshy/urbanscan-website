"use client";

import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RoadmapItem } from "@/components/shared/RoadmapItem";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnScroll";
import { roadmapItems } from "@/data/roadmap";

export function RoadmapSlide() {
  return (
    <SlideWrapper id="roadmap" index={6} variant="gradient">
      <SectionHeading
        title="Дорожная карта"
        subtitle="Что мы планируем добавить в будущих версиях UrbanScan."
      />

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roadmapItems.map((item) => (
          <StaggerItem key={item.id}>
            <RoadmapItem
              icon={item.icon}
              title={item.title}
              description={item.description}
              status={item.status}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SlideWrapper>
  );
}
