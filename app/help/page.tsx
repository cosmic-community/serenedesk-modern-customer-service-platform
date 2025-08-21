import { Suspense } from 'react'
import SearchBar from '@/components/SearchBar'
import CategoryCard from '@/components/CategoryCard'
import ArticleCard from '@/components/ArticleCard'
import FAQAccordion from '@/components/FAQAccordion'
import { getHelpCategories, getArticles, getFAQs } from '@/lib/cosmic'

export default async function HelpPage() {
  const [categories, articles, faqs] = await Promise.all([
    getHelpCategories(),
    getArticles(),
    getFAQs()
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Search our knowledge base or browse categories below
          </p>
          
          {/* Search Bar - now a client component that handles its own state */}
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Categories */}
            {categories.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Browse by Category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                  ))}
                </div>
              </section>
            )}

            {/* Featured Articles */}
            {articles.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Featured Articles
                </h2>
                <div className="space-y-6">
                  {articles.slice(0, 6).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Popular FAQs */}
            {faqs.length > 0 && (
              <section className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Popular Questions
                </h3>
                <div className="space-y-4">
                  {faqs.slice(0, 5).map((faq) => (
                    <div key={faq.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <FAQAccordion faq={faq} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}