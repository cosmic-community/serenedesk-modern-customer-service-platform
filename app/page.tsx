import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CustomerTestimonials from '@/components/CustomerTestimonials'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import FeaturedResources from '@/components/FeaturedResources'
import AwardsSection from '@/components/AwardsSection'
import AIServiceSection from '@/components/AIServiceSection'
import ServiceSolutions from '@/components/ServiceSolutions'
import { 
  getFeaturedProducts, 
  getCustomerStories,
  getHomepageAnnouncements,
  getFeaturedResources 
} from '@/lib/cosmic'

export default async function HomePage() {
  const [products, customerStories, announcements, resources] = await Promise.all([
    getFeaturedProducts(),
    getCustomerStories(),
    getHomepageAnnouncements(),
    getFeaturedResources()
  ])

  return (
    <div>
      {announcements.length > 0 && (
        <AnnouncementBanner announcements={announcements} />
      )}
      <Hero />
      <AwardsSection />
      <AIServiceSection />
      <ServiceSolutions />
      <FeaturedProducts products={products} />
      {customerStories.length > 0 && (
        <CustomerTestimonials stories={customerStories} />
      )}
      {resources.length > 0 && (
        <FeaturedResources resources={resources} />
      )}
    </div>
  )
}