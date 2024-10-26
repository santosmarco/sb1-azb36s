import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { AuthLayout } from "@/components/auth/auth-layout"
import { SignInForm } from "./form"

export default function SignInPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-fit"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground">
            Enter your email and password to sign in to your account
          </p>
        </div>

        <SignInForm />

        <p className="text-sm text-muted-foreground text-center">
          Don&apos;t have an account?{" "}
          <Link 
            href="/auth/signup" 
            className="font-medium text-primary hover:underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}