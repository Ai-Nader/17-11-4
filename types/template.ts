export type TemplateCategory = "notion" | "n8n" | "make" | "zapier" | "chatgpt"

export interface Template {
  id: string
  title: string
  description: string
  category: TemplateCategory
  price: number
  image: string
  features: string[]
  preview?: string
  recommendedFor: string[]
}