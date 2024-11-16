"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CheckoutError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error("Checkout error:", error)
  }, [error])

  return (
    <div className="container max-w-4xl py-20">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Something went wrong during checkout
        </h1>
        <p className="text-muted-foreground text-lg">
          We apologize for the inconvenience. Please try again or contact support if the problem persists.
        </p>
        <div className="flex justify-center gap-4 pt-6">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button variant="outline" onClick={() => router.push("/cart")}>
            Return to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}