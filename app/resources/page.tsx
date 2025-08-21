'use client'

import { useState, useEffect } from 'react'
import { Resource } from '@/types'
import ResourceCard from '@/components/ResourceCard'
import ResourceFilter from '@/components/ResourceFilter'
import SearchBar from '@/components/SearchBar'
import { getResources } from '@/lib/cosmic'

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [filteredResources, setFilteredResources] = useState<Resource[]>([])
  const [currentType, setCurrentType] = useState<string | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchResources() {
      try {
        setLoading(true)
        const data = await getResources(currentType)
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
  }, [currentType])

  useEffect(() => {
    if (!searchQuery) {
      setFilteredResources(resources)
      return
    }

    const filtered = resources.filter(resource => {
      const titleMatch = resource.title.toLowerCase().includes(searchQuery.toLowerCase())
      const excerptMatch = resource.metadata?.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      const authorMatch = resource.metadata?.author?.toLowerCase().includes(searchQuery.toLowerCase())
      const tagsMatch = resource.metadata?.tags?.some((tag: any) => 
        tag.name?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      
      return titleMatch || excerptMatch || authorMatch || tagsMatch
    })

    setFilteredResources(filtered)
  }, [searchQuery, resources])

  const handleFilterChange = (type: string | undefined) => {
    setCurrentType(type)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">Loading resources...</div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
        <p className="text-xl text-gray-600">
          Discover guides, reports, and insights to help you deliver exceptional customer experiences.
        </p>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <SearchBar 
            onSearch={handleSearchChange}
            placeholder="Search resources..."
          />
        </div>
        <ResourceFilter 
          currentType={currentType}
          onFilterChange={handleFilterChange}
        />
      </div>

      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  )
}