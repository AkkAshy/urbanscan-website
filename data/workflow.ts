import {
  ScanLine,
  MonitorSmartphone,
  Glasses,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface WorkflowStepData {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
}

/** Три простых шага — от сканирования до VR-прогулки */
export const workflowSteps: WorkflowStepData[] = [
  {
    icon: ScanLine,
    step: 1,
    title: "Сканируем помещение",
    description:
      "Проходим по объекту с прибором — он сам запоминает всё вокруг.",
  },
  {
    icon: MonitorSmartphone,
    step: 2,
    title: "Загружаем в программу",
    description:
      "Подключаем прибор к компьютеру — файл открывается одной кнопкой.",
  },
  {
    icon: Glasses,
    step: 3,
    title: "Смотрим в VR",
    description:
      "Надеваем шлем — и гуляем по объекту, как будто мы там на самом деле.",
  },
];
