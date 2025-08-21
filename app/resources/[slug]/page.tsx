// app/resources/[slug]/page.tsx
import { getResourceBySlug } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'

interface ResourcePageProps {
  params: Promise<{ slug: string }>
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params
  const resource = await getResourceBySlug(slug)

  if (!resource) {
    notFound()
  }

  const breadcrumbItems = [
    { label: 'Resources', href: '/resources' },
    { label: resource.title, href: '' }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
          
          <article className="mt-8">
            {resource.metadata?.featured_image && (
              <div className="mb-8">
                <img
                  src={`${resource.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                  alt={resource.title}
                  className="rounded-lg shadow-lg w-full"
                  width="800"
                  height="400"
                />
              </div>
            )}

            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                {resource.metadata?.resource_type && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {resource.metadata.resource_type.value}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {resource.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                {resource.metadata?.author && (
                  <span>By {resource.metadata.author}</span>
                )}
                {resource.metadata?.publication_date && (
                  <span>Published on {new Date(resource.metadata.publication_date).toLocaleDateString()}</span>
                )}
              </div>

              {resource.metadata?.excerpt && (
                <p className="text-lg text-gray-600 mb-6">
                  {resource.metadata.excerpt}
                </p>
              )}
            </header>

            {resource.metadata?.content && (
              <div className="prose max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: resource.metadata.content }} />
              </div>
            )}

            {resource.metadata?.tags && resource.metadata.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {resource.metadata.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  )
}