'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for help articles, guides, and more..."
          className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
    </form>
  )
}