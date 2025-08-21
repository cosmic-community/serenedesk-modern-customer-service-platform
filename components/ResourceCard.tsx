import Link from 'next/link'
import { Resource } from '@/types'

export interface ResourceCardProps {
  resource: Resource
  showExcerpt?: boolean
}

export default function ResourceCard({ resource, showExcerpt = true }: ResourceCardProps) {
  const resourceType = resource.metadata?.resource_type
  const excerpt = resource.metadata?.excerpt
  const author = resource.metadata?.author
  const publicationDate = resource.metadata?.publication_date
  const featuredImage = resource.metadata?.featured_image
  const tags = resource.metadata?.tags

  return (
    <div className="bg-white rounded-lg border hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {featuredImage && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={`${featuredImage.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={resource.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          {resourceType && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {resourceType.value}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          <Link 
            href={`/resources/${resource.slug}`}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {resource.title}
          </Link>
        </h3>

        {showExcerpt && excerpt && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {excerpt}
          </p>
        )}

        {tags && Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
              >
                {tag.name}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-500">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            {author && (
              <span>By {author}</span>
            )}
            {publicationDate && (
              <span>{new Date(publicationDate).toLocaleDateString()}</span>
            )}
          </div>
          <Link 
            href={`/resources/${resource.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  )
}