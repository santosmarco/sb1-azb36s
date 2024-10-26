"use client";

import { LogOut } from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface LogoutButtonProps {
  className?: string;
  variant?: "default" | "ghost";
}

export function LogoutButton({ className, variant = "ghost" }: LogoutButtonProps) {
  const router = useRouter();
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/auth/signin");
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem logging out.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      onClick={handleLogout}
      className={cn(
        "flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-accent rounded-md transition-colors",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
    >
      <LogOut className="h-4 w-4" />
      <span>Logout</span>
    </div>
  );
}