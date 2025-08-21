import { getArticles, getFAQs, getHelpCategories } from '@/lib/cosmic'
import SearchBar from '@/components/SearchBar'
import ArticleCard from '@/components/ArticleCard'
import FAQAccordion from '@/components/FAQAccordion'
import CategoryCard from '@/components/CategoryCard'

export default async function HelpPage() {
  const [articles, faqs, categories] = await Promise.all([
    getArticles(),
    getFAQs(),
    getHelpCategories()
  ])

  const featuredArticles = articles.filter(article => article.metadata?.featured)
  const featuredFAQs = faqs.filter(faq => faq.metadata?.featured)

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers, guides, and resources to get the most out of SereneDesk.
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        )}

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 6).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* Featured FAQs */}
        {featuredFAQs.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={featuredFAQs} />
          </div>
        )}
      </div>
    </div>
  )
}