import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    // In a real application, you would handle form submission here (e.g., API call)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header */}
      <section className="bg-black text-white py-16 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you, whether you have a question about our products or a partnership inquiry.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          <div className="flex items-start space-x-4">
            <Mail size={28} className="text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-black">Email Us</h3>
              <p className="text-gray-600">hello@beebis.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone size={28} className="text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-black">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin size={28} className="text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-black">Our Office</h3>
              <p className="text-gray-600">123 Catnip Lane, Feline City, CA 90210</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="Product Inquiry, Partnership, etc."
                required
                className="border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
                required
                className="border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

