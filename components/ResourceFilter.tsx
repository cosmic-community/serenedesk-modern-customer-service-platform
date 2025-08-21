'use client'

import { useState } from 'react'

interface ResourceFilterProps {
  onFilterChange: (filter: string) => void
  currentFilter: string
}

const filterOptions = [
  { key: 'all', label: 'All Resources' },
  { key: 'blog', label: 'Blog Posts' },
  { key: 'guide', label: 'Guides' },
  { key: 'report', label: 'Reports' },
  { key: 'webinar', label: 'Webinars' },
  { key: 'video', label: 'Videos' },
  { key: 'whitepaper', label: 'Whitepapers' }
]

export default function ResourceFilter({ onFilterChange, currentFilter }: ResourceFilterProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Filter by type:</h2>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => onFilterChange(option.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentFilter === option.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}