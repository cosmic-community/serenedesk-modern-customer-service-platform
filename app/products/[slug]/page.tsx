// app/products/[slug]/page.tsx
import { getProductBySlug } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PricingTable from '@/components/PricingTable'
import FeatureList from '@/components/FeatureList'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.metadata?.product_name || product.title}
          </h1>
          {product.metadata?.tagline && (
            <p className="text-xl text-gray-600 mb-8">
              {product.metadata.tagline}
            </p>
          )}
          {product.metadata?.hero_image && (
            <div className="mb-8">
              <img
                src={`${product.metadata.hero_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                alt={product.title}
                className="rounded-lg shadow-lg mx-auto max-w-4xl w-full"
                width="800"
                height="400"
              />
            </div>
          )}
        </div>

        {/* Description */}
        {product.metadata?.description && (
          <div className="prose max-w-4xl mx-auto mb-16">
            <div dangerouslySetInnerHTML={{ __html: product.metadata.description }} />
          </div>
        )}

        {/* Features */}
        {product.metadata?.key_features && (
          <FeatureList features={product.metadata.key_features} />
        )}

        {/* Pricing */}
        {product.metadata?.pricing_tiers && (
          <PricingTable tiers={product.metadata.pricing_tiers} />
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6">
              See how {product.metadata?.product_name || product.title} can transform your customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}