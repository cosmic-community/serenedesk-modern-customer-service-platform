import Link from 'next/link'
import { Solution } from '@/types'

interface SolutionCardProps {
  solution: Solution
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Link href={`/solutions/${solution.slug}`} className="card p-6 hover:shadow-lg transition-shadow duration-200">
      {solution.metadata?.hero_image && (
        <div className="aspect-video w-full mb-4">
          <img
            src={`${solution.metadata.hero_image.imgix_url}?w=400&h=225&fit=crop&auto=format,compress`}
            alt={solution.title}
            className="w-full h-full object-cover rounded-lg"
            width="400"
            height="225"
          />
        </div>
      )}
      
      <div className="mb-3">
        {solution.metadata?.solution_type && (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
            {solution.metadata.solution_type.value}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {solution.metadata?.solution_name || solution.title}
      </h3>
      
      {solution.metadata?.description && (
        <div 
          className="prose prose-sm text-gray-600 mb-4"
          dangerouslySetInnerHTML={{ __html: solution.metadata.description }} 
        />
      )}
      
      {/* Use Cases */}
      {solution.metadata?.use_cases && solution.metadata.use_cases.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Use Cases:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {solution.metadata.use_cases.slice(0, 3).map((useCase, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">•</span>
                <span>{useCase.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Key Benefits */}
      {solution.metadata?.key_benefits && solution.metadata.key_benefits.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {solution.metadata.key_benefits.slice(0, 2).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>{benefit.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Link>
  )
}