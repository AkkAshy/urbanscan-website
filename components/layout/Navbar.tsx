"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { slides } from "@/data/slides";
import { useFullpage } from "./FullpageContainer";
import { useLocale } from "@/lib/i18n/context";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeIndex, scrollToSlide } = useFullpage();
  const { locale, setLocale, t } = useLocale();

  const showBg = activeIndex > 0;
  const navItems = slides.filter((s) => s.navLabel);

  const handleNav = (slideId: string) => {
    const idx = slides.findIndex((s) => s.id === slideId);
    if (idx !== -1) scrollToSlide(idx);
    setMobileOpen(false);
  };

  /** Получить переведённый лейбл навигации */
  const getNavLabel = (slideId: string) => {
    const key = slideId as keyof typeof t.nav;
    return t.nav[key] ?? slideId;
  };

  const toggleLocale = () => {
    setLocale(locale === "uz" ? "ru" : "uz");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        showBg ? "bg-surface-darker/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        {/* Логотип */}
        <button
          onClick={() => scrollToSlide(0)}
          className="text-xl font-bold tracking-tight text-white"
        >
          Urban<span className="text-brand-500">Scan</span>
        </button>

        {/* Десктоп-меню */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const idx = slides.findIndex((s) => s.id === item.id);
              const isActive = idx === activeIndex;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className={cn(
                      "text-sm transition-colors",
                      isActive
                        ? "text-white font-medium"
                        : "text-text-secondary hover:text-white"
                    )}
                  >
                    {getNavLabel(item.id)}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Переключатель языка */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 rounded-full border border-surface-border bg-surface-card/50 px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:text-white"
          >
            <span className={cn(locale === "uz" && "text-white font-semibold")}>UZ</span>
            <span className="text-text-muted">/</span>
            <span className={cn(locale === "ru" && "text-white font-semibold")}>RU</span>
          </button>
        </div>

        {/* Мобильный: переключатель + бургер */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLocale}
            className="rounded-full border border-surface-border bg-surface-card/50 px-2.5 py-1 text-xs font-medium text-text-secondary"
          >
            {locale === "uz" ? "RU" : "UZ"}
          </button>
          <button
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.nav.menu}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      {mobileOpen && (
        <div className="bg-surface-darker/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  {getNavLabel(item.id)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
