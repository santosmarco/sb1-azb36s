"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { languages } from "@/lib/i18n/languages"
import { locales } from "@/i18n"
import { setStoredLanguage } from "@/lib/i18n/storage"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("settings.general.language.options")

  const handleLocaleChange = (newLocale: string) => {
    // Store the language preference
    setStoredLanguage(newLocale as typeof locale)
    
    // Update the URL
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <span className="sr-only">Toggle language</span>
          <span className="flex items-center justify-center text-base">
            {languages[locale as keyof typeof languages].flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => handleLocaleChange(l)}
            className={cn(
              "flex items-center gap-2",
              l === locale && "bg-accent"
            )}
          >
            <span>{languages[l as keyof typeof languages].flag}</span>
            <span>{languages[l as keyof typeof languages].nativeName}</span>
            <span className="ml-auto text-xs text-muted-foreground">
              ({t(l)})
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}