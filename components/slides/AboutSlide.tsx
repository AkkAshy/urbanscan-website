"use client";

import { ScanLine, AppWindow, Glasses } from "lucide-react";
import { SlideWrapper } from "@/components/layout/SlideWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimateOnScroll";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const valueProps = [
  {
    icon: ScanLine,
    title: "Сканируем пространство",
    description:
      "Специальный прибор за считанные минуты создаёт точную цифровую копию любого помещения — офиса, склада, стройки или целого здания.",
  },
  {
    icon: AppWindow,
    title: "Открываем одной кнопкой",
    description:
      "Готовый скан загружается в наше приложение. Никаких сложных программ — просто нажмите «Импорт» и файл откроется.",
  },
  {
    icon: Glasses,
    title: "Гуляем внутри в VR",
    description:
      "Наденьте VR-шлем — и вы окажетесь внутри отсканированного пространства. Ходите, смотрите по сторонам, показывайте заказчику.",
  },
];

export function AboutSlide() {
  return (
    <SlideWrapper id="about" index={1} variant="dark">
      <SectionHeading
        title="Что такое UrbanScan?"
        subtitle="Мы превращаем реальные помещения в виртуальные прогулки. Отсканировал — надел шлем — и ты уже внутри."
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
          Подходит для строителей, архитекторов, риелторов и всех,
          кому нужно показать объект удалённо — без выезда на место.
        </p>
      </AnimateOnScroll>
    </SlideWrapper>
  );
}
