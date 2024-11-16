"use client"

import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/use-cart'

export function OrderSummary() {
  const { items, total } = useCart()

  return (
    <Card className="p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={`${item.template.id}-${item.tier}`}
            className="flex justify-between"
          >
            <div>
              <p className="font-medium">{item.template.title}</p>
              <p className="text-sm text-muted-foreground capitalize">
                {item.tier} Version × {item.quantity}
              </p>
            </div>
            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}

        <Separator />

        <div className="space-y-1">
          <div className="flex justify-between text-base">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <p>Tax</p>
            <p>Calculated at checkout</p>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between text-lg font-bold">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </Card>
  )
}