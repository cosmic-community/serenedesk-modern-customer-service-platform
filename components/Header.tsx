'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes, FaStar, FaTachometerAlt, FaChevronDown, FaGlobe, FaHeadset, FaBuilding, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Row */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 bg-zendesk-green rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 hidden sm:block">zendesk</span>
          </Link>

          {/* Primary Navigation */}
          <nav className="hidden xl:flex items-center space-x-8 flex-1 justify-center">
            <div className="flex items-center space-x-2 group">
              <FaTachometerAlt className="text-blue-500 text-sm group-hover:text-blue-600 transition-colors" />
              <Link href="/dashboard" className="text-gray-700 hover:text-zendesk-green transition-colors font-medium whitespace-nowrap">
                Dashboard
              </Link>
            </div>
            <div className="flex items-center space-x-2 group">
              <FaStar className="text-amber-500 text-sm group-hover:text-amber-600 transition-colors" />
              <Link href="/products" className="text-gray-700 hover:text-zendesk-green transition-colors font-medium whitespace-nowrap">
                AI Agents
              </Link>
            </div>
            <Link href="/products" className="text-gray-700 hover:text-zendesk-green transition-colors font-medium">
              Products
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-zendesk-green transition-colors font-medium">
              Solutions
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-zendesk-green transition-colors font-medium">
              Resources
            </Link>
          </nav>

          {/* Secondary Navigation & Actions */}
          <div className="hidden xl:flex items-center space-x-6 flex-shrink-0">
            {/* Help & Support */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 group">
                <FaHeadset className="text-gray-400 group-hover:text-zendesk-green transition-colors" />
                <Link href="/help" className="text-gray-600 hover:text-zendesk-green transition-colors whitespace-nowrap">
                  Help Center
                </Link>
              </div>
              <div className="flex items-center space-x-1 group">
                <FaBuilding className="text-gray-400 group-hover:text-zendesk-green transition-colors" />
                <Link href="#" className="text-gray-600 hover:text-zendesk-green transition-colors whitespace-nowrap">
                  Company
                </Link>
              </div>
              <div className="flex items-center space-x-1 group">
                <FaPhone className="text-gray-400 group-hover:text-zendesk-green transition-colors" />
                <Link href="#" className="text-gray-600 hover:text-zendesk-green transition-colors whitespace-nowrap">
                  Contact
                </Link>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-zendesk-green transition-colors text-sm"
              >
                <FaGlobe className="text-gray-400" />
                <span>Language</span>
                <FaChevronDown className={`text-xs transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">English</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Español</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Français</button>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Sign In */}
            <Link href="/signin" className="text-gray-700 hover:text-zendesk-green transition-colors font-medium text-sm">
              Sign in
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Link 
                href="/try-free" 
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Try for free
              </Link>
              <Link 
                href="/demo" 
                className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm whitespace-nowrap"
              >
                View demo
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-md text-gray-700 hover:text-zendesk-green hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-1">
              {/* Primary Navigation */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-md group">
                  <FaTachometerAlt className="text-blue-500 text-sm group-hover:text-blue-600 transition-colors" />
                  <Link 
                    href="/dashboard" 
                    className="font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </div>
                <div className="flex items-center space-x-2 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-md group">
                  <FaStar className="text-amber-500 text-sm group-hover:text-amber-600 transition-colors" />
                  <Link 
                    href="/products" 
                    className="font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Zendesk AI Agents
                  </Link>
                </div>
                <Link 
                  href="/products" 
                  className="block px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  href="/solutions" 
                  className="block px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link 
                  href="/resources" 
                  className="block px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Secondary Navigation */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md group">
                  <FaHeadset className="text-gray-400 group-hover:text-zendesk-green transition-colors" />
                  <Link 
                    href="/help" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Help Center
                  </Link>
                </div>
                <div className="flex items-center space-x-2 px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md group">
                  <FaBuilding className="text-gray-400 group-hover:text-zendesk-green transition-colors" />
                  <Link 
                    href="#" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Company
                  </Link>
                </div>
                <div className="flex items-center space-x-2 px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md group">
                  <FaPhone className="text-gray-400 group-hover:text-zendesk-green transition-colors" />
                  <Link 
                    href="#" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Sign In */}
              <Link 
                href="/signin" 
                className="block px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <Link 
                  href="/try-free" 
                  className="block bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try for free
                </Link>
                <Link 
                  href="/demo" 
                  className="block border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}