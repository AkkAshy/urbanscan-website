"use client";

import { FullpageContainer } from "@/components/layout/FullpageContainer";
import { Navbar } from "@/components/layout/Navbar";
import { SlideDots } from "@/components/layout/SlideDots";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { AboutSlide } from "@/components/slides/AboutSlide";
import { WorkflowSlide } from "@/components/slides/WorkflowSlide";
import { FeaturesSlide } from "@/components/slides/FeaturesSlide";
import { RequirementsSlide } from "@/components/slides/RequirementsSlide";
import { ArchitectureSlide } from "@/components/slides/ArchitectureSlide";
import { RoadmapSlide } from "@/components/slides/RoadmapSlide";
import { ContactSlide } from "@/components/slides/ContactSlide";
import { slides } from "@/data/slides";

export default function Home() {
  return (
    <FullpageContainer totalSlides={slides.length}>
      <Navbar />
      <SlideDots />
      <HeroSlide />
      <AboutSlide />
      <WorkflowSlide />
      <FeaturesSlide />
      <RequirementsSlide />
      <ArchitectureSlide />
      <RoadmapSlide />
      <ContactSlide />
    </FullpageContainer>
  );
}
