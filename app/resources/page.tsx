import { Suspense } from 'react'
import ResourceCard from '@/components/ResourceCard'
import ResourceFilter from '@/components/ResourceFilter'
import SearchBar from '@/components/SearchBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getResources } from '@/lib/cosmic'
import { Resource } from '@/types'

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function ResourcesContent({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const type = typeof searchParams.type === 'string' ? searchParams.type : undefined
  const search = typeof searchParams.search === 'string' ? searchParams.search : ''

  let resources: Resource[] = []
  
  try {
    resources = await getResources(type)
  } catch (error) {
    console.error('Error fetching resources:', error)
  }

  // Filter by search query if provided
  if (search) {
    resources = resources.filter(resource => 
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.metadata?.excerpt?.toLowerCase().includes(search.toLowerCase()) ||
      resource.metadata?.author?.toLowerCase().includes(search.toLowerCase())
    )
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' }
  ]

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(window.location.search)
    if (query) {
      params.set('search', query)
    } else {
      params.delete('search')
    }
    window.history.pushState({}, '', `${window.location.pathname}?${params}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover insights, guides, and tools to help you deliver exceptional customer service.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar 
              placeholder="Search resources..."
              onSearch={handleSearch}
            />
          </div>
          <ResourceFilter currentType={type} />
        </div>

        {/* Results */}
        {resources.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              {search ? `No resources found for "${search}"` : 'No resources available'}
            </p>
            {search && (
              <button
                onClick={() => handleSearch('')}
                className="text-blue-600 hover:text-blue-800"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                {search ? `Found ${resources.length} resource${resources.length !== 1 ? 's' : ''} for "${search}"` : `${resources.length} resource${resources.length !== 1 ? 's' : ''} available`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default async function ResourcesPage({ searchParams }: PageProps) {
  // In Next.js 15+, searchParams is a Promise and must be awaited
  const resolvedSearchParams = await searchParams

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResourcesContent searchParams={resolvedSearchParams} />
    </Suspense>
  )
}