"use client"

import { useState } from 'react'
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { Card } from '@/components/ui/card'

export function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { clearCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      setErrorMessage('Payment system is not ready')
      return
    }

    setIsProcessing(true)
    setErrorMessage(null)

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
        redirect: 'if_required',
      })

      if (error) {
        setErrorMessage(error.message || 'Payment failed')
        toast({
          title: "Payment failed",
          description: error.message,
          variant: "destructive",
        })
        return
      }

      if (paymentIntent?.status === 'succeeded') {
        clearCart()
        toast({
          title: "Payment successful",
          description: "Thank you for your purchase!",
        })
        router.push('/success')
      }
    } catch (error) {
      console.error('Payment error:', error)
      const message = error instanceof Error ? error.message : 'Payment processing failed'
      setErrorMessage(message)
      toast({
        title: "Payment failed",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <PaymentElement />
        {errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
        <Button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full"
        >
          {isProcessing ? "Processing payment..." : "Complete Payment"}
        </Button>
      </form>
    </Card>
  )
}