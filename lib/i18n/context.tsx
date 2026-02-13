"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Locale, Translations } from "./types";
import { ru } from "./translations/ru";
import { uz } from "./translations/uz";

const dictionaries: Record<Locale, Translations> = { uz, ru };

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "uz",
  setLocale: () => {},
  t: uz,
});

const STORAGE_KEY = "urbanscan-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uz");

  /* При монтировании читаем из localStorage */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && (saved === "ru" || saved === "uz")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

/** Доступ к текущей локали и переводам */
export const useLocale = () => useContext(LocaleContext);

/** Shortcut — только переводы */
export const useT = () => useContext(LocaleContext).t;
