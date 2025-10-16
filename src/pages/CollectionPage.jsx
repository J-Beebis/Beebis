import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

// Placeholder data for products
const allProducts = [
  { id: 1, name: 'Classic Logo Sweatshirt', collection: 'sweatshirts', price: 49.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', description: 'The original Beebis design in a cozy sweatshirt.' },
  { id: 2, name: 'Tuxedo Cat Tee', collection: 'shirts', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', description: 'A sophisticated cat for a sophisticated you.' },
  { id: 3, name: 'Pilot Cat Hoodie', collection: 'sweatshirts', price: 59.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', description: 'For the adventurous cat lover. High-flying style.' },
  { id: 4, name: 'Rainbow Kitty Tee', collection: 'shirts', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', description: 'A touch of color for the quirky cute cat lover.' },
  { id: 5, name: 'Zen Manx Sweatshirt', collection: 'sweatshirts', price: 49.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', description: 'Find your inner peace with our peaceful kitty design.' },
  { id: 6, name: 'Chic Manx Tee', collection: 'shirts', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', description: 'Retro style meets Manx charm.' },
  // Add more products to simulate a full page
  { id: 7, name: 'Beebis Black Tee', collection: 'shirts', price: 25.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', description: 'Simple, bold, and black.' },
  { id: 8, name: 'Red Accent Sweatshirt', collection: 'sweatshirts', price: 54.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop', description: 'A pop of Beebis red on a classic fit.' },
]

export default function CollectionPage() {
  const { collectionName } = useParams()
  const displayTitle = collectionName.charAt(0).toUpperCase() + collectionName.slice(1)

  const products = allProducts.filter(p => p.collection === collectionName)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="text-4xl font-extrabold text-black mb-2">
          {displayTitle} Collection
        </h1>
        <p className="text-gray-600 text-lg">
          Explore our latest {collectionName} designs.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-red-600">${product.price.toFixed(2)}</span>
                  <Button className="bg-black hover:bg-gray-800 text-white transition-colors">
                    <ShoppingCart size={16} className="mr-2" />
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No products found in this collection.</p>
          </div>
        )}
      </div>
    </div>
  )
}

