import { Suspense } from 'react'
import ResourceCard from '@/components/ResourceCard'
import ResourceFilter from '@/components/ResourceFilter'
import SearchBar from '@/components/SearchBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getResources } from '@/lib/cosmic'
import { ResourceType } from '@/types'

// Define the available resource types
const resourceTypes: { key: ResourceType; label: string }[] = [
  { key: 'blog', label: 'Blog Posts' },
  { key: 'guide', label: 'Guides' },
  { key: 'report', label: 'Reports' },
  { key: 'webinar', label: 'Webinars' },
  { key: 'video', label: 'Videos' },
  { key: 'whitepaper', label: 'Whitepapers' },
]

interface ResourcesPageProps {
  searchParams: Promise<{ type?: string; search?: string }>
}

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  // In Next.js 15+, searchParams is a Promise and must be awaited
  const params = await searchParams
  const selectedType = params.type || ''
  const searchQuery = params.search || ''

  // Fetch resources based on filters
  const resources = await getResources(selectedType || undefined)

  // Filter resources by search query if provided
  const filteredResources = searchQuery
    ? resources.filter(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.metadata?.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : resources

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Resources & Insights
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover guides, reports, and insights to help you deliver exceptional customer experiences
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <SearchBar 
            placeholder="Search resources..." 
            initialValue={searchQuery}
          />
        </div>

        <ResourceFilter
          types={resourceTypes}
          selectedType={selectedType}
          onTypeChange={(type: string) => {
            // This would typically update URL params in a client component
            // For now, we'll handle this through URL navigation
            const url = new URL(window.location.href)
            if (type) {
              url.searchParams.set('type', type)
            } else {
              url.searchParams.delete('type')
            }
            window.location.href = url.toString()
          }}
        />

        {/* Resources Grid */}
        <Suspense fallback={<div className="text-center py-12">Loading resources...</div>}>
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No resources found
              </h3>
              <p className="text-gray-600">
                {searchQuery || selectedType
                  ? 'Try adjusting your filters or search terms.'
                  : 'Check back later for new resources.'}
              </p>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  )
}