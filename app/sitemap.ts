import { MetadataRoute } from 'next'
import { getAllTemplates } from '@/lib/templates'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
  const templates = getAllTemplates()
  const lastModified = new Date()

  // Main pages with high priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Static pages with medium priority
  const staticPages = [
    '/about',
    '/contact',
    '/custom',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Template category pages
  const categoryPages = [
    '/templates/notion',
    '/templates/n8n',
    '/templates/make',
    '/templates/zapier',
    '/templates/chatgpt',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Individual template pages
  const templatePages = templates.map(template => ({
    url: `${baseUrl}/templates/${template.category}/${template.id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...mainPages, ...staticPages, ...categoryPages, ...templatePages]
}