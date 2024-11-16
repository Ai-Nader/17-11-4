"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { BillingForm, type BillingFormData } from "@/components/checkout/billing-form"
import { OrderSummary } from "@/components/checkout/order-summary"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (!items.length) {
      router.push('/cart')
    }
  }, [items, router])

  const handleSubmit = async (data: BillingFormData) => {
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      clearCart()
      toast({
        title: "Order successful",
        description: "Thank you for your purchase!",
      })
      router.push('/success')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process order. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (!items.length) {
    return null
  }

  return (
    <div className="container max-w-6xl py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <BillingForm onSubmit={handleSubmit} />

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Complete Order</h2>
            <Button 
              onClick={() => handleSubmit({ fullName: "Test User", email: "test@example.com" })}
              className="w-full"
            >
              Place Order (${total.toFixed(2)})
            </Button>
          </Card>
        </div>

        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}