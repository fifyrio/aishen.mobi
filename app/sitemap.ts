import type { MetadataRoute } from "next"
import { getAllArticles } from "@/lib/blog"
import { products, SITE } from "@/lib/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/vido-ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE.url}${p.privacyUrl}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }))

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${SITE.url}/blog/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...productRoutes, ...articleRoutes]
}
