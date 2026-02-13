import {
  FileBox,
  Settings2,
  Move3D,
  Gauge,
  Headset,
  Plug,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "runtime-import",
    icon: FileBox,
    title: "Runtime импорт OBJ",
    description:
      "Загружайте файлы 100–500+ МБ прямо во время работы, без перезапуска приложения. Асинхронная загрузка с прогрессом.",
  },
  {
    id: "auto-setup",
    icon: Settings2,
    title: "Авто-подготовка сцены",
    description:
      "Нормализация, центрирование, освещение и коллизии настраиваются автоматически. Ничего не нужно делать вручную.",
  },
  {
    id: "vr-locomotion",
    icon: Move3D,
    title: "VR-перемещение",
    description:
      "Плавное перемещение (smooth locomotion) и телепортация. Управление с контроллеров VR, без укачивания.",
  },
  {
    id: "performance",
    icon: Gauge,
    title: "72–90 FPS",
    description:
      "Оптимизировано для стабильных 72 FPS на Quest через Link и 90 FPS на PCVR. Без лагов и подёргиваний.",
  },
  {
    id: "multi-headset",
    icon: Headset,
    title: "Мульти-шлемы",
    description:
      "Поддержка Meta Quest (через Link/AirLink), HTC Vive, Valve Index и других PCVR-шлемов.",
  },
  {
    id: "openxr",
    icon: Plug,
    title: "OpenXR / SteamVR",
    description:
      "Построен на стандарте OpenXR с поддержкой SteamVR. Совместим с любым OpenXR-совместимым устройством.",
  },
];
