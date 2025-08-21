import { Product } from '@/types'
import ProductCard from './ProductCard'

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The #1 AI service solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by startups to enterprises to deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      </div>
    </section>
  )
}