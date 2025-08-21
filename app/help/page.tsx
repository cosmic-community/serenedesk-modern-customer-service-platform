import { Suspense } from 'react'
import SearchBar from '@/components/SearchBar'
import CategoryCard from '@/components/CategoryCard'
import ArticleCard from '@/components/ArticleCard'
import FAQAccordion from '@/components/FAQAccordion'
import { getHelpCategories, getArticles, getFAQs } from '@/lib/cosmic'
import { HelpCategory, Article, FAQ } from '@/types'

export default async function HelpPage() {
  const [categories, articles, faqs] = await Promise.all([
    getHelpCategories(),
    getArticles(),
    getFAQs()
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions and get the help you need
            </p>
            
            <Suspense fallback={<div className="h-12 bg-gray-200 rounded-lg animate-pulse max-w-md mx-auto"></div>}>
              <SearchBar 
                placeholder="Search for articles and FAQs..." 
                onSearch={() => {}} 
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          
          {categories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {categories.map((category: HelpCategory) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No help categories available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Articles
          </h2>
          
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {articles.slice(0, 6).map((article: Article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          {faqs.length > 0 ? (
            <FAQAccordion faqs={faqs.slice(0, 10)} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No FAQs available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}