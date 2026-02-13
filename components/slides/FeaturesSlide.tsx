"use client";

import {
  MapPin,
  Car,
  Presentation,
  Clock,
  Users,
  ShieldCheck,
} from "lucide-react";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnScroll";
import { useT } from "@/lib/i18n/context";

const featureIcons = [Car, Presentation, Clock, MapPin, Users, ShieldCheck];

export function FeaturesSlide() {
  const t = useT();

  return (
    <SlideWrapper id="features" index={3} variant="dark">
      <SectionHeading
        title={t.features.title}
        subtitle={t.features.subtitle}
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((feature, i) => (
          <StaggerItem key={i}>
            <FeatureCard
              icon={featureIcons[i]}
              title={feature.title}
              description={feature.description}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SlideWrapper>
  );
}
