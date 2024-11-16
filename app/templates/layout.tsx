import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Templates - Automations Solutions",
  description: "Browse our collection of premium automation templates for Notion, n8n, Make, Zapier, and ChatGPT.",
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}