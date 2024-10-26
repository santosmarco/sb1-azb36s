import { type Locale } from "@/i18n"

const LANGUAGE_KEY = "preferred_language"

export function getStoredLanguage(): Locale | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(LANGUAGE_KEY) as Locale | null
}

export function setStoredLanguage(locale: Locale) {
  if (typeof window === "undefined") return
  localStorage.setItem(LANGUAGE_KEY, locale)
}

export function detectBrowserLanguage(): Locale | null {
  if (typeof window === "undefined") return null
  
  const browserLang = navigator.language.split("-")[0]
  const supportedLocales = ["en", "es", "fr"] as const
  
  return supportedLocales.find(locale => locale === browserLang) || null
}

export function getPreferredLanguage(): Locale {
  // Priority: Stored preference > Browser language > Default (en)
  return getStoredLanguage() || detectBrowserLanguage() || "en"
}