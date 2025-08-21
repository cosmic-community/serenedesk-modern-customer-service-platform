import { Suspense } from 'react'
import ResourceCard from '@/components/ResourceCard'
import ResourceFilter from '@/components/ResourceFilter'
import SearchBar from '@/components/SearchBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getResources } from '@/lib/cosmic'
import { Resource } from '@/types'

interface BreadcrumbItem {
  label: string
  href: string
}

interface ResourceFilterProps {
  resourceTypes: { key: string; label: string }[]
  selectedType: string
  onTypeChange: (type: string) => void
}

// Resource type mappings
const RESOURCE_TYPES = [
  { key: '', label: 'All Resources' },
  { key: 'blog', label: 'Blog Posts' },
  { key: 'guide', label: 'Guides' },
  { key: 'report', label: 'Reports' },
  { key: 'webinar', label: 'Webinars' },
  { key: 'video', label: 'Videos' },
  { key: 'whitepaper', label: 'Whitepapers' }
]

interface ResourcesPageProps {
  searchParams?: {
    type?: string
    search?: string
  }
}

export default async function ResourcesPage({ 
  searchParams 
}: ResourcesPageProps) {
  const selectedType = searchParams?.type || ''
  const searchQuery = searchParams?.search || ''

  // Fetch resources based on type filter
  const resources = await getResources(selectedType || undefined)

  // Filter by search query if provided
  const filteredResources = searchQuery
    ? resources.filter((resource: Resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.metadata?.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.metadata?.tags?.some((tag) =>
          tag.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : resources

  // Group resources by type for display
  const groupedResources = RESOURCE_TYPES.reduce((acc, type) => {
    if (type.key === '') return acc // Skip "All Resources"
    
    acc[type.key] = filteredResources.filter((resource: Resource) => 
      resource.metadata?.resource_type?.key === type.key
    )
    return acc
  }, {} as Record<string, Resource[]>)

  // Get featured resources
  const featuredResources = filteredResources.filter((resource: Resource) => 
    resource.metadata?.featured
  )

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' }
  ]

  const handleTypeChange = async (type: string) => {
    const url = new URL(window.location.href)
    if (type) {
      url.searchParams.set('type', type)
    } else {
      url.searchParams.delete('type')
    }
    window.history.pushState({}, '', url.toString())
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our collection of guides, reports, and insights to help you succeed
          </p>
          
          <div className="max-w-2xl mb-8">
            <SearchBar 
              placeholder="Search resources..." 
              defaultValue={searchQuery}
            />
          </div>

          <ResourceFilter
            resourceTypes={RESOURCE_TYPES}
            selectedType={selectedType}
            onTypeChange={handleTypeChange}
          />
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.slice(0, 6).map((resource: Resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        )}

        {/* All Resources or Filtered Results */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedType 
                ? `${RESOURCE_TYPES.find(t => t.key === selectedType)?.label || 'Resources'}` 
                : 'All Resources'
              }
            </h2>
            <p className="text-gray-600">
              {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
            </p>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource: Resource) => (
                <ResourceCard 
                  key={resource.id} 
                  resource={resource}
                  showExcerpt={true}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No resources found
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery 
                    ? `No resources match your search for "${searchQuery}"`
                    : selectedType 
                      ? `No ${RESOURCE_TYPES.find(t => t.key === selectedType)?.label?.toLowerCase()} available`
                      : 'No resources available at the moment'
                  }
                </p>
                <button 
                  onClick={() => {
                    const url = new URL(window.location.href)
                    url.searchParams.delete('type')
                    url.searchParams.delete('search')
                    window.history.pushState({}, '', url.toString())
                  }}
                  className="btn-secondary"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay updated with our latest resources
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest guides, reports, and insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}