"use client";

import { MonitorOff, FileBox, Glasses } from "lucide-react";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnScroll";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const valueProps = [
  {
    icon: MonitorOff,
    title: "Без Unity Editor",
    description:
      "Самостоятельное приложение. Не нужно устанавливать Unity — просто запустите программу и загрузите файл.",
  },
  {
    icon: FileBox,
    title: "Любой OBJ-файл",
    description:
      "Работает с файлами из любого LiDAR/SLAM-сканера. Формат OBJ — универсальный стандарт 3D-моделей.",
  },
  {
    icon: Glasses,
    title: "VR-погружение",
    description:
      "Наденьте шлем и окажитесь внутри отсканированного пространства. Ходите, осматривайте, показывайте.",
  },
];

export function AboutSlide() {
  return (
    <SlideWrapper id="about" index={1} variant="dark">
      <SectionHeading
        title="Что такое UrbanScan?"
        subtitle="Кроссплатформенное VR-приложение для интерактивного просмотра 3D-сцен, полученных из LiDAR и SLAM сканеров."
      />

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {valueProps.map((item) => (
          <StaggerItem key={item.title}>
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimateOnScroll delay={0.4}>
        <p className="mt-12 text-center text-sm text-text-muted">
          Для инженеров, архитекторов, разработчиков цифровых двойников
          и всех, кто работает с LiDAR/SLAM-сканерами.
        </p>
      </AnimateOnScroll>
    </SlideWrapper>
  );
}
