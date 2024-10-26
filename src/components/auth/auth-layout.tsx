import { cn } from "@/lib/utils"

interface AuthLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  showImage?: boolean
}

export function AuthLayout({ children, showImage = true, className, ...props }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 overflow-hidden">
      {showImage && (
        <div className="hidden lg:block relative overflow-hidden bg-gradient-to-t from-neutral-900 to-neutral-950">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop')" }}
          />
          <div className="relative h-full p-12 flex items-end">
            <blockquote className="space-y-2">
              <p className="text-lg text-white">
                &ldquo;This platform has transformed how we handle our daily operations. The interface is intuitive and the features are exactly what we needed.&rdquo;
              </p>
              <footer className="text-sm text-neutral-300">
                Sofia Davis, Product Manager at Acme Inc
              </footer>
            </blockquote>
          </div>
        </div>
      )}
      <main className={cn(
        "flex min-h-screen flex-col justify-center relative overflow-y-auto py-12",
        !showImage && "lg:max-w-2xl lg:mx-auto",
        className
      )} {...props}>
        <div className="px-6 sm:px-8 lg:px-12 w-full">
          {children}
        </div>
      </main>
    </div>
  )
}