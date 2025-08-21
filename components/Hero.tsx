'use client'

import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
  }

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Deliver beautifully simple service with{' '}
            <span className="text-green-600">SereneDesk AI Agents</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Powering over 10,000 AI customers and counting
          </p>

          {/* Email signup form */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Try for free
              </button>
            </form>
          </div>

          {/* Demo image/video placeholder */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
              {/* Mock interface - similar to SereneDesk's demo */}
              <div className="bg-white border-b border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600">Customer Service Platform</div>
                </div>
              </div>
              
              {/* Mock interface content */}
              <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100" style={{ minHeight: '400px' }}>
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left sidebar */}
                  <div className="bg-zendesk-green rounded-lg p-4 text-white">
                    <div className="mb-4">
                      <div className="w-8 h-8 bg-white rounded mb-2 flex items-center justify-center">
                        <span className="text-zendesk-green font-bold">🏠</span>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-white/20 rounded p-2 text-sm">📧</div>
                        <div className="bg-white/20 rounded p-2 text-sm">📊</div>
                        <div className="bg-white/20 rounded p-2 text-sm">⚡</div>
                        <div className="bg-white/20 rounded p-2 text-sm">⚙️</div>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm">FA</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Fran Anderson</div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-2">VIP</span>
                            Order #44433
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-gray-700">
                            I'd like to return my order #44433.
                          </p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">🤖</span>
                            </div>
                            <span className="text-sm font-medium">AI agent</span>
                          </div>
                          <p className="text-sm text-gray-700">
                            Hey Fran, which items would you like to return?
                          </p>
                          
                          <div className="grid grid-cols-3 gap-2 mt-3">
                            <div className="bg-white rounded p-2 text-center">
                              <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                              <div className="text-xs">Snail Mucin Serum</div>
                              <button className="text-xs bg-gray-200 px-2 py-1 rounded mt-1">Select</button>
                            </div>
                            <div className="bg-white rounded p-2 text-center">
                              <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                              <div className="text-xs">Saddle Tan Wallet</div>
                              <button className="text-xs bg-gray-900 text-white px-2 py-1 rounded mt-1">Select</button>
                            </div>
                            <div className="bg-white rounded p-2 text-center">
                              <div className="w-full h-16 bg-gray-200 rounded mb-2"></div>
                              <div className="text-xs">French Soap Set</div>
                              <button className="text-xs bg-gray-200 px-2 py-1 rounded mt-1">Select</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right panel - AI insights */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-sm font-medium">🧠</span>
                        <span className="text-sm font-medium">AI agent chain of thought</span>
                      </div>
                      <div className="space-y-2 text-xs text-gray-600">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>Search knowledge</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>Retrieve order details</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>Verify order is eligible for return</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>Verify item selection for return</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-96 h-96 bg-green-100 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
      </div>
    </section>
  )
}