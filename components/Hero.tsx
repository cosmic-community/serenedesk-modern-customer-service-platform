export default function Hero() {
  return (
    <section className="hero-gradient text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Deliver beautifully simple service with{' '}
            <span className="text-yellow-300">AI Agents</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto text-balance">
            Powering over 10,000 AI customers and counting with intelligent automation 
            and seamless human handoffs for true resolutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200">
              Try for Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200">
              Get a Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="text-center">
            <p className="text-white/80 mb-4">Trusted by 100,000+ companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <span className="text-white font-semibold">TESCO</span>
              <span className="text-white font-semibold">LUSH</span>
              <span className="text-white font-semibold">UBER</span>
              <span className="text-white font-semibold">LIBERTY</span>
              <span className="text-white font-semibold">SQUARESPACE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}