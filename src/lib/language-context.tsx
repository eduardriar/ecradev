"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  defaultLocale,
  getContent,
  locales,
  type Content,
  type Locale,
} from "./content";

const STORAGE_KEY = "lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type LanguageContextValue = {
  language: Locale;
  setLanguage: (locale: Locale) => void;
  content: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

function writeCookie(locale: Locale) {
  document.cookie = `${STORAGE_KEY}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

export function LanguageProvider({
  initialLocale = defaultLocale,
  children,
}: {
  initialLocale?: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [language, setLanguageState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored) && stored !== language) {
      setLanguageState(stored);
      writeCookie(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLanguage = useCallback(
    (next: Locale) => {
      setLanguageState(next);
      localStorage.setItem(STORAGE_KEY, next);
      writeCookie(next);
      router.refresh();
    },
    [router],
  );

  const content = useMemo(() => getContent(language), [language]);

  const value = useMemo(
    () => ({ language, setLanguage, content }),
    [language, setLanguage, content],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return { language: ctx.language, setLanguage: ctx.setLanguage };
}

export function useContent(): Content {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useContent must be used within a LanguageProvider");
  return ctx.content;
}
