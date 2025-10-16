import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PawPrint, Heart, Handshake } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">The Beebis Movement</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where premium style meets the purr-fect life.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">Our Story: From Babies to Beebis</h2>
            <p className="text-gray-700 text-lg mb-4">
              Beebis is more than just a brand; it's a celebration of the most adorable, black and white Manx cats ever. Designed by a passionate woman artist, our inspiration comes directly from our own feline family.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our cats are, in the owners' unbiased opinion, the most adorable cats. They have transcended the status of mere pets and are now officially the **"biggest babies of the bunch"**—a title only awarded to the most cherished felines. This is the heart of the Beebis movement.
            </p>
            <p className="text-gray-700 text-lg">
              Every design, from the quirky to the chic, is created to honor the unique personality and charm of cats, allowing you to wear your feline love proudly.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&h=400&fit=crop"
              alt="Black and white cat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-md">
              <PawPrint size={48} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Authentic Design</h3>
              <p className="text-gray-600">
                Original, hand-crafted designs inspired by real cats and their unique personalities.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-md">
              <Heart size={48} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality & Comfort</h3>
              <p className="text-gray-600">
                Premium materials for apparel that feels as good as it looks, made to last.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg shadow-md">
              <Handshake size={48} className="text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Building a movement for cat lovers who treat their pets like the biggest babies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Partnerships */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Branding Partnerships</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are looking for partners who share our passion for premium, cat-centric lifestyle products. Collaborate with Beebis to reach a dedicated and engaged audience.
          </p>
          <ul className="list-disc list-inside text-left inline-block text-gray-300 mb-8">
            <li>Cross-promotion opportunities</li>
            <li>Exclusive co-branded merchandise</li>
            <li>Featured placement on our website and social channels</li>
          </ul>
          <Link to="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
              Inquire About Partnerships
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

