'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              SereneDesk
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2"
                onClick={() => handleDropdown('products')}
              >
                Products <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1">
                  <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    All Products
                  </Link>
                  <Link href="/products/zendesk-ai-agents" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    AI Agents
                  </Link>
                  <Link href="/products/zendesk-support" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Support Platform
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2"
                onClick={() => handleDropdown('solutions')}
              >
                Solutions <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1">
                  <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    All Solutions
                  </Link>
                  <Link href="/solutions#industry" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    By Industry
                  </Link>
                  <Link href="/solutions#business" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    By Business Size
                  </Link>
                </div>
              )}
            </div>

            <Link href="/resources" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Resources
            </Link>
            
            <Link href="/help" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Help
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">
              Sign In
            </button>
            <button className="btn-primary">
              Try for Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link
              href="/products"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/help"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </Link>
            <div className="px-3 py-2 space-y-2">
              <button className="w-full btn-secondary">
                Sign In
              </button>
              <button className="w-full btn-primary">
                Try for Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}