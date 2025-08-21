'use client'

import { useState, useEffect } from 'react'
import { Resource } from '@/types'
import { getResources } from '@/lib/cosmic'
import ResourceCard from '@/components/ResourceCard'
import ResourceFilter from '@/components/ResourceFilter'
import SearchBar from '@/components/SearchBar'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [filteredResources, setFilteredResources] = useState<Resource[]>([])
  const [selectedType, setSelectedType] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [loading, setLoading] = useState(true)

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Resources', href: '/resources' }
  ]

  useEffect(() => {
    async function fetchResources() {
      try {
        const data = await getResources()
        setResources(data)
        setFilteredResources(data)
      } catch (error) {
        console.error('Error fetching resources:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchResources()
  }, [])

  useEffect(() => {
    let filtered = resources

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(resource => 
        resource.metadata?.resource_type?.key === selectedType
      )
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.metadata?.excerpt?.toLowerCase().includes(query) ||
        resource.metadata?.author?.toLowerCase().includes(query) ||
        resource.metadata?.tags?.some(tag => 
          tag.name.toLowerCase().includes(query)
        )
      )
    }

    setFilteredResources(filtered)
  }, [resources, selectedType, searchQuery])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleTypeFilter = (type: string) => {
    setSelectedType(type)
  }

  const resourceTypes = [
    { key: '', label: 'All Resources' },
    { key: 'blog', label: 'Blog Posts' },
    { key: 'guide', label: 'Guides' },
    { key: 'report', label: 'Reports' },
    { key: 'webinar', label: 'Webinars' },
    { key: 'video', label: 'Videos' },
    { key: 'whitepaper', label: 'Whitepapers' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading resources...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover insights, guides, and educational content to help you succeed with customer service.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <SearchBar 
                placeholder="Search resources..." 
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <ResourceFilter
            types={resourceTypes}
            selectedType={selectedType}
            onTypeChange={handleTypeFilter}
          />
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-500">
              {searchQuery || selectedType 
                ? 'Try adjusting your search or filter criteria.' 
                : 'No resources are available at this time.'
              }
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}