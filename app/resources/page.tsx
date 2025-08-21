'use client'

import { useState, useEffect } from 'react'
import SearchBar from '@/components/SearchBar'
import ResourceCard from '@/components/ResourceCard'
import ResourceFilter from '@/components/ResourceFilter'
import { getResources } from '@/lib/cosmic'
import { Resource, ResourceType } from '@/types'

const resourceTypes: { key: ResourceType; label: string }[] = [
  { key: 'blog', label: 'Blog Posts' },
  { key: 'guide', label: 'Guides' },
  { key: 'report', label: 'Reports' },
  { key: 'webinar', label: 'Webinars' },
  { key: 'video', label: 'Videos' },
  { key: 'whitepaper', label: 'Whitepapers' }
]

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [filteredResources, setFilteredResources] = useState<Resource[]>([])
  const [selectedType, setSelectedType] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchResources() {
      try {
        const data = await getResources()
        setResources(data)
        setFilteredResources(data)
      } catch (error) {
        console.error('Error fetching resources:', error)
        setResources([])
        setFilteredResources([])
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  useEffect(() => {
    let filtered = resources

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(resource => 
        resource.metadata?.resource_type?.key === selectedType
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.metadata?.excerpt?.toLowerCase().includes(query) ||
        resource.metadata?.author?.toLowerCase().includes(query)
      )
    }

    setFilteredResources(filtered)
  }, [resources, selectedType, searchQuery])

  const handleTypeFilter = (type: string) => {
    setSelectedType(type)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-4 max-w-md mx-auto"></div>
            <div className="h-8 bg-gray-200 rounded mb-8 max-w-lg mx-auto"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our collection of guides, reports, and insights
            </p>
            
            <SearchBar 
              placeholder="Search resources..." 
              defaultValue={searchQuery}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceFilter
            types={resourceTypes}
            selectedType={selectedType}
            onTypeChange={handleTypeFilter}
          />
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource: Resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No resources found
              </h3>
              <p className="text-gray-600">
                {searchQuery 
                  ? `No resources match "${searchQuery}"`
                  : selectedType !== 'all' 
                    ? `No ${resourceTypes.find(t => t.key === selectedType)?.label.toLowerCase()} available`
                    : 'No resources available at the moment'
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}