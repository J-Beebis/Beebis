import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Products() {
  const collections = [
    {
      name: 'Sweatshirts',
      slug: 'sweatshirts',
      description: 'Cozy and stylish sweatshirts featuring the Beebis brand.',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop',
      itemCount: 12,
    },
    {
      name: 'Shirts',
      slug: 'shirts',
      description: 'Premium t-shirts and button-ups with unique cat-inspired designs.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop',
      itemCount: 18,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Collections</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our curated collections of premium cat-inspired apparel and accessories.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                to={`/collection/${collection.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-3xl font-bold mb-2">{collection.name}</h2>
                      <p className="text-gray-200 mb-4">{collection.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">{collection.itemCount} Items</span>
                        <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors">
                          <span className="mr-2 font-semibold">Shop Now</span>
                          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We're constantly adding new products and collections. Contact us to learn about upcoming releases or custom orders.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

