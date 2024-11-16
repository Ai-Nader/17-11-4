import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container max-w-2xl py-20">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Page Not Found</h1>
        <p className="text-muted-foreground text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="pt-6">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}