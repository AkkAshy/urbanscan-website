import {
  Gamepad2,
  Globe,
  Layers,
  Palette,
  Box,
  FileInput,
  ScanSearch,
  Sun,
  Joystick,
  Monitor,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TechItem {
  icon: LucideIcon;
  label: string;
}

export const techStack: TechItem[] = [
  { icon: Gamepad2, label: "Unity 2022/2023 LTS" },
  { icon: Globe, label: "OpenXR" },
  { icon: Layers, label: "XR Interaction Toolkit" },
  { icon: Palette, label: "URP (Universal Render Pipeline)" },
];

export interface ModuleItem {
  name: string;
  description: string;
}

export const modules: ModuleItem[] = [
  {
    name: "AppBootstrap",
    description: "Инициализация XR, проверка VR-устройств",
  },
  {
    name: "FileImportService",
    description: "Выбор файла, проверка формата, файловый диалог",
  },
  {
    name: "ObjLoaderService",
    description: "Загрузка OBJ, парсинг, создание Mesh",
  },
  {
    name: "SceneSetupService",
    description: "Нормализация сцены, освещение, коллизии",
  },
  {
    name: "PlayerController",
    description: "XR Origin, locomotion, телепортация",
  },
  {
    name: "UIManager",
    description: "Меню, уведомления, индикатор загрузки",
  },
];
