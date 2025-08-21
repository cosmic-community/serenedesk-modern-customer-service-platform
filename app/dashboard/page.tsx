import { Suspense } from 'react'
import Link from 'next/link'
import { 
  getProducts, 
  getSolutions, 
  getResources, 
  getArticles, 
  getFAQs,
  getAnnouncements 
} from '@/lib/cosmic'
import { FaChartBar, FaUsers, FaTicketAlt, FaBell, FaBook, FaQuestion, FaRocket, FaBuilding } from 'react-icons/fa'

interface DashboardStats {
  products: number
  solutions: number
  resources: number
  articles: number
  faqs: number
  announcements: number
}

async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const [products, solutions, resources, articles, faqs, announcements] = await Promise.all([
      getProducts(),
      getSolutions(),
      getResources(),
      getArticles(),
      getFAQs(),
      getAnnouncements()
    ])

    return {
      products: products.length,
      solutions: solutions.length,
      resources: resources.length,
      articles: articles.length,
      faqs: faqs.length,
      announcements: announcements.length
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      products: 0,
      solutions: 0,
      resources: 0,
      articles: 0,
      faqs: 0,
      announcements: 0
    }
  }
}

function LoadingCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
        <div className="ml-4 flex-1">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  count: number
  icon: React.ReactNode
  href: string
  description: string
  color: string
}

function StatCard({ title, count, icon, href, description, color }: StatCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center">
          <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
            {icon}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-zendesk-green transition-colors">
              {title}
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-1">{count}</p>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

interface DashboardContentProps {
  stats: DashboardStats
}

function DashboardContent({ stats }: DashboardContentProps) {
  const statCards = [
    {
      title: 'Products',
      count: stats.products,
      icon: <FaRocket size={24} />,
      href: '/products',
      description: 'Customer service solutions',
      color: 'bg-blue-500'
    },
    {
      title: 'Solutions',
      count: stats.solutions,
      icon: <FaBuilding size={24} />,
      href: '/solutions',
      description: 'Industry & business solutions',
      color: 'bg-purple-500'
    },
    {
      title: 'Resources',
      count: stats.resources,
      icon: <FaBook size={24} />,
      href: '/resources',
      description: 'Guides, reports & content',
      color: 'bg-green-500'
    },
    {
      title: 'Help Articles',
      count: stats.articles,
      icon: <FaTicketAlt size={24} />,
      href: '/help',
      description: 'Knowledge base articles',
      color: 'bg-orange-500'
    },
    {
      title: 'FAQs',
      count: stats.faqs,
      icon: <FaQuestion size={24} />,
      href: '/help',
      description: 'Frequently asked questions',
      color: 'bg-indigo-500'
    },
    {
      title: 'Announcements',
      count: stats.announcements,
      icon: <FaBell size={24} />,
      href: '/',
      description: 'Latest updates & news',
      color: 'bg-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">
            Welcome to SereneDesk - your customer service platform overview
          </p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/try-free"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
            >
              Try for Free
            </Link>
            <Link
              href="/demo"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
            >
              View Demo
            </Link>
            <Link
              href="/help"
              className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors text-center"
            >
              Browse Help
            </Link>
            <Link
              href="/resources"
              className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors text-center"
            >
              View Resources
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              count={card.count}
              icon={card.icon}
              href={card.href}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <FaChartBar className="text-blue-500 mr-3" />
                <span className="text-gray-900">Total Content Items</span>
              </div>
              <span className="font-semibold text-gray-900">
                {stats.products + stats.solutions + stats.resources + stats.articles + stats.faqs}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <FaUsers className="text-green-500 mr-3" />
                <span className="text-gray-900">Customer Solutions</span>
              </div>
              <span className="font-semibold text-gray-900">
                {stats.products + stats.solutions}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <FaBook className="text-purple-500 mr-3" />
                <span className="text-gray-900">Knowledge Base Items</span>
              </div>
              <span className="font-semibold text-gray-900">
                {stats.articles + stats.faqs}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function DashboardPage() {
  const stats = await getDashboardStats()

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        </div>
      </div>
    }>
      <DashboardContent stats={stats} />
    </Suspense>
  )
}