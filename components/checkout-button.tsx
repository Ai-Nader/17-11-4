"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

interface CheckoutButtonProps {
  templateId: string
  price: number
}

export function CheckoutButton({ templateId, price }: CheckoutButtonProps) {
  const { addItem } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleAddToCart = async () => {
    try {
      setLoading(true)
      const [id, tier] = templateId.split('-')
      if (!id || !tier) {
        throw new Error('Invalid template ID format')
      }

      const result = addItem(id, tier as any)
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to add item to cart')
      }

      toast({
        title: "Added to cart",
        description: "Your template has been added to the cart.",
      })
      
      router.push('/cart')
    } catch (error) {
      console.error('Error adding item to cart:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add item to cart. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      size="lg" 
      onClick={handleAddToCart}
      className="w-full"
      disabled={loading}
    >
      {loading ? "Adding to cart..." : `Add to Cart - $${price}`}
    </Button>
  )
}