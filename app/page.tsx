import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CustomerTestimonials from '@/components/CustomerTestimonials'
import FeaturedResources from '@/components/FeaturedResources'
import AwardsSection from '@/components/AwardsSection'
import AIServiceSection from '@/components/AIServiceSection'
import ServiceSolutions from '@/components/ServiceSolutions'
import { 
  getFeaturedProducts, 
  getCustomerStories,
  getFeaturedResources 
} from '@/lib/cosmic'

export default async function HomePage() {
  const [products, customerStories, resources] = await Promise.all([
    getFeaturedProducts(),
    getCustomerStories(),
    getFeaturedResources()
  ])

  return (
    <div>
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