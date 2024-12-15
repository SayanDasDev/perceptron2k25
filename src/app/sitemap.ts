import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cs.rkmvu.ac.in/perceptron25/',
      priority: 1,
    },
  ]
}