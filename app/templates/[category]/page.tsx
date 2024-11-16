import { getTemplatesByCategory } from "@/lib/templates"
import { TemplateCard } from "@/components/template-card"
import { notFound } from "next/navigation"
import { TemplateCategory } from "@/types/template"

const categoryTitles: Record<TemplateCategory, string> = {
  notion: "Notion Templates",
  n8n: "n8n Workflows",
  make: "Make Scenarios",
  zapier: "Zapier Zaps",
  chatgpt: "ChatGPT Prompts"
}

export function generateStaticParams() {
  return [
    { category: "notion" },
    { category: "n8n" },
    { category: "make" },
    { category: "zapier" },
    { category: "chatgpt" }
  ]
}

export default function CategoryPage({
  params
}: {
  params: { category: TemplateCategory }
}) {
  const templates = getTemplatesByCategory(params.category)
  const title = categoryTitles[params.category]

  if (!title) {
    notFound()
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  )
}