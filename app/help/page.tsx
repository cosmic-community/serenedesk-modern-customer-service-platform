import { Suspense } from 'react'
import SearchBar from '@/components/SearchBar'
import CategoryCard from '@/components/CategoryCard'
import ArticleCard from '@/components/ArticleCard'
import FAQAccordion from '@/components/FAQAccordion'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getArticles, getFAQs, getHelpCategories } from '@/lib/cosmic'
import { Article, FAQ, HelpCategory } from '@/types'

interface BreadcrumbItem {
  label: string
  href: string
}

export default async function HelpPage() {
  const [articles, faqs, categories] = await Promise.all([
    getArticles(),
    getFAQs(), 
    getHelpCategories()
  ])

  const featuredArticles = articles.filter((article: Article) => article.metadata?.featured)
  const featuredFAQs = faqs.filter((faq: FAQ) => faq.metadata?.featured)

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Help Center', href: '/help' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to your questions and get the help you need
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar placeholder="Search for help articles, guides, and FAQs..." />
          </div>
        </div>

        {/* Help Categories */}
        {categories.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category: HelpCategory) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Featured Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Articles</h2>
            <div className="space-y-6">
              {featuredArticles.length > 0 ? (
                featuredArticles.slice(0, 5).map((article: Article) => (
                  <ArticleCard 
                    key={article.id} 
                    article={article}
                    showExcerpt={true}
                  />
                ))
              ) : (
                <p className="text-gray-600">No featured articles available.</p>
              )}
            </div>
            {articles.length > 5 && (
              <div className="mt-8">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View all articles →
                </button>
              </div>
            )}
          </section>

          {/* Featured FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            {featuredFAQs.length > 0 ? (
              <FAQAccordion faqs={featuredFAQs.slice(0, 5)} />
            ) : (
              <p className="text-gray-600">No featured FAQs available.</p>
            )}
            {faqs.length > 5 && (
              <div className="mt-8">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View all FAQs →
                </button>
              </div>
            )}
          </section>
        </div>

        {/* Contact Support */}
        <section className="mt-16 bg-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get the most out of our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contact Support
            </button>
            <button className="btn-secondary">
              Community Forum
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}