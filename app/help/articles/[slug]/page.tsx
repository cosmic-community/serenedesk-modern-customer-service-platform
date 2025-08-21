// app/help/articles/[slug]/page.tsx
import { getArticleBySlug, getArticles } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedContent from '@/components/RelatedContent'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  // Get related articles
  const relatedArticles = article.metadata?.related_articles || []

  const breadcrumbItems = [
    { label: 'Help Center', href: '/help' },
    { label: article.metadata?.category?.title || 'Articles', href: '/help' },
    { label: article.title, href: '' }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
          
          <article className="mt-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                {article.metadata?.author && (
                  <span>By {article.metadata.author}</span>
                )}
                {article.metadata?.last_updated && (
                  <span>Updated on {new Date(article.metadata.last_updated).toLocaleDateString()}</span>
                )}
                {article.metadata?.difficulty_level && (
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {article.metadata.difficulty_level.value}
                  </span>
                )}
              </div>

              {article.metadata?.excerpt && (
                <p className="text-lg text-gray-600 mb-6">
                  {article.metadata.excerpt}
                </p>
              )}
            </header>

            {article.metadata?.content && (
              <div className="prose max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: article.metadata.content }} />
              </div>
            )}

            {article.metadata?.tags && article.metadata.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.metadata.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {relatedArticles.length > 0 && (
            <RelatedContent articles={relatedArticles} />
          )}
        </div>
      </div>
    </div>
  )
}