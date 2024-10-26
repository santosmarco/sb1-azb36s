import { type Locale } from "@/i18n"

export const languages: Record<Locale, {
  name: string
  nativeName: string
  flag: string
}> = {
  en: {
    name: "English",
    nativeName: "English",
    flag: "🇬🇧"
  },
  es: {
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸"
  },
  fr: {
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷"
  }
}