import {
  MapPin,
  Car,
  Presentation,
  Clock,
  Users,
  ShieldCheck,
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
    id: "no-travel",
    icon: Car,
    title: "Не нужно ехать на объект",
    description:
      "Покажите клиенту здание, склад или стройку — не выходя из офиса. Один раз отсканировали, показываете сколько угодно раз.",
  },
  {
    id: "wow-effect",
    icon: Presentation,
    title: "Впечатляющие презентации",
    description:
      "Заказчик надевает шлем и сам гуляет по объекту. Это убеждает сильнее, чем любые фотографии, чертежи или видео.",
  },
  {
    id: "save-time",
    icon: Clock,
    title: "Экономия времени и денег",
    description:
      "Не нужно организовывать повторные выезды. Сканирование занимает минуты, а результат доступен в любой момент.",
  },
  {
    id: "remote-access",
    icon: MapPin,
    title: "Доступ из любой точки",
    description:
      "Объект в другом городе? Не проблема. Передайте файл — и коллеги или клиенты увидят всё своими глазами в VR.",
  },
  {
    id: "teamwork",
    icon: Users,
    title: "Понятно каждому",
    description:
      "Не нужно разбираться в чертежах. Любой человек наденет шлем и сразу поймёт, как выглядит пространство.",
  },
  {
    id: "accurate",
    icon: ShieldCheck,
    title: "Точная копия реальности",
    description:
      "Сканер создаёт детальную 3D-копию помещения. В VR вы видите реальные размеры, пропорции и детали объекта.",
  },
];
