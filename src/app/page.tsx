import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Your App</div>
          <nav className="flex items-center gap-4">
            <Link href="/auth/signin">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Your Next.js Application
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A modern web application built with Next.js, Supabase, and shadcn/ui.
            </p>
            <div className="space-x-4">
              <Link href="/auth/signup">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}