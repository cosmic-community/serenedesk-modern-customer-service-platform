'use client'

import { useState, useEffect } from 'react'
import SearchBar from '@/components/SearchBar'
import CategoryCard from '@/components/CategoryCard'
import FAQAccordion from '@/components/FAQAccordion'
import ArticleCard from '@/components/ArticleCard'
import { getArticles, getFAQs, getHelpCategories } from '@/lib/cosmic'
import type { Article, FAQ, HelpCategory } from '@/types'

export default function HelpPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [faqs, setFAQs] = useState<FAQ[]>([])
  const [categories, setCategories] = useState<HelpCategory[]>([])
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesData, faqsData, categoriesData] = await Promise.all([
          getArticles(),
          getFAQs(),
          getHelpCategories()
        ])
        
        setArticles(articlesData)
        setFAQs(faqsData)
        setCategories(categoriesData)
        setFilteredArticles(articlesData)
        setFilteredFAQs(faqsData)
      } catch (error) {
        console.error('Error fetching help data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    
    if (!query.trim()) {
      setFilteredArticles(articles)
      setFilteredFAQs(faqs)
      return
    }

    const searchTerm = query.toLowerCase()
    
    const filteredArts = articles.filter(article => 
      article.title?.toLowerCase().includes(searchTerm) ||
      article.metadata?.content?.toLowerCase().includes(searchTerm) ||
      article.metadata?.excerpt?.toLowerCase().includes(searchTerm)
    )
    
    const filteredFqs = faqs.filter(faq => 
      faq.title?.toLowerCase().includes(searchTerm) ||
      faq.metadata?.question?.toLowerCase().includes(searchTerm) ||
      faq.metadata?.answer?.toLowerCase().includes(searchTerm)
    )
    
    setFilteredArticles(filteredArts)
    setFilteredFAQs(filteredFqs)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
              <div className="h-12 bg-gray-300 rounded w-full mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to your questions and get the support you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar
              placeholder="Search articles, FAQs, and resources..."
              onSearch={handleSearch}
            />
          </div>
        </div>

        {/* Search Results or Categories */}
        {searchQuery ? (
          <div className="space-y-12">
            {/* Search Results */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Search Results for "{searchQuery}"
              </h2>
              
              {/* Articles Results */}
              {filteredArticles.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* FAQs Results */}
              {filteredFAQs.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQs</h3>
                  <div className="space-y-4">
                    <FAQAccordion faqs={filteredFAQs} />
                  </div>
                </div>
              )}
              
              {/* No Results */}
              {filteredArticles.length === 0 && filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No results found for "{searchQuery}". Try a different search term.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Help Categories */}
            {categories.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                  ))}
                </div>
              </div>
            )}

            {/* Featured Articles */}
            {articles.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.slice(0, 6).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}

            {/* Featured FAQs */}
            {faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto">
                  <FAQAccordion faqs={faqs.slice(0, 8)} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}