import { getAllTemplates } from "@/lib/templates"
import { TemplateCard } from "@/components/template-card"

export default function TemplatesPage() {
  const templates = getAllTemplates()

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">All Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  )
}