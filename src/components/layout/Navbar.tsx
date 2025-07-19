'use client';

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Heart, Star, Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigation = [
    { name: 'All Toys', href: '/toys', icon: Gift },
    { name: 'Categories', href: '/categories', icon: Star },
    { name: 'About Us', href: '/about', icon: Heart },
    { name: 'Contact Us', href: '/contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShouldHide(true);
      } else if (currentScrollY < lastScrollY) {
        setShouldHide(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${shouldHide ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className={`bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
                <Phone className="h-4 w-4 animate-pulse" />
                <span className="font-medium">+254 700 000 000</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer">
                <Mail className="h-4 w-4" />
                <span>krystalmobilestore@gmail.com</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-2 text-yellow-200 font-bold animate-bounce">
                <Star className="h-4 w-4 text-yellow-300" />
                <span>FREE Shipping on Orders Over Ksh 500</span>
                <Star className="h-4 w-4 text-yellow-300" />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="hidden sm:inline text-xs font-medium opacity-90">Follow Us:</span>
              <div className="flex space-x-2">
                <Facebook className="h-4 w-4 hover:scale-125 hover:text-blue-300 transition-all cursor-pointer" />
                <Instagram className="h-4 w-4 hover:scale-125 hover:text-pink-300 transition-all cursor-pointer" />
                <Twitter className="h-4 w-4 hover:scale-125 hover:text-blue-400 transition-all cursor-pointer" />
                <Youtube className="h-4 w-4 hover:scale-125 hover:text-red-300 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Gift className="h-6 w-6 text-white animate-pulse" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="h-2 w-2 text-purple-800" />
                  </div>
                </div>
                <div className="ml-3 flex flex-col leading-none">
                  <span 
                    className="text-2xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text tracking-tight transform transition-all duration-300 group-hover:scale-105"
                    style={{ fontFamily: "Fredoka One" }}
                  >
                    Krystal
                  </span>
                  <span 
                    className="text-xs font-bold text-gray-600 tracking-widest uppercase mt-0.5 transform transition-all duration-300 group-hover:text-purple-500"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    Toy Store
                  </span>
                </div>
              </a>
            </div>

            <div className="flex-1"></div>

            <nav className="hidden md:flex items-center space-x-2 mr-8">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-full transition-all duration-300 font-medium hover:shadow-lg transform hover:scale-105"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    <IconComponent className="h-4 w-4 group-hover:animate-bounce" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center max-w-sm mr-6">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search for magical toys..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-pink-50/50 group-hover:bg-white group-hover:shadow-md"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-pink-400 cursor-pointer hover:text-purple-500 transition-colors" onClick={handleSearch} />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="/cart" className="relative p-3 text-gray-700 hover:text-purple-600 group">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 group-hover:animate-bounce transition-transform group-hover:scale-110" />
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg">
                    {cartCount}
                  </span>
                </div>
              </a>
              
              <a href="/auth/login">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  <User size={16} className="mr-2" />
                  Login
                </Button>
              </a>
            </div>

            <button
              className="md:hidden p-2 text-gray-700 ml-4 hover:bg-pink-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-purple-600" /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50">
              <div className="mb-6 px-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for magical toys..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch();
                      }
                    }}
                    className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-pink-400" />
                </div>
              </div>

              <nav className="space-y-3 px-2">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-white rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-pink-200 flex items-center justify-between px-2">
                <a href="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 font-medium">
                  <div className="relative">
                    <ShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Fredoka One', cursive" }}>Cart</span>
                </a>
                <a href="/auth/login">
                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full px-6 py-2"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    Login
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;