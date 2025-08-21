import { Article } from '@/types'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          <a href={`/help/articles/${article.slug}`} className="hover:text-blue-600">
            {article.title}
          </a>
        </h3>
        {article.metadata?.article_type && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {article.metadata.article_type.value}
          </span>
        )}
      </div>
      
      {article.metadata?.excerpt && (
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.metadata.excerpt}
        </p>
      )}
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          {article.metadata?.author && (
            <span>By {article.metadata.author}</span>
          )}
          {article.metadata?.difficulty_level && (
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
              {article.metadata.difficulty_level.value}
            </span>
          )}
        </div>
        {article.metadata?.last_updated && (
          <span>Updated {new Date(article.metadata.last_updated).toLocaleDateString()}</span>
        )}
      </div>
    </div>
  )
}