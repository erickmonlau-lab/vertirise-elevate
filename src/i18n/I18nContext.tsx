"use client";
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { Language, TranslationKey } from './translations';

type TranslationRecord = Record<string, string>;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

async function loadLocale(lang: Language): Promise<TranslationRecord> {
  const mod = await import(`./locales/${lang}.ts`);
  return mod.default;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [translations, setTranslations] = useState<TranslationRecord>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'es' || saved === 'ca' || saved === 'en')) {
        setLanguageState(saved);
      }
    }
  }, []);

  useEffect(() => {
    loadLocale(language).then(setTranslations);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
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
