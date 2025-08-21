import { Article } from '@/types'

interface RelatedContentProps {
  articles: Article[]
}

export default function RelatedContent({ articles }: RelatedContentProps) {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Articles</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <div key={article.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <h4 className="font-medium text-gray-900 mb-2">
              <a href={`/help/articles/${article.slug}`} className="hover:text-blue-600">
                {article.title}
              </a>
            </h4>
            {article.metadata?.excerpt && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {article.metadata.excerpt}
              </p>
            )}
            {article.metadata?.article_type && (
              <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {article.metadata.article_type.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}