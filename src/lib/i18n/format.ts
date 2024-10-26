import { type Locale } from "@/i18n"

const numberFormats: Record<Locale, Intl.NumberFormatOptions> = {
  en: {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  es: {
    currency: "EUR",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  fr: {
    currency: "EUR",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
}

const dateFormats: Record<Locale, Intl.DateTimeFormatOptions> = {
  en: {
    dateStyle: "medium",
    timeStyle: "short",
  },
  es: {
    dateStyle: "medium",
    timeStyle: "short",
  },
  fr: {
    dateStyle: "medium",
    timeStyle: "short",
  },
}

export function formatCurrency(locale: Locale, value: number) {
  return new Intl.NumberFormat(locale, numberFormats[locale]).format(value)
}

export function formatDate(locale: Locale, date: Date | string) {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, dateFormats[locale]).format(dateObj)
}

export function formatNumber(locale: Locale, value: number) {
  return new Intl.NumberFormat(locale).format(value)
}

export function formatRelativeTime(locale: Locale, date: Date | string) {
  const dateObj = typeof date === "string" ? new Date(date) : date
  const now = new Date()
  const diff = now.getTime() - dateObj.getTime()
  const diffInSeconds = Math.floor(diff / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

  if (diffInDays > 0) return rtf.format(-diffInDays, "day")
  if (diffInHours > 0) return rtf.format(-diffInHours, "hour")
  if (diffInMinutes > 0) return rtf.format(-diffInMinutes, "minute")
  return rtf.format(-diffInSeconds, "second")
}

// New text formatting utilities
export function formatCase(text: string, type: "upper" | "lower" | "title" | "sentence") {
  switch (type) {
    case "upper":
      return text.toUpperCase()
    case "lower":
      return text.toLowerCase()
    case "title":
      return text
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    case "sentence":
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    default:
      return text
  }
}

export function formatList(locale: Locale, items: string[], type: "conjunction" | "disjunction" = "conjunction") {
  const formatter = new Intl.ListFormat(locale, { 
    style: "long", 
    type 
  })
  return formatter.format(items)
}

export function formatUnit(locale: Locale, value: number, unit: Intl.RelativeTimeFormatUnit, style: "long" | "short" | "narrow" = "long") {
  const formatter = new Intl.NumberFormat(locale, {
    style: "unit",
    unit,
    unitDisplay: style,
  })
  return formatter.format(value)
}

export function formatPlural(locale: Locale, count: number, singular: string, plural: string) {
  const formatter = new Intl.PluralRules(locale)
  return formatter.select(count) === "one" ? singular : plural
}

export function truncateText(text: string, length: number, ellipsis = "...") {
  if (text.length <= length) return text
  return text.slice(0, length - ellipsis.length) + ellipsis
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
}