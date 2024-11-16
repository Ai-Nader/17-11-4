"use client"

import { useEffect, useState, useCallback } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { useCart } from '@/hooks/use-cart'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { BillingForm } from '@/components/checkout/billing-form'
import { OrderSummary } from '@/components/checkout/order-summary'
import { PaymentForm } from '@/components/checkout/payment-form'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getStripe } from '@/lib/stripe-client'
import type { PaymentIntentResponse } from '@/lib/stripe'

export function CheckoutContent() {
  const { items, total } = useCart()
  const [clientSecret, setClientSecret] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  const validateCart = useCallback(() => {
    if (!items.length || total <= 0) {
      throw new Error('Cart is empty')
    }

    items.forEach(item => {
      if (!item.template?.id || !item.tier || item.quantity < 1 || item.price <= 0) {
        throw new Error('Invalid cart item')
      }
    })
  }, [items, total])

  const initializePayment = useCallback(async () => {
    try {
      setError(null)
      validateCart()

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          items,
          amount: total,
        }),
        cache: 'no-store',
      })

      const data = await response.json() as PaymentIntentResponse | { error: string }

      if ('error' in data) {
        throw new Error(data.error)
      }

      if (!data.clientSecret) {
        throw new Error('Invalid response from payment service')
      }

      setClientSecret(data.clientSecret)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Payment initialization failed'
      console.error('Payment initialization error:', error)
      
      if (message.includes('Cart is empty')) {
        router.push('/cart')
        return
      }

      setError(message)
      toast({
        title: 'Payment Error',
        description: message,
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }, [items, total, validateCart, router, toast])

  useEffect(() => {
    if (items.length > 0 && total > 0) {
      initializePayment()
    }
  }, [initializePayment, items.length, total])

  if (!items.length) {
    return null
  }

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center space-y-4">
          <p className="text-destructive">{error}</p>
          <Button onClick={() => router.push('/cart')}>
            Return to Cart
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6">
        <BillingForm onSubmit={() => {}} />

        {isLoading ? (
          <Card className="p-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-sm text-muted-foreground">
                Initializing payment...
              </p>
            </div>
          </Card>
        ) : clientSecret ? (
          <Elements
            stripe={getStripe()}
            options={{
              clientSecret,
              appearance: {
                theme: 'stripe',
                variables: {
                  colorPrimary: '#0F172A',
                },
              },
            }}
          >
            <PaymentForm />
          </Elements>
        ) : null}
      </div>

      <div>
        <OrderSummary />
      </div>
    </div>
  )
}