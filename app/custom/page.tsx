import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Code2,
  FileCode,
  Wrench,
  ArrowRight,
  MessageSquare,
  Clock,
  CheckCircle
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Custom Development",
    description: "Get a fully custom automation solution built specifically for your business needs",
    icon: <Code2 className="h-8 w-8" />,
    features: [
      "Custom workflow design",
      "Integration with your existing tools",
      "Scalable architecture",
      "Performance optimization"
    ]
  },
  {
    title: "Template Customization",
    description: "Modify our existing templates to perfectly match your workflow requirements",
    icon: <Wrench className="h-8 w-8" />,
    features: [
      "Template adaptation",
      "Branding alignment",
      "Workflow optimization",
      "Additional features"
    ]
  },
  {
    title: "Integration Services",
    description: "Seamlessly connect your existing tools and systems with expert integration",
    icon: <FileCode className="h-8 w-8" />,
    features: [
      "API integration",
      "Data migration",
      "System synchronization",
      "Performance monitoring"
    ]
  }
]

const process = [
  {
    title: "Initial Consultation",
    description: "Discuss your needs and requirements",
    icon: <MessageSquare className="h-6 w-6" />
  },
  {
    title: "Development",
    description: "Custom solution built to your specifications",
    icon: <Code2 className="h-6 w-6" />
  },
  {
    title: "Testing & Review",
    description: "Thorough testing and refinement",
    icon: <Clock className="h-6 w-6" />
  },
  {
    title: "Deployment",
    description: "Smooth implementation and handover",
    icon: <CheckCircle className="h-6 w-6" />
  }
]

export default function CustomPage() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background" />
        <div className="container relative pt-20 pb-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl max-w-3xl">
              Custom Automation Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Need something unique? Our team of experts will work with you to create
              custom automation solutions tailored to your specific needs.
            </p>
            <Button size="lg" asChild>
              <Link href="mailto:info@automation.market">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
          Our Custom Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-semibold text-xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-20 border-t">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <div className="relative">
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}