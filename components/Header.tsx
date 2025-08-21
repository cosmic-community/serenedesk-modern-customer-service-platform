'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes, FaStar, FaTachometerAlt } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-zendesk-green rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">zendesk</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <FaTachometerAlt className="text-blue-500 text-sm" />
              <Link href="/dashboard" className="text-gray-700 hover:text-zendesk-green transition-colors font-medium">
                Dashboard
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <FaStar className="text-green-500 text-sm" />
              <Link href="/products" className="text-gray-700 hover:text-zendesk-green transition-colors font-medium">
                Zendesk AI Agents
              </Link>
            </div>
            <Link href="/products" className="text-gray-700 hover:text-zendesk-green transition-colors">
              Products
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-zendesk-green transition-colors">
              Solutions
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-zendesk-green transition-colors">
              Resources
            </Link>
            <Link href="/help" className="text-gray-700 hover:text-zendesk-green transition-colors">
              Help
            </Link>
          </nav>

          {/* Right side navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/signin" className="text-gray-700 hover:text-zendesk-green transition-colors">
              Sign in
            </Link>
            <Link href="#" className="text-gray-700 hover:text-zendesk-green transition-colors">
              Zendesk Help center
            </Link>
            <Link href="#" className="text-gray-700 hover:text-zendesk-green transition-colors">
              Company
            </Link>
            <Link href="#" className="text-gray-700 hover:text-zendesk-green transition-colors">
              Contact us
            </Link>
            <select className="text-gray-700 border-none bg-transparent cursor-pointer">
              <option>Language</option>
            </select>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-6">
            <Link 
              href="/try-free" 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Try for free
            </Link>
            <Link 
              href="/demo" 
              className="border border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              View demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-zendesk-green hover:bg-gray-100"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1">
                <FaTachometerAlt className="text-blue-500 text-sm" />
                <Link 
                  href="/dashboard" 
                  className="text-gray-700 hover:text-zendesk-green transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </div>
              <div className="flex items-center space-x-1">
                <FaStar className="text-green-500 text-sm" />
                <Link 
                  href="/products" 
                  className="text-gray-700 hover:text-zendesk-green transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Zendesk AI Agents
                </Link>
              </div>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-zendesk-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/solutions" 
                className="text-gray-700 hover:text-zendesk-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="/resources" 
                className="text-gray-700 hover:text-zendesk-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/help" 
                className="text-gray-700 hover:text-zendesk-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
              <hr className="border-gray-200" />
              <Link 
                href="/signin" 
                className="text-gray-700 hover:text-zendesk-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link 
                href="/try-free" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Try for free
              </Link>
              <Link 
                href="/demo" 
                className="border border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                View demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}