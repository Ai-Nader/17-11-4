import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code2, FileCode, Sparkles, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getTemplatesByCategory } from "@/lib/templates"
import { TemplateCard } from "@/components/template-card"
import { TemplateCategory } from "@/types/template"

const categories: { name: string; description: string; category: TemplateCategory }[] = [
  {
    name: "Notion Templates",
    description: "Enhance your workspace with powerful Notion templates",
    category: "notion"
  },
  {
    name: "n8n Workflows",
    description: "Automate your business with pre-built n8n workflows",
    category: "n8n"
  },
  {
    name: "Make Scenarios",
    description: "Streamline processes with Make automation templates",
    category: "make"
  },
  {
    name: "Zapier Zaps",
    description: "Connect your apps with ready-to-use Zapier templates",
    category: "zapier"
  },
  {
    name: "ChatGPT Prompts",
    description: "Optimize your AI interactions with expert prompts",
    category: "chatgpt"
  }
]

const services = [
  {
    title: "Custom Development",
    description: "Tailored automation solutions built specifically for your business needs",
    icon: <Code2 className="h-8 w-8" />,
  },
  {
    title: "Template Customization",
    description: "Modify existing templates to perfectly match your workflow",
    icon: <Wrench className="h-8 w-8" />,
  },
  {
    title: "Integration Services",
    description: "Seamlessly connect your existing tools and systems",
    icon: <FileCode className="h-8 w-8" />,
  },
]

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background"></div>
        <div className="container relative pt-20 pb-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              🚀 Supercharge your workflow
              <Button variant="link" className="h-auto p-0 ml-2">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl max-w-3xl">
              Premium AI Templates for Modern Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover hand-crafted templates for Notion, n8n, Make, Zapier, and ChatGPT. 
              Save hours of setup time and boost your productivity instantly.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/templates">
                  Browse Templates <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/custom">Request Custom Template</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.category} className="container py-20 border-t first:border-t-0">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">{category.name}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            <Button variant="outline" asChild>
              <Link href={`/templates/${category.category}`}>View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getTemplatesByCategory(category.category)
              .slice(0, 3)
              .map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
          </div>
        </section>
      ))}

      <section className="container py-24 border-t">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team of automation experts can create custom solutions tailored to your unique business requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link href="/custom">
              Learn More About Custom Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}