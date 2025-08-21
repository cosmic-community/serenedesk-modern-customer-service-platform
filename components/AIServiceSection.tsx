export default function AIServiceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The #1 AI service solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bring together customer conversations from all channels, giving agents the context they need. 
            Access dashboards and data easily for better service quality. Start resolving requests 
            instantly with Zendesk AI for any use case.
          </p>
        </div>

        {/* Main demo visualization */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            {/* Mock browser bar */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600">Customer Service Dashboard</div>
              </div>
            </div>

            {/* Customer profile section */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&auto=format,compress&fit=crop&crop=face"
                      alt="Julie Anderson" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Julie Anderson</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          MEMBERSHIP (4 years)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Address</div>
                    <div className="h-2 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="text-sm text-gray-500 mb-1">Contact</div>
                    <div className="h-2 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="flex items-center text-sm text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Upgrade available
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                  <p className="text-blue-800 italic">
                    "I'd like to upgrade my yoga club membership."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Agents</h3>
            <p className="text-gray-600">
              Intelligent agents that understand context and provide instant, accurate responses to customer inquiries.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Unified Dashboard</h3>
            <p className="text-gray-600">
              All customer data and interactions in one place, giving agents complete context for every conversation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Resolution</h3>
            <p className="text-gray-600">
              Resolve customer requests instantly with AI automation and smart routing capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}