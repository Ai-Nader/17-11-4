import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/checkout',
    '/checkout/:path*'
  ]
}

export function middleware(request: NextRequest) {
  try {
    // Get cart data from cookie
    const cart = request.cookies.get('cart-storage')
    if (!cart?.value) {
      return NextResponse.redirect(new URL('/cart', request.url))
    }

    const cartData = JSON.parse(cart.value)
    
    // Validate cart structure and contents
    if (!cartData?.state?.items || 
        !Array.isArray(cartData.state.items) || 
        cartData.state.items.length === 0) {
      return NextResponse.redirect(new URL('/cart', request.url))
    }

    // Validate each item in the cart
    const validItems = cartData.state.items.every((item: any) => 
      item?.template?.id && 
      item?.quantity > 0 && 
      item?.tier && 
      typeof item?.price === 'number' &&
      item.price > 0
    )

    if (!validItems) {
      return NextResponse.redirect(new URL('/cart', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    // If there's any error parsing the cart, redirect to cart page
    console.error('Middleware error:', error)
    return NextResponse.redirect(new URL('/cart', request.url))
  }
}