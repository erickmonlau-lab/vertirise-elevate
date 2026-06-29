"use client";
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { Language, TranslationKey } from './translations';
import esTranslations from './locales/es';

type TranslationRecord = Record<string, string>;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

import caTranslations from './locales/ca';
import enTranslations from './locales/en';

const ALL_LOCALES: Record<Language, TranslationRecord> = {
  es: esTranslations,
  ca: caTranslations,
  en: enTranslations,
};

function loadLocale(lang: Language): TranslationRecord {
  return ALL_LOCALES[lang];
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('diset-lang');
      if (saved === 'ca' || saved === 'en') return saved as Language;
    }
    return 'es';
  });
  const [translations, setTranslations] = useState<TranslationRecord>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('diset-lang');
      if (saved === 'ca') return caTranslations;
      if (saved === 'en') return enTranslations;
    }
    return esTranslations;
  });

  useEffect(() => {
    setTranslations(loadLocale(language));
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setTranslations(loadLocale(lang));
    if (typeof window !== 'undefined') {
      localStorage.setItem('diset-lang', lang);
    }
  }, []);

  const t = useCallback((key: TranslationKey, fallback?: string): string => {
    return translations[key] || fallback || key;
  }, [translations]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}
