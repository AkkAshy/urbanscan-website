import {
  ScanLine,
  Laptop,
  Cog,
  FileOutput,
  FileInput,
  Sparkles,
  Headset,
  Footprints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface WorkflowStepData {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
}

/** Шаги для роли "Сканирующий" */
export const scannerSteps: WorkflowStepData[] = [
  {
    icon: ScanLine,
    step: 1,
    title: "Сканирование объекта",
    description: "Проход по помещению с Share S20 SLAM",
  },
  {
    icon: Laptop,
    step: 2,
    title: "Подключение к ноутбуку",
    description: "Импорт данных в родную программу Share",
  },
  {
    icon: Cog,
    step: 3,
    title: "Обработка",
    description: "Автоматическая обработка данных сканера",
  },
  {
    icon: FileOutput,
    step: 4,
    title: "Экспорт OBJ",
    description: "Готовый файл для передачи",
  },
];

/** Шаги для роли "Управляющий / Просматривающий" */
export const viewerSteps: WorkflowStepData[] = [
  {
    icon: FileInput,
    step: 1,
    title: "Импорт OBJ",
    description: "Загрузка файла в приложение UrbanScan",
  },
  {
    icon: Sparkles,
    step: 2,
    title: "Авто-подготовка",
    description: "Сцена настраивается автоматически",
  },
  {
    icon: Headset,
    step: 3,
    title: "Надеть VR-шлем",
    description: "Погружение в отсканированное пространство",
  },
  {
    icon: Footprints,
    step: 4,
    title: "Прогулка по сцене",
    description: "Свободное перемещение как в реальной жизни",
  },
];
