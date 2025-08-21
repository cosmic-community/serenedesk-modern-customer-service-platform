'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaGoogle, FaMicrosoft, FaEye, FaEyeSlash, FaCheck } from 'react-icons/fa'

export default function TryFreePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    phone: '',
    agentCount: '1-10'
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) return
    
    setIsLoading(true)
    
    // Simulate account creation - replace with actual signup logic
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to onboarding or dashboard
      window.location.href = '/dashboard'
    }, 2000)
  }

  const handleSocialSignup = (provider: string) => {
    // Implement social sign-up logic
    console.log(`Sign up with ${provider}`)
  }

  const benefits = [
    'Full access to all features for 14 days',
    'No credit card required',
    'Set up in under 5 minutes',
    'Cancel anytime during trial',
    'Expert support included'
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 flex-col justify-center px-12">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-white mb-6">
            Start your free trial today
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies delivering exceptional customer service with SereneDesk.
          </p>
          
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-white">
                <FaCheck className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=400&h=400&fit=crop&auto=format,compress" 
                alt="Customer testimonial" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="text-white font-semibold">Sarah Chen</div>
                <div className="text-blue-200 text-sm">Head of Support, TechCorp</div>
              </div>
            </div>
            <p className="text-blue-100 italic">
              "SereneDesk transformed our customer support. Setup was incredibly easy and our team was productive from day one."
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="lg:hidden flex justify-center mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
          </div>
          
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Start your 14-day free trial
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/signin" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-sm border border-gray-200 sm:rounded-lg sm:px-10">
            {/* Social Sign Up Options */}
            <div className="space-y-3">
              <button
                onClick={() => handleSocialSignup('google')}
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaGoogle className="w-5 h-5 text-red-500 mr-3" />
                Sign up with Google
              </button>
              
              <button
                onClick={() => handleSocialSignup('microsoft')}
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaMicrosoft className="w-5 h-5 text-blue-500 mr-3" />
                Sign up with Microsoft
              </button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
                </div>
              </div>
            </div>

            {/* Sign Up Form */}
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label htmlFor="agentCount" className="block text-sm font-medium text-gray-700">
                  How many agents do you need?
                </label>
                <select
                  id="agentCount"
                  name="agentCount"
                  value={formData.agentCount}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="1-10">1-10 agents</option>
                  <option value="11-25">11-25 agents</option>
                  <option value="26-50">26-50 agents</option>
                  <option value="51-100">51-100 agents</option>
                  <option value="100+">100+ agents</option>
                </select>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-4 w-4 text-gray-400" />
                    ) : (
                      <FaEye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Must be at least 8 characters with a mix of letters and numbers
                </p>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading || !agreedToTerms}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Setting up your account...
                    </div>
                  ) : (
                    'Start free trial'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-xs text-gray-500">
              By signing up, you agree to receive product updates and marketing communications from SereneDesk.
              <br />
              You can unsubscribe at any time.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}