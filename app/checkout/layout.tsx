import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout - Automations Solutions",
  description: "Complete your purchase securely",
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}