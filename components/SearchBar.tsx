'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export default function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    
    // Call onSearch immediately for real-time filtering
    if (onSearch) {
      onSearch(newQuery)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-base"
          placeholder={placeholder}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              if (onSearch) {
                onSearch('')
              }
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <span className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer">
              ×
            </span>
          </button>
        )}
      </div>
    </form>
  )
}