import { Sidebar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { getSession } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-7xl mx-auto py-6">
          {children}
        </div>
      </main>
      <Toaster />
    </div>
  );
}