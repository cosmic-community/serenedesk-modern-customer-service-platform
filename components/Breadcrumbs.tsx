import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <FaChevronRight className="h-3 w-3 mx-2" />}
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-gray-900 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}