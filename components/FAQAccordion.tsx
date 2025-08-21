'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { FAQ } from '@/types'

export interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No FAQs available at this time.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={faq.id} className="border border-gray-200 rounded-lg">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
          >
            <span className="font-medium text-gray-900">
              {faq.metadata?.question || faq.title}
            </span>
            {openIndex === index ? (
              <FaChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <FaChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-4">
              <div 
                className="text-gray-700 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: faq.metadata?.answer || 'No answer available.' 
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}