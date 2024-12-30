'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star, Mail } from 'lucide-react'

import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
} from 'react-icons/fa'

export default function Footer() {
  const testimonials = [
    {
      name: 'Sarah M.',
      verified: true,
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: 'Alex K.',
      verified: true,
      rating: 5,
      text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    },
    {
      name: 'James L.',
      verified: true,
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    // Add more testimonials as needed
  ]

  return (
    <footer className="w-full bg-white">
      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold">{testimonial.name}</span>
                  {testimonial.verified && (
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              STAY UP TO DATE ABOUT
              <br />
              OUR LATEST OFFERS
            </h2>
            <div className="flex w-full md:w-auto gap-4">
              <div className="relative flex-grow md:w-80">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10 bg-white/10 border-none text-white placeholder:text-gray-400"
                />
              </div>
              <Button className="whitespace-nowrap bg-white text-black hover:bg-gray-100">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">RDG-E-COMMERCE</h2>
            <p className="text-gray-600 mb-6">
              We have clothes that suits your style and which youre proud to
              wear. From women to men.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <FaTwitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <FaFacebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <FaInstagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <FaGithub className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-semibold mb-4">HELP</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              RDG © 2024-2024, All Rights Reserved
            </p>
            <div className="flex gap-4">
              <FaCcVisa className="h-8 text text-blue-300" />
              <FaCcMastercard className="h-8 text text-blue-300" />
              <FaPaypal className="h-8 text text-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
