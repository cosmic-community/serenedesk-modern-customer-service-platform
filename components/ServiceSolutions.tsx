export default function ServiceSolutions() {
  const solutions = [
    {
      title: "Meet SereneDesk agents",
      description: "A fully connected team of AI and human agents, built for true resolutions. Whether AI handles it instantly or copilot assists a human, every issue is resolved.",
      icon: "🤝",
      color: "from-green-600 to-green-700",
      buttonText: "Explore AI Agents",
      mockup: {
        type: "chat",
        content: "Your order is currently in transit..."
      }
    },
    {
      title: "Omnichannel resolutions including Voice",
      description: "SereneDesk Voice delivers seamless resolutions in any contact center. With advanced call routing, intelligent IVR, automation, and AI, every call is resolved faster and better.",
      icon: "📞",
      color: "from-green-600 to-green-700",
      buttonText: "Explore Voice",
      mockup: {
        type: "voice",
        content: "Customer call interface..."
      }
    },
    {
      title: "Resolutions for your workforce",
      description: "Deliver AI-powered service across every department with an easy-to-use solution. Resolve common requests instantly, automate workflows, and keep every employee productive.",
      icon: "👥",
      color: "from-green-600 to-green-700",
      buttonText: "Explore SereneDesk for employee service",
      mockup: {
        type: "workflow",
        content: "IT helpdesk interface..."
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">{solution.icon}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">{solution.title}</h3>
                    <p className="text-xl text-green-100 leading-relaxed">
                      {solution.description}
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-colors underline">
                      {solution.buttonText}
                    </button>
                  </div>

                  {/* Mockup */}
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        {solution.mockup.type === 'chat' && (
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">AI</span>
                              </div>
                              <div className="bg-gray-100 rounded-lg px-4 py-2 flex-1">
                                <p className="text-gray-800 text-sm">{solution.mockup.content}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-gray-600 text-sm">AI is typing...</span>
                            </div>
                          </div>
                        )}

                        {solution.mockup.type === 'voice' && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                <div>
                                  <div className="font-medium text-gray-900">Customer</div>
                                  <div className="text-sm text-gray-500">+1 (555) 123-4567</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-600">00:02:34</span>
                              </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Quick answer</span>
                                <div className="flex-1 h-8 bg-gray-200 rounded animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                        )}

                        {solution.mockup.type === 'workflow' && (
                          <div className="space-y-4">
                            <div className="border-b border-gray-200 pb-3">
                              <h4 className="font-medium text-gray-900">IT Helpdesk</h4>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Quick answer</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Password reset</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Software request</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Mockup */}
                  <div className="relative lg:order-first">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        {solution.mockup.type === 'voice' && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                <div>
                                  <div className="font-medium text-gray-900">Customer</div>
                                  <div className="text-sm text-gray-500">+1 (555) 123-4567</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-600">00:02:34</span>
                              </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Quick answer</span>
                                <div className="flex-1 h-8 bg-gray-200 rounded animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                        )}

                        {solution.mockup.type === 'workflow' && (
                          <div className="space-y-4">
                            <div className="border-b border-gray-200 pb-3">
                              <h4 className="font-medium text-gray-900">IT Helpdesk</h4>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Quick answer</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Password reset</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Software request</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">{solution.icon}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">{solution.title}</h3>
                    <p className="text-xl text-green-100 leading-relaxed">
                      {solution.description}
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-colors underline">
                      {solution.buttonText}
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}