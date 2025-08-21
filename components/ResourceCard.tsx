import Link from 'next/link'
import { Resource } from '@/types'

interface ResourceCardProps {
  resource: Resource
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Link href={`/resources/${resource.slug}`} className="card p-0 hover:shadow-lg transition-shadow duration-200">
      {resource.metadata?.featured_image && (
        <div className="aspect-video w-full">
          <img
            src={`${resource.metadata.featured_image.imgix_url}?w=400&h=225&fit=crop&auto=format,compress`}
            alt={resource.title}
            className="w-full h-full object-cover rounded-t-xl"
            width="400"
            height="225"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {resource.metadata?.resource_type && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              {resource.metadata.resource_type.value}
            </span>
          )}
          {resource.metadata?.publication_date && (
            <span className="text-gray-500 text-sm">
              {new Date(resource.metadata.publication_date).toLocaleDateString()}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {resource.title}
        </h3>
        
        {resource.metadata?.excerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {resource.metadata.excerpt}
          </p>
        )}
        
        {resource.metadata?.author && (
          <p className="text-gray-500 text-sm">
            By {resource.metadata.author}
          </p>
        )}
        
        {resource.metadata?.tags && resource.metadata.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {resource.metadata.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}