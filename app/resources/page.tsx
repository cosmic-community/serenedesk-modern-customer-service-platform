import { getResources } from '@/lib/cosmic'
import ResourceCard from '@/components/ResourceCard'
import ResourceFilter from '@/components/ResourceFilter'

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guides, reports, and insights to help you deliver exceptional customer service.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <ResourceFilter />
          </div>

          {/* Resources Grid */}
          <div className="flex-1">
            {resources.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No resources available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}