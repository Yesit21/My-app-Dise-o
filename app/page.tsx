export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold">
            🏆 #1 Car Marketplace
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Find Your <span className="text-purple-400">Perfect</span> Car
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Buy &amp; Sell Cars with Confidence
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-400">Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">12K+</div>
              <div className="text-gray-400">Happy Buyers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Featured Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { name: "2021 BMW M4", price: "$63,500", hp: "450 HP", badge: "New Arrival" },
            { name: "2020 Audi Q7", price: "$45,800", hp: "335 HP", badge: null },
            { name: "2019 Mercedes S-Class", price: "$53,300", hp: "429 HP", badge: "Popular" },
          ].map((car, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              {car.badge && (
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {car.badge}
                </div>
              )}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <span className="text-6xl">🚗</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{car.name}</h3>
                  <span className="text-2xl font-bold text-purple-400">{car.price}</span>
                </div>
                <div className="flex gap-4 text-sm text-gray-400 mb-4">
                  <span>🏁 {car.hp}</span>
                  <span>⚙️ Automatic</span>
                  <span>⛽ Gasoline</span>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream Car?</h2>
          <p className="text-gray-300 mb-8">Browse thousands of verified listings from trusted sellers</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors">
            Browse All Cars →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">⚡ <span className="font-bold text-white">AutoDrive</span></p>
            <p>© 2024 AutoDrive. All rights reserved. Made with ❤️ for car enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
