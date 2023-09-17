import type { Locale } from './i18n-config'

// Enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    es: () => import('./dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en()