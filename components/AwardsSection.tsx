export default function AwardsSection() {
  const awards = [
    {
      title: "Leader",
      subtitle: "WINTER",
      year: "2024",
      category: "",
      bgColor: "bg-red-500"
    },
    {
      title: "Top 50",
      subtitle: "AI Products",
      year: "2024",
      category: "BEST SOFTWARE AWARDS",
      bgColor: "bg-red-500"
    },
    {
      title: "Top 50",
      subtitle: "Customer Service Products",
      year: "2024",
      category: "BEST SOFTWARE AWARDS",
      bgColor: "bg-red-500"
    },
    {
      title: "Top 100",
      subtitle: "Software Products",
      year: "2024",
      category: "BEST SOFTWARE AWARDS",
      bgColor: "bg-red-500"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            OUR AWARD-WINNING SERVICE SOLUTION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Recognized by industry leaders
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative bg-white rounded-2xl shadow-lg p-6 w-32 h-40 flex flex-col items-center justify-center mb-2">
                {/* G2 Logo */}
                <div className="absolute top-3 right-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                </div>
                
                {/* Award Content */}
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{award.title}</h3>
                  <div className={`${award.bgColor} text-white px-3 py-1 rounded text-xs font-medium mb-2`}>
                    {award.subtitle}
                  </div>
                  <div className="text-lg font-bold text-gray-900">{award.year}</div>
                </div>
              </div>
              
              {award.category && (
                <p className="text-xs text-gray-500 text-center max-w-24">
                  {award.category}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}