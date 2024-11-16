import { Template } from "@/types/template"

export type TemplateCategory = "notion" | "n8n" | "make" | "zapier" | "chatgpt"

export const templates: Template[] = [
  // Notion Templates
  {
    id: "notion-content-calendar",
    title: "Content Calendar Pro",
    description: "A comprehensive content planning system with automated workflows",
    category: "notion",
    price: 29,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Editorial calendar view",
      "Content pipeline tracker",
      "Automated status updates",
      "Team collaboration features",
    ],
    recommendedFor: ["Media Companies", "Marketing Agencies", "Content Creators"]
  },
  {
    id: "notion-project-manager",
    title: "Project Manager's Dashboard",
    description: "Complete project management system with Gantt charts and resource tracking",
    category: "notion",
    price: 39,
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Gantt chart views",
      "Resource allocation",
      "Budget tracking",
      "Client portal",
    ],
    recommendedFor: ["Project Managers", "Agencies", "Consultants"]
  },
  {
    id: "notion-client-crm",
    title: "Client CRM Suite",
    description: "Professional CRM system for managing client relationships",
    category: "notion",
    price: 34,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Contact management",
      "Deal pipeline",
      "Meeting notes",
      "Email templates",
    ],
    recommendedFor: ["Freelancers", "Small Businesses", "Consultants"]
  },

  // n8n Templates
  {
    id: "n8n-email-automation",
    title: "Email Marketing Suite",
    description: "Automated email marketing workflows with analytics",
    category: "n8n",
    price: 49,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Customer segmentation",
      "Automated follow-ups",
      "Performance analytics",
      "A/B testing workflows",
    ],
    recommendedFor: ["E-commerce", "SaaS Companies", "Digital Agencies"]
  },
  {
    id: "n8n-lead-generation",
    title: "Lead Generation Engine",
    description: "Automated lead capture and qualification system",
    category: "n8n",
    price: 44,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Multi-channel lead capture",
      "Lead scoring",
      "CRM integration",
      "Automated follow-up",
    ],
    recommendedFor: ["Sales Teams", "Marketing Agencies", "B2B Companies"]
  },
  {
    id: "n8n-social-scheduler",
    title: "Social Media Scheduler",
    description: "Advanced social media post scheduling and analytics",
    category: "n8n",
    price: 39,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Multi-platform scheduling",
      "Content calendar",
      "Analytics dashboard",
      "Hashtag management",
    ],
    recommendedFor: ["Social Media Managers", "Content Creators", "Brands"]
  },

  // Make Templates
  {
    id: "make-crm-integration",
    title: "CRM Integration Bundle",
    description: "Connect your CRM with other business tools seamlessly",
    category: "make",
    price: 39,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Lead synchronization",
      "Contact management",
      "Deal tracking",
      "Custom field mapping",
    ],
    recommendedFor: ["Sales Teams", "Business Development", "Account Managers"]
  },
  {
    id: "make-invoice-automation",
    title: "Invoice Automation System",
    description: "Streamline your invoicing process with automated workflows",
    category: "make",
    price: 34,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Invoice generation",
      "Payment tracking",
      "Reminder automation",
      "Accounting integration",
    ],
    recommendedFor: ["Accountants", "Freelancers", "Small Businesses"]
  },
  {
    id: "make-support-desk",
    title: "Support Desk Automation",
    description: "Automate customer support workflows and ticket management",
    category: "make",
    price: 44,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Ticket routing",
      "Auto-responses",
      "SLA tracking",
      "Performance analytics",
    ],
    recommendedFor: ["Support Teams", "Customer Service", "IT Departments"]
  },

  // Zapier Templates
  {
    id: "zapier-social-media",
    title: "Social Media Automation",
    description: "Streamline your social media management workflow",
    category: "zapier",
    price: 34,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Cross-platform posting",
      "Engagement tracking",
      "Content scheduling",
      "Analytics integration",
    ],
    recommendedFor: ["Social Media Managers", "Digital Marketers", "Influencers"]
  },
  {
    id: "zapier-recruitment",
    title: "Recruitment Workflow",
    description: "Automate your hiring process from application to onboarding",
    category: "zapier",
    price: 49,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Application tracking",
      "Interview scheduling",
      "Document collection",
      "Onboarding automation",
    ],
    recommendedFor: ["HR Teams", "Recruiters", "Hiring Managers"]
  },
  {
    id: "zapier-expense-tracker",
    title: "Expense Tracking System",
    description: "Automated expense tracking and reporting solution",
    category: "zapier",
    price: 29,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Receipt scanning",
      "Expense categorization",
      "Report generation",
      "Approval workflow",
    ],
    recommendedFor: ["Finance Teams", "Accountants", "Business Owners"]
  },

  // ChatGPT Templates
  {
    id: "chatgpt-content-writer",
    title: "AI Content Writer Pro",
    description: "Professional writing prompts for various content types",
    category: "chatgpt",
    price: 24,
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Blog post templates",
      "Social media captions",
      "Email sequences",
      "SEO optimization",
    ],
    recommendedFor: ["Content Writers", "Bloggers", "Marketing Teams"]
  },
  {
    id: "chatgpt-sales-copy",
    title: "Sales Copy Generator",
    description: "AI-powered sales copy and product description templates",
    category: "chatgpt",
    price: 29,
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Product descriptions",
      "Sales pages",
      "Email campaigns",
      "Ad copy",
    ],
    recommendedFor: ["E-commerce", "Copywriters", "Marketing Teams"]
  },
  {
    id: "chatgpt-support-agent",
    title: "Customer Support Agent",
    description: "AI templates for customer service responses",
    category: "chatgpt",
    price: 34,
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Response templates",
      "FAQ generation",
      "Ticket resolution",
      "Tone adjustment",
    ],
    recommendedFor: ["Support Teams", "Customer Service", "Community Managers"]
  }
]

export function getAllTemplates(): Template[] {
  return templates
}

export function getTemplatesByCategory(category: string): Template[] {
  return templates.filter(template => template.category === category)
}

export function getTemplateById(id: string): Template | undefined {
  return templates.find(template => template.id === id)
}