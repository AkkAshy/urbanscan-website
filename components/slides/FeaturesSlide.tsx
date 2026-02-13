"use client";

import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnScroll";
import { features } from "@/data/features";

export function FeaturesSlide() {
  return (
    <SlideWrapper id="features" index={3} variant="dark">
      <SectionHeading
        title="Возможности"
        subtitle="Всё что нужно для работы с 3D-сканами в виртуальной реальности."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <StaggerItem key={feature.id}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SlideWrapper>
  );
}
