"use client";

import { FullpageContainer } from "@/components/layout/FullpageContainer";
import { Navbar } from "@/components/layout/Navbar";
import { SlideDots } from "@/components/layout/SlideDots";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { DeviceSlide } from "@/components/slides/DeviceSlide";
import { AboutSlide } from "@/components/slides/AboutSlide";

import { FeaturesSlide } from "@/components/slides/FeaturesSlide";
import { RequirementsSlide } from "@/components/slides/RequirementsSlide";
import { ContactSlide } from "@/components/slides/ContactSlide";
import { slides } from "@/data/slides";

export default function Home() {
  return (
    <FullpageContainer totalSlides={slides.length}>
      <Navbar />
      <SlideDots />
      <HeroSlide />
      <DeviceSlide />
      <AboutSlide />
      <FeaturesSlide />
      <RequirementsSlide />
      <ContactSlide />
    </FullpageContainer>
  );
}
