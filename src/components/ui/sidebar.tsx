"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Settings,
  Users,
  Bell,
  FileText,
  BarChart,
} from "lucide-react";
import { LogoutButton } from "@/components/auth/logout-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <div className="flex h-screen">
        <div className="flex flex-col justify-between w-16 py-4 bg-background border-r">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Link
                href="/dashboard"
                className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground font-bold"
              >
                DB
              </Link>
            </div>
            <nav className="space-y-2">
              {sidebarLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Tooltip key={link.href}>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex justify-center p-2 mx-2 rounded-md transition-colors hover:bg-accent",
                          isActive && "bg-accent"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{link.title}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </nav>
          </div>
          <div className="mx-2">
            <LogoutButton />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}