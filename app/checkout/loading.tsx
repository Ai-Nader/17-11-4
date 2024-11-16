import { Card } from "@/components/ui/card"

export default function CheckoutLoading() {
  return (
    <div className="container max-w-6xl py-12">
      <div className="h-8 w-48 bg-muted rounded animate-pulse mb-8" />
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="h-6 w-32 bg-muted rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                <div className="h-10 bg-muted rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                <div className="h-10 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="h-6 w-32 bg-muted rounded animate-pulse" />
              <div className="h-40 bg-muted rounded animate-pulse" />
              <div className="h-10 bg-muted rounded animate-pulse" />
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="h-6 w-32 bg-muted rounded animate-pulse" />
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                    <div className="h-4 w-16 bg-muted rounded animate-pulse" />
                  </div>
                ))}
              </div>
              <div className="h-px bg-muted" />
              <div className="flex justify-between items-center">
                <div className="h-5 w-20 bg-muted rounded animate-pulse" />
                <div className="h-5 w-20 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}