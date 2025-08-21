import Link from 'next/link'
import { Article } from '@/types'

export interface ArticleCardProps {
  article: Article
  showExcerpt?: boolean
}

export default function ArticleCard({ article, showExcerpt = true }: ArticleCardProps) {
  const category = article.metadata?.category
  const excerpt = article.metadata?.excerpt
  const author = article.metadata?.author
  const lastUpdated = article.metadata?.last_updated
  const articleType = article.metadata?.article_type
  const difficultyLevel = article.metadata?.difficulty_level

  return (
    <div className="bg-white rounded-lg border hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              {category && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {category.metadata?.category_name || category.title}
                </span>
              )}
              {articleType && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {articleType.value}
                </span>
              )}
              {difficultyLevel && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {difficultyLevel.value}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              <Link 
                href={`/help/articles/${article.slug}`}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {article.title}
              </Link>
            </h3>
            {showExcerpt && excerpt && (
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {excerpt}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            {author && (
              <span>By {author}</span>
            )}
            {lastUpdated && (
              <span>Updated {new Date(lastUpdated).toLocaleDateString()}</span>
            )}
          </div>
          <Link 
            href={`/help/articles/${article.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  )
}