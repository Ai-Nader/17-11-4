import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Services - Automations Solutions",
  description: "Get custom automation solutions tailored to your specific business needs.",
}

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}