'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { FAQ } from '@/types'

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No FAQs available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="bg-white rounded-lg border border-gray-200">
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          >
            <span className="font-medium text-gray-900">
              {faq.metadata?.question || faq.title}
            </span>
            {openItems.includes(faq.id) ? (
              <FaChevronUp className="text-gray-400" />
            ) : (
              <FaChevronDown className="text-gray-400" />
            )}
          </button>
          
          {openItems.includes(faq.id) && (
            <div className="px-6 pb-4">
              {faq.metadata?.answer && (
                <div 
                  className="prose prose-sm max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: faq.metadata.answer }}
                />
              )}
              
              {faq.metadata?.tags && faq.metadata.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {faq.metadata.tags.map((tag: any, index: number) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}