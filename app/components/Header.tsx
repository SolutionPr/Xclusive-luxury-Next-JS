'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-luxury-beige/90 backdrop-blur-sm border-b border-gray-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Menu & Profile */}
          <div className="flex items-center space-x-6">
            <button
              className="flex items-center space-x-2 text-luxury-gray hover:text-luxury-light-gray transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col space-y-1">
                <div className="w-5 h-0.5 bg-luxury-gray"></div>
                <div className="w-5 h-0.5 bg-luxury-gray"></div>
                <div className="w-5 h-0.5 bg-luxury-gray"></div>
              </div>
              <span className="text-sm font-medium">Menu</span>
            </button>
            
            <button
              className="w-8 h-8 rounded-full bg-luxury-gray flex items-center justify-center hover:bg-luxury-light-gray transition-colors duration-200"
              aria-label="User profile"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Center Section - Logo */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Xclusive Collection Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
              <div className="text-center">
                <div className="text-lg font-medium text-luxury-gray tracking-wider">XCLUSIVE</div>
                <div className="text-sm font-medium text-luxury-gray tracking-widest">COLLECTION</div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact & Search */}
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm font-medium text-luxury-gray hover:text-luxury-light-gray transition-colors duration-200 cursor-pointer">
                Contact Us
              </div>
            </div>
            
            <div className="relative">
              <div className="flex items-center">
                <div className="w-32 h-0.5 bg-luxury-gray"></div>
                <button
                  className="ml-2 w-4 h-4 text-luxury-gray hover:text-luxury-light-gray transition-colors duration-200"
                  aria-label="Search"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-luxury-gray hover:text-luxury-light-gray transition-colors duration-200">Home</a>
              <a href="#" className="text-luxury-gray hover:text-luxury-light-gray transition-colors duration-200">Collections</a>
              <a href="#" className="text-luxury-gray hover:text-luxury-light-gray transition-colors duration-200">About</a>
              <a href="#" className="text-luxury-gray hover:text-luxury-light-gray transition-colors duration-200">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
