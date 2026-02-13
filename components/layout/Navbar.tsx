"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { slides } from "@/data/slides";
import { useFullpage } from "./FullpageContainer";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeIndex, scrollToSlide } = useFullpage();

  /* Навбар полупрозрачный, если не на Hero */
  const showBg = activeIndex > 0;
  const navItems = slides.filter((s) => s.navLabel);

  const handleNav = (slideId: string) => {
    const idx = slides.findIndex((s) => s.id === slideId);
    if (idx !== -1) scrollToSlide(idx);
    setMobileOpen(false);
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
        <ul className="hidden items-center gap-8 md:flex">
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
                  {item.navLabel}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Мобильный бургер */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                  {item.navLabel}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
