'use client'

import { ResourceType } from '@/types'

interface ResourceFilterProps {
  types: {
    key: ResourceType;
    label: string;
  }[];
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export default function ResourceFilter({
  types,
  selectedType,
  onTypeChange,
}: ResourceFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onTypeChange('')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          selectedType === ''
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Resources
      </button>
      {types.map((type) => (
        <button
          key={type.key}
          onClick={() => onTypeChange(type.key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            selectedType === type.key
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {type.label}
        </button>
      ))}
    </div>
  )
}