'use client'

interface ResourceType {
  key: string
  label: string
}

interface ResourceFilterProps {
  resourceTypes: ResourceType[]
  selectedType: string
  onTypeChange: (type: string) => void
}

export default function ResourceFilter({
  resourceTypes,
  selectedType,
  onTypeChange
}: ResourceFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {resourceTypes.map((type) => (
        <button
          key={type.key}
          onClick={() => onTypeChange(type.key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            selectedType === type.key
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {type.label}
        </button>
      ))}
    </div>
  )
}