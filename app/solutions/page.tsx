import { getSolutions } from '@/lib/cosmic'
import SolutionCard from '@/components/SolutionCard'

export default async function SolutionsPage() {
  const solutions = await getSolutions()

  const industrySolutions = solutions.filter(
    solution => solution.metadata?.solution_type?.key === 'industry'
  )
  const businessSolutions = solutions.filter(
    solution => solution.metadata?.solution_type?.key === 'business'
  )

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored customer service solutions for your industry and business size.
          </p>
        </div>

        {/* Industry Solutions */}
        {industrySolutions.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Industry Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} />
              ))}
            </div>
          </div>
        )}

        {/* Business Size Solutions */}
        {businessSolutions.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              By Business Size
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessSolutions.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} />
              ))}
            </div>
          </div>
        )}

        {solutions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No solutions available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}