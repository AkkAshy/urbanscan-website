export interface SlideMetadata {
  id: string;
  label: string;
  /** Показывать в Navbar */
  navLabel?: string;
}

export const slides: SlideMetadata[] = [
  { id: "hero", label: "Главная" },
  { id: "about", label: "О продукте", navLabel: "О продукте" },
  { id: "workflow", label: "Как работает", navLabel: "Как работает" },
  { id: "features", label: "Возможности", navLabel: "Возможности" },
  { id: "requirements", label: "Требования" },
  { id: "architecture", label: "Архитектура" },
  { id: "contact", label: "Контакты", navLabel: "Контакты" },
];
