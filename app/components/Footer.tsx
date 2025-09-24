'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-luxury-beige text-luxury-gray">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="Xclusive Collection Logo"
                width={60}
                height={60}
                className="mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-luxury-gray">XCLUSIVE COLLECTION</h3>
              </div>
            </div>
          </div>

          {/* Info Blocks */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Find Location */}
              <div className="text-center">
                <h4 className="font-bold text-luxury-gray mb-4">Find Location On Map</h4>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto border-2 border-green-200">
                  <div className="relative w-12 h-12 bg-green-200 rounded-lg overflow-hidden">
                    {/* Map background */}
                    <div className="absolute inset-0 bg-green-100"></div>
                    {/* Roads */}
                    <div className="absolute top-2 left-2 right-2 h-1 bg-white rounded"></div>
                    <div className="absolute top-4 left-2 right-2 h-1 bg-white rounded"></div>
                    <div className="absolute top-6 left-2 right-2 h-1 bg-white rounded"></div>
                    <div className="absolute top-2 left-2 w-1 h-8 bg-white rounded"></div>
                    <div className="absolute top-2 left-6 w-1 h-8 bg-white rounded"></div>
                    <div className="absolute top-2 left-10 w-1 h-8 bg-white rounded"></div>
                    {/* Water */}
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-blue-200"></div>
                    {/* Red pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="text-center">
                <h4 className="font-bold text-luxury-gray mb-4">Payment Methods</h4>
                <div className="flex justify-center space-x-4">
                  {/* Visa */}
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  {/* Mastercard */}
                  <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center relative overflow-hidden">
                    <div className="absolute left-1 w-4 h-4 bg-orange-400 rounded-full"></div>
                    <div className="absolute right-1 w-4 h-4 bg-red-400 rounded-full"></div>
                  </div>
                  {/* PayPal */}
                  <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PP</span>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="text-center">
                <h4 className="font-bold text-luxury-gray mb-4">Follow Us</h4>
                <div className="flex justify-center space-x-3">
                  {/* TikTok */}
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  {/* Instagram */}
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  {/* Xiaohongshu (Little Red Book) */}
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  {/* Snapchat */}
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                    </svg>
                  </div>
                  {/* YouTube */}
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-sm text-luxury-light-gray">
                  AL MUR RESIDENCE, Shop14,<br />
                  Al Wasl Rd, Jumeirah 1, Dubai
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Operating Hours</h4>
                <p className="text-sm text-luxury-light-gray">
                  Mon-Thu: 11:00 am - 11 pm<br />
                  Fri-Sun: 10:30 am - 11 pm
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-sm text-luxury-light-gray">
                  shop@xclusive-collections.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Navigation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ABOUT */}
          <div>
            <h4 className="font-bold text-luxury-gray mb-4">ABOUT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* BUY */}
          <div>
            <h4 className="font-bold text-luxury-gray mb-4">BUY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Handbags</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Accessories</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Watches</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Jewellery</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Limited Edition</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Artwork</a></li>
            </ul>
          </div>

          {/* SERVICE */}
          <div>
            <h4 className="font-bold text-luxury-gray mb-4">SERVICE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Sell and buy from us</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">White gloves home service</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Authentication</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Repair and deep cleaning</a></li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4 className="font-bold text-luxury-gray mb-4">HELP</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">My Account</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-luxury-light-gray hover:text-luxury-gray transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-luxury-light-gray">
            Xclusive collection is not affiliated with the brand we sell. The authentication of said products is performed independently by Xclusive collection.<br />
            © 2025 Xclusive collection - All Rights Reserved
          </p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        {/* WhatsApp Button */}
        <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
          </svg>
        </button>

        {/* Phone Button */}
        <button className="w-14 h-14 bg-luxury-gray rounded-full flex items-center justify-center shadow-lg hover:bg-luxury-light-gray transition-colors duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
