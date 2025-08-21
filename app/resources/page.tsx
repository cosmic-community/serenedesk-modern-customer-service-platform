'use client'

import { useState, useEffect } from 'react'
import ResourceCard from '@/components/ResourceCard'
import ResourceFilter from '@/components/ResourceFilter'
import SearchBar from '@/components/SearchBar'
import { getResources } from '@/lib/cosmic'
import { Resource } from '@/types'

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [filteredResources, setFilteredResources] = useState<Resource[]>([])
  const [currentFilter, setCurrentFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchResources() {
      try {
        const data = await getResources()
        setResources(data)
        setFilteredResources(data)
      } catch (err) {
        setError('Failed to load resources')
        console.error('Error fetching resources:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  useEffect(() => {
    let filtered = resources

    // Apply filter
    if (currentFilter !== 'all') {
      filtered = filtered.filter(resource => 
        resource.metadata?.resource_type?.key === currentFilter
      )
    }

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.metadata?.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.metadata?.author?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredResources(filtered)
  }, [currentFilter, searchQuery, resources])

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading resources...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of guides, reports, and insights to help you deliver exceptional customer experiences.
          </p>
        </div>

        <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
          <ResourceFilter 
            onFilterChange={handleFilterChange}
            currentFilter={currentFilter}
          />
          <div className="sm:max-w-xs">
            <SearchBar onSearch={handleSearchChange} />
          </div>
        </div>

        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              {searchQuery || currentFilter !== 'all' 
                ? 'No resources found matching your criteria.' 
                : 'No resources available at this time.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}