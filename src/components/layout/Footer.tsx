import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Gift,
  Heart,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-50 to-pink-50 border-t border-pink-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="space-y-6">
            <h3
              className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text drop-shadow-md"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Krystal Toy Store
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Bringing smiles and endless adventures with magical toys for every age.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-500 hover:scale-125 transition-transform duration-300">
                <Facebook className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-pink-500 hover:scale-125 transition-transform duration-300">
                <Instagram className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-400 hover:scale-125 transition-transform duration-300">
                <Twitter className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-red-500 hover:scale-125 transition-transform duration-300">
                <Youtube className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4
              className="font-extrabold text-xl text-gray-800"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
             Quick Links
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/about" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-2">
                <Heart className="h-4 w-4 text-pink-500" /> <span>About Us</span>
              </a>
              <a href="/products" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-2">
                <Gift className="h-4 w-4 text-green-500" /> <span>All Our Toys</span>
              </a>
              <a href="/categories" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" /> <span>Toy Categories</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-2">
                <PhoneCall className="h-4 w-4 text-blue-500" /> <span>Support Team</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" /> <span>Track Your Order</span>
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4
              className="font-extrabold text-xl text-gray-800"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Adventure Map
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                Return  Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                Shipping Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                Terms and Conditions
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                Locate Store
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4
              className="font-extrabold text-xl text-gray-800"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-700">
                <PhoneCall className="h-5 w-5 text-purple-600" />
                <span className="font-medium">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="h-5 w-5 text-pink-500" />
                <span className="font-medium">krystaltoystore@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="font-medium">Murang'a, Kenya</span> {/* Updated location */}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-3"> {/* Increased space */}
              <p className="text-lg font-semibold text-gray-800">
               Subscribe to Our  Newsletter
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  placeholder=" Enter your email"
                  className="flex-1 rounded-full px-4 py-2 border-2 border-pink-200 focus:border-purple-500 focus:ring-purple-500 shadow-sm"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                />
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; 2025 Krystal Toy Store. All rights reserved. Let the games begin!</p> {/* Updated company name and tagline */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}