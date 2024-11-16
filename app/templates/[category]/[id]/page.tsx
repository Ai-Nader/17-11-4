import { getTemplateById, getAllTemplates } from "@/lib/templates"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Check, FileText, Settings, Wrench } from "lucide-react"
import { CheckoutButton } from "@/components/checkout-button"

export function generateStaticParams() {
  const templates = getAllTemplates()
  return templates.map((template) => ({
    category: template.category,
    id: template.id,
  }))
}

interface PricingTier {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  icon: React.ReactNode
}

export default function TemplatePage({
  params
}: {
  params: { id: string }
}) {
  const template = getTemplateById(params.id)

  if (!template) {
    notFound()
  }

  const pricingTiers: PricingTier[] = [
    {
      id: "template",
      name: "Template Only",
      price: template.price,
      description: "Get instant access to the template",
      features: [
        "Full template access",
        "Basic documentation",
        "30-day support",
        "Future updates"
      ],
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: "customized",
      name: "Customized Template",
      price: template.price + 99,
      description: "Template customized to your needs",
      features: [
        "Everything in Template Only",
        "Customization consultation",
        "Branded elements",
        "60-day support"
      ],
      icon: <Wrench className="h-6 w-6" />
    },
    {
      id: "full-service",
      name: "Full Service Setup",
      price: template.price + 299,
      description: "Complete setup and implementation",
      features: [
        "Everything in Customized",
        "Full implementation",
        "Team training session",
        "90-day priority support",
        "Workflow optimization"
      ],
      icon: <Settings className="h-6 w-6" />
    }
  ]

  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src={template.preview || template.image}
              alt={template.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{template.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{template.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {template.recommendedFor.map((industry) => (
                <Badge key={industry} variant="secondary" className="text-sm">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {template.features.map((feature) => (
                  <Card key={feature} className="p-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">{feature}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="preview">
              <div className="aspect-video relative overflow-hidden rounded-lg mt-6">
                <Image
                  src={template.preview || template.image}
                  alt={`${template.title} Preview`}
                  fill
                  className="object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="documentation">
              <div className="prose prose-neutral dark:prose-invert max-w-none mt-6">
                <h3>Getting Started</h3>
                <p>Follow these steps to get started with your template:</p>
                <ol>
                  <li>Purchase and download the template</li>
                  <li>Follow the installation guide</li>
                  <li>Customize to your needs</li>
                  <li>Launch and enjoy!</li>
                </ol>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          {pricingTiers.map((tier) => (
            <Card key={tier.id} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  {tier.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{tier.name}</h3>
                  <p className="text-2xl font-bold">${tier.price}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {tier.description}
              </p>

              <div className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <CheckoutButton 
                templateId={`${template.id}-${tier.id}`}
                price={tier.price}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}