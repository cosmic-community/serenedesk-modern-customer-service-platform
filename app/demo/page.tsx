'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaPlay, FaCheck, FaArrowRight, FaClock, FaUsers, FaStar } from 'react-icons/fa'

export default function DemoPage() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false)

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setIsCalendlyLoaded(true)
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  const features = [
    'AI-powered ticket routing and automation',
    'Omnichannel support (email, chat, phone, social)',
    'Real-time analytics and reporting dashboard',
    'Customer satisfaction surveys and feedback',
    'Knowledge base and self-service portal',
    'Team collaboration and internal notes'
  ]

  const stats = [
    { label: 'Average demo length', value: '30 minutes', icon: FaClock },
    { label: 'Companies trust SereneDesk', value: '10,000+', icon: FaUsers },
    { label: 'Customer satisfaction', value: '4.9/5 stars', icon: FaStar }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See SereneDesk in Action
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book a personalized demo and discover how SereneDesk can transform your customer service operations. 
              Our experts will show you exactly how our platform works for businesses like yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#book-demo"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 flex items-center"
              >
                Book Your Demo
                <FaArrowRight className="ml-2" />
              </a>
              
              <button className="text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center">
                <FaPlay className="mr-2" />
                Watch Product Tour
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-200" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What You'll See Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll See in Your Demo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our product specialists will walk you through SereneDesk's key features 
              and show you how they apply to your specific use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <FaCheck className="w-5 h-5 text-green-500 mt-1" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Booking Section */}
      <div id="book-demo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Book Your Personalized Demo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a time that works for you. Our team will prepare a customized demo 
              based on your industry and company size.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            {isCalendlyLoaded ? (
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/jeff-cosmicjs/30min"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            ) : (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4 mx-auto"></div>
                  <p className="text-gray-600">Loading calendar...</p>
                </div>
              </div>
            )}
          </div>

          {/* Alternative CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Prefer to try it yourself first?
            </p>
            <Link 
              href="/try-free"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
            >
              Start Free Trial Instead
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Demo FAQ
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long is the demo?
              </h3>
              <p className="text-gray-600">
                Our demos typically last 30 minutes, but we can adjust the length based on your needs and questions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What should I prepare for the demo?
              </h3>
              <p className="text-gray-600">
                Come with your current challenges and questions about customer service. We'll tailor the demo to show 
                how SereneDesk can solve your specific problems.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I bring my team?
              </h3>
              <p className="text-gray-600">
                Absolutely! We encourage including key stakeholders who will be involved in the decision-making process.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens after the demo?
              </h3>
              <p className="text-gray-600">
                We'll provide you with a customized proposal based on your needs, along with next steps to get started 
                if you decide SereneDesk is right for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}