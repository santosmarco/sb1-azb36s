"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const t = useTranslations()

  const navigation = [
    {
      title: t("dashboard.title"),
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: t("profile.title"),
      href: "/dashboard/profile",
      icon: User,
    },
    {
      title: t("settings.title"),
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b border-border/50">
            <div className="flex h-16 items-center gap-2 px-4">
              <SidebarTrigger />
              <span className="font-semibold">{t("dashboard.title")}</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.endsWith(item.href)}
                    tooltip={item.title}
                  >
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-border/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-6xl py-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}