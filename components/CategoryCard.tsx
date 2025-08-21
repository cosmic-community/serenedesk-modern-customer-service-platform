import { HelpCategory } from '@/types'

interface CategoryCardProps {
  category: HelpCategory
  articleCount?: number
}

export default function CategoryCard({ category, articleCount }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        {category.metadata?.icon && (
          <div className="flex-shrink-0">
            <img 
              src={`${category.metadata.icon.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
              alt={category.metadata.category_name || category.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            <a href={`/help?category=${category.id}`} className="hover:text-blue-600">
              {category.metadata?.category_name || category.title}
            </a>
          </h3>
          {category.metadata?.description && (
            <p className="text-gray-600 mb-3 line-clamp-2">
              {category.metadata.description}
            </p>
          )}
          <div className="flex items-center text-sm text-gray-500">
            {articleCount !== undefined && (
              <span>{articleCount} article{articleCount !== 1 ? 's' : ''}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}