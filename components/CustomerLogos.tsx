export default function CustomerLogos() {
  const customers = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=2000&auto=format,compress" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=2000&auto=format,compress" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474438810-b04a6d5c16e4?w=2000&auto=format,compress" },
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=2000&auto=format,compress" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=2000&auto=format,compress" },
    { name: "Spotify", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=2000&auto=format,compress" },
    { name: "Airbnb", logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=2000&auto=format,compress" },
    { name: "Uber", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=2000&auto=format,compress" },
    { name: "Slack", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=2000&auto=format,compress" },
    { name: "Shopify", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=2000&auto=format,compress" },
    { name: "Zoom", logo: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=2000&auto=format,compress" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=2000&auto=format,compress" }
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Trusted by leading companies worldwide
          </p>
        </div>
        
        {/* Scrolling logos container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 md:space-x-12">
            {/* First set of logos */}
            {customers.map((customer, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 md:w-40 md:h-20"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {customers.map((customer, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 md:w-40 md:h-20"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}