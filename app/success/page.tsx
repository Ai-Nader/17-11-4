import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="container max-w-2xl py-20">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Thank you for your purchase!</h1>
        <p className="text-muted-foreground text-lg">
          Your template will be delivered to your email shortly. If you don&apos;t receive it within 5 minutes, please check your spam folder.
        </p>
        <div className="pt-6">
          <Button asChild>
            <Link href="/templates">Browse More Templates</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}