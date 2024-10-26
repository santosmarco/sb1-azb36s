import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { AuthLayout } from "@/components/auth/auth-layout"
import { SignUpForm } from "./form"

export default function SignUpPage() {
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
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">
            Enter your information below to create your account
          </p>
        </div>

        <SignUpForm />

        <p className="text-sm text-muted-foreground text-center">
          Already have an account?{" "}
          <Link 
            href="/auth/signin" 
            className="font-medium text-primary hover:underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}