'use client'

import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Announcement } from '@/types'

interface AnnouncementBannerProps {
  announcements: Announcement[]
}

export default function AnnouncementBanner({ announcements }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!isVisible || announcements.length === 0) {
    return null
  }

  const announcement = announcements[currentIndex]
  const priority = announcement.metadata?.priority?.key

  const getBannerClass = () => {
    switch (priority) {
      case 'critical':
        return 'bg-red-600'
      case 'high':
        return 'bg-orange-600'
      case 'normal':
        return 'bg-blue-600'
      default:
        return 'bg-gray-600'
    }
  }

  return (
    <div className={`${getBannerClass()} text-white relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center">
            <div className="flex items-center space-x-3">
              {announcement.metadata?.announcement_type && (
                <span className="bg-white/20 px-2 py-1 rounded text-xs font-semibold">
                  {announcement.metadata.announcement_type.value}
                </span>
              )}
              {announcement.metadata?.message && (
                <div 
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: announcement.metadata.message }}
                />
              )}
            </div>
          </div>

          {/* Navigation for multiple announcements */}
          {announcements.length > 1 && (
            <div className="hidden sm:flex items-center space-x-2 ml-4">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 flex-shrink-0 p-1 hover:bg-white/20 rounded"
          >
            <FaTimes size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}