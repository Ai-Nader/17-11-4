import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CheckoutNotFound() {
  return (
    <div className="container max-w-4xl py-20">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Checkout Session Not Found
        </h1>
        <p className="text-muted-foreground text-lg">
          The checkout session you&apos;re looking for doesn&apos;t exist or has expired.
        </p>
        <div className="pt-6">
          <Button asChild>
            <Link href="/cart">Return to Cart</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}