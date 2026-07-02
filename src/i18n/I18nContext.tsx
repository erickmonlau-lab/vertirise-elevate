"use client";
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { Language, TranslationKey } from './translations';
import esTranslations from './locales/es';
import caTranslations from './locales/ca';
import enTranslations from './locales/en';

type TranslationRecord = Record<string, string>;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const ALL_LOCALES: Record<Language, TranslationRecord> = {
  es: esTranslations,
  ca: caTranslations,
  en: enTranslations,
};

function loadLocale(lang: Language): TranslationRecord {
  return ALL_LOCALES[lang];
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [translations, setTranslations] = useState<TranslationRecord>(esTranslations);

  useEffect(() => {
    // Solo en el cliente, despus de la hidratacin, leemos las preferencias
    const saved = localStorage.getItem('diset-lang');
    let initialLang: Language = 'es';

    if (saved === 'es' || saved === 'ca' || saved === 'en') {
      initialLang = saved as Language;
    } else {
      const browserLang = navigator.language?.toLowerCase() || '';
      if (browserLang.startsWith('es') || browserLang.startsWith('ca')) {
        initialLang = 'es';
      } else {
        initialLang = 'en';
      }
    }

    if (initialLang !== 'es') {
      setLanguageState(initialLang);
      setTranslations(ALL_LOCALES[initialLang]);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setTranslations(ALL_LOCALES[lang]);
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
