'use client'

import { useState } from 'react'

export interface ResourceFilterProps {
  currentType?: string
  onFilterChange: (type: string) => void
}

export default function ResourceFilter({ currentType, onFilterChange }: ResourceFilterProps) {
  const resourceTypes = [
    { key: 'all', value: 'All Resources' },
    { key: 'blog', value: 'Blog Post' },
    { key: 'guide', value: 'Guide' },
    { key: 'report', value: 'Report' },
    { key: 'webinar', value: 'Webinar' },
    { key: 'video', value: 'Video' },
    { key: 'whitepaper', value: 'Whitepaper' }
  ]

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {resourceTypes.map((type) => (
        <button
          key={type.key}
          onClick={() => onFilterChange(type.key)}
          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
            (currentType === type.key || (!currentType && type.key === 'all'))
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {type.value}
        </button>
      ))}
    </div>
  )
}