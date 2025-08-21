import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <div className={`card p-8 ${featured ? 'lg:p-12' : ''}`}>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-4">
            {product.metadata?.product_category && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.metadata.product_category.value}
              </span>
            )}
          </div>
          
          <h3 className={`font-bold text-gray-900 mb-4 ${featured ? 'text-3xl' : 'text-2xl'}`}>
            {product.metadata?.product_name || product.title}
          </h3>
          
          {product.metadata?.tagline && (
            <p className={`text-gray-600 mb-6 ${featured ? 'text-xl' : 'text-lg'}`}>
              {product.metadata.tagline}
            </p>
          )}

          {product.metadata?.description && (
            <div className="prose text-gray-700 mb-6" 
                 dangerouslySetInnerHTML={{ __html: product.metadata.description }} />
          )}

          {/* Key Features */}
          {product.metadata?.key_features && (
            <div className="mb-8">
              <div className="grid gap-4">
                {product.metadata.key_features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-green-600 text-sm">{feature.icon || '✓'}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/products/${product.slug}`} className="btn-primary text-center">
              Learn More
            </Link>
            <button className="btn-outline">
              Get Demo
            </button>
          </div>
        </div>

        {product.metadata?.hero_image && (
          <div className="order-first lg:order-last">
            <img
              src={`${product.metadata.hero_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={product.title}
              className="rounded-lg shadow-lg w-full"
              width="600"
              height="400"
            />
          </div>
        )}
      </div>
    </div>
  )
}