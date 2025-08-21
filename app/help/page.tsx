import { getFAQs, getArticles, getHelpCategories } from '@/lib/cosmic'
import { FAQ, Article, HelpCategory } from '@/types'
import SearchBar from '@/components/SearchBar'
import CategoryCard from '@/components/CategoryCard'
import ArticleCard from '@/components/ArticleCard'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'

export default async function HelpPage() {
  const [faqs, articles, categories] = await Promise.all([
    getFAQs(),
    getArticles(), 
    getHelpCategories()
  ])

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' }
  ]

  const featuredArticles = articles.filter(article => article.metadata?.featured).slice(0, 6)
  const featuredFAQs = faqs.filter(faq => faq.metadata?.featured).slice(0, 8)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Search our knowledge base or browse categories to find answers to your questions.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <SearchBar placeholder="Search for articles, guides, or FAQs..." />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600">
            Find help organized by topic areas
          </p>
        </div>

        {categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No categories available at this time.</p>
          </div>
        )}
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-lg text-gray-600">
                Popular guides and tutorials to get you started
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {featuredFAQs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={featuredFAQs} />
          </div>
        </div>
      )}
    </div>
  )
}