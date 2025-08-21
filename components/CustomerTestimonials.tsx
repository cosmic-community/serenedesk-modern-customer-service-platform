'use client'

import { useState } from 'react'
import { CustomerStory } from '@/types'

interface CustomerTestimonialsProps {
  stories: CustomerStory[]
}

export default function CustomerTestimonials({ stories }: CustomerTestimonialsProps) {
  const [currentStory, setCurrentStory] = useState(0)

  if (stories.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by leading companies worldwide
          </h2>
          <p className="text-xl text-gray-600">
            See how businesses transform their customer service with SereneDesk
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`${index === currentStory ? 'block' : 'hidden'}`}
            >
              <div className="text-center">
                {story.metadata?.company_logo && (
                  <div className="mb-8">
                    <img
                      src={`${story.metadata.company_logo.imgix_url}?w=200&h=100&fit=contain&auto=format,compress`}
                      alt={`${story.metadata?.company_name} logo`}
                      className="h-16 mx-auto"
                      width="200"
                      height="100"
                    />
                  </div>
                )}

                {story.metadata?.testimonial_quote && (
                  <blockquote className="text-2xl font-medium text-gray-900 mb-8">
                    "{story.metadata.testimonial_quote}"
                  </blockquote>
                )}

                <div className="mb-8">
                  {story.metadata?.spokesperson_name && (
                    <div className="font-semibold text-gray-900">
                      {story.metadata.spokesperson_name}
                    </div>
                  )}
                  {story.metadata?.spokesperson_title && story.metadata?.company_name && (
                    <div className="text-gray-600">
                      {story.metadata.spokesperson_title}, {story.metadata.company_name}
                    </div>
                  )}
                </div>

                {/* Key Results */}
                {story.metadata?.key_results && story.metadata.key_results.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {story.metadata.key_results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {result.improvement}
                        </div>
                        <div className="text-lg font-semibold text-gray-900 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Navigation dots */}
          {stories.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentStory ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}