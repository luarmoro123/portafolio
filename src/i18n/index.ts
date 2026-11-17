import es from './es';
import en from './en';
import fr from './fr';

export const languages = {
  es: { label: 'Español', short: 'ES', locale: 'es-MX', path: '/' },
  en: { label: 'English', short: 'EN', locale: 'en-US', path: '/en/' },
  fr: { label: 'Français', short: 'FR', locale: 'fr-FR', path: '/fr/' },
} as const;

export type Lang = keyof typeof languages;

const dictionaries = { es, en, fr };

export type Dictionary = typeof es;

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Texto que cambia por idioma. */
export type Localized = Record<Lang, string>;
