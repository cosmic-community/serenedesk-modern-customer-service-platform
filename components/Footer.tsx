import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SereneDesk</h3>
            <p className="text-gray-400 mb-4">
              Deliver beautifully simple service with AI-powered customer support solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social links would go here */}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/serenedesk-ai-agents" className="text-gray-400 hover:text-white">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/products/serenedesk-support" className="text-gray-400 hover:text-white">
                  Support Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white">
                  All Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/retail" className="text-gray-400 hover:text-white">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise" className="text-gray-400 hover:text-white">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SereneDesk. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white text-sm">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}