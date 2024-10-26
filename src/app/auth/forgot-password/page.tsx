import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { AuthLayout } from "@/components/auth/auth-layout"
import { ForgotPasswordForm } from "./form"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <Link 
            href="/auth/signin"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-fit"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to sign in
          </Link>
          <h1 className="text-3xl font-bold">Reset password</h1>
          <p className="text-muted-foreground">
            Enter your email address and we&apos;ll send you a link to reset your password
          </p>
        </div>

        <ForgotPasswordForm />
      </div>
    </AuthLayout>
  )
}