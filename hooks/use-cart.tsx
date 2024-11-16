"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartState, CartItem, CartTier, getTierPrice } from '@/lib/cart'
import { getTemplateById } from '@/lib/templates'

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addItem: (templateId: string, tier: CartTier) => {
        if (!templateId || typeof templateId !== 'string') {
          return { 
            success: false, 
            error: 'Invalid template ID' 
          }
        }

        if (!tier || !['template', 'customized', 'full-service'].includes(tier)) {
          return { 
            success: false, 
            error: 'Invalid tier selection' 
          }
        }

        try {
          const template = getTemplateById(templateId)
          if (!template) {
            return { 
              success: false, 
              error: 'Template not found' 
            }
          }

          const price = getTierPrice(template, tier)

          set((state) => {
            const existingItem = state.items.find(
              (item) => item.template.id === templateId && item.tier === tier
            )

            if (existingItem) {
              const updatedItems = state.items.map((item) =>
                item.template.id === templateId && item.tier === tier
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
              return {
                items: updatedItems,
                total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
              }
            }

            const newItems = [...state.items, { template, quantity: 1, tier, price }]
            return {
              items: newItems,
              total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
            }
          })

          return { success: true }
        } catch (error) {
          return { 
            success: false, 
            error: error instanceof Error ? error.message : 'Failed to add item to cart' 
          }
        }
      },
      removeItem: (templateId: string, tier: CartTier) => {
        if (!templateId || !tier) return

        set((state) => {
          const updatedItems = state.items.filter(
            (item) => !(item.template.id === templateId && item.tier === tier)
          )
          return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          }
        })
      },
      updateQuantity: (templateId: string, tier: CartTier, quantity: number) => {
        if (!templateId || !tier || quantity < 1) return

        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.template.id === templateId && item.tier === tier
              ? { ...item, quantity }
              : item
          )
          return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          }
        })
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
      skipHydration: true,
    }
  )
)