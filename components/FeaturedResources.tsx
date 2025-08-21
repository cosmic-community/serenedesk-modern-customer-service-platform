import Link from 'next/link'
import { Resource } from '@/types'
import ResourceCard from './ResourceCard'

interface FeaturedResourcesProps {
  resources: Resource[]
}

export default function FeaturedResources({ resources }: FeaturedResourcesProps) {
  if (resources.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Resources
            </h2>
            <p className="text-xl text-gray-600">
              Insights, guides, and best practices for better customer service
            </p>
          </div>
          <Link 
            href="/resources" 
            className="btn-outline hidden sm:block"
          >
            View All Resources
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.slice(0, 6).map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        <div className="text-center mt-12 sm:hidden">
          <Link href="/resources" className="btn-outline">
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  )
}