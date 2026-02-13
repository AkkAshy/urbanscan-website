export interface SlideMetadata {
  id: string;
  label: string;
  /** Показывать в Navbar */
  navLabel?: string;
}

export const slides: SlideMetadata[] = [
  { id: "hero", label: "Главная" },
  { id: "device", label: "Устройство", navLabel: "Устройство" },
  { id: "about", label: "О продукте", navLabel: "О продукте" },
  { id: "features", label: "Возможности", navLabel: "Возможности" },
  { id: "requirements", label: "Требования" },
  { id: "contact", label: "Контакты", navLabel: "Контакты" },
];
