import {
  Cloud,
  Ruler,
  StickyNote,
  Globe,
  Users,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface RoadmapEntry {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  status: "priority" | "planned" | "future";
}

export const roadmapItems: RoadmapEntry[] = [
  {
    id: "point-cloud",
    icon: Cloud,
    title: "Поддержка Point Cloud",
    description: "Прямая загрузка LAS / PLY без конвертации в OBJ",
    status: "priority",
  },
  {
    id: "measurements",
    icon: Ruler,
    title: "Измерительные инструменты",
    description: "Расстояния, площади, объёмы прямо в VR-сцене",
    status: "planned",
  },
  {
    id: "annotations",
    icon: StickyNote,
    title: "Аннотации и метки",
    description: "Оставляйте заметки и маркеры прямо на 3D-объектах",
    status: "planned",
  },
  {
    id: "web-version",
    icon: Globe,
    title: "Web-версия",
    description: "Просмотр сцен в браузере без установки приложения",
    status: "future",
  },
  {
    id: "multiplayer",
    icon: Users,
    title: "Мультиплеер",
    description: "Совместный осмотр сцены несколькими пользователями",
    status: "future",
  },
  {
    id: "walkthrough",
    icon: Video,
    title: "Запись walkthrough",
    description: "Запись маршрута прохода для последующего воспроизведения",
    status: "future",
  },
];
