import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = [
    '',
    '/features',
    '/solutions',
    '/cases',
    '/partners',
    '/about',
    '/service',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}

