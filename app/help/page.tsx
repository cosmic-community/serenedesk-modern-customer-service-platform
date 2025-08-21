import { Suspense } from 'react'
import SearchBar from '@/components/SearchBar'
import CategoryCard from '@/components/CategoryCard'
import FAQAccordion from '@/components/FAQAccordion'
import ArticleCard from '@/components/ArticleCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { 
  getHelpCategories, 
  getFAQs, 
  getArticles 
} from '@/lib/cosmic'

export default async function HelpPage() {
  const [categories, faqs, articles] = await Promise.all([
    getHelpCategories(),
    getFAQs(),
    getArticles()
  ])

  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log('Search query:', query)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Help Center', href: '/help' }
          ]} 
        />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Search our knowledge base or browse categories below
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {/* Help Categories */}
        {categories.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>
        )}

        {/* Popular FAQs */}
        {faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Questions</h2>
            <div className="bg-white rounded-lg shadow-sm">
              <FAQAccordion faqs={faqs.slice(0, 5)} />
            </div>
          </section>
        )}

        {/* Recent Articles */}
        {articles.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(0, 6).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}