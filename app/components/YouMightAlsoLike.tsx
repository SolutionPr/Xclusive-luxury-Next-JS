'use client';

import Image from 'next/image';

const recommendedProducts = [
  {
    id: 1,
    name: "Hermès Mini Kelly Trench (S2) Craie (10) Etoupe (18) K (2025)",
    price: "120,000.00 AED",
    image: "/recommended-1.jpg",
    year: "2025"
  },
  {
    id: 2,
    name: "Louis Vuitton Capucines BB by Yayoi Kusama 2023",
    price: "Price on Request",
    image: "/recommended-2.jpg",
    year: "2023"
  },
  {
    id: 3,
    name: "Hermès Birkin25 Trench (S2) K (2025)",
    price: "105,000.00 AED",
    image: "/recommended-3.jpg",
    year: "2025"
  },
  {
    id: 4,
    name: "Hermès Kelly25 Nata (12)/Jaune Poussin (1Z) B (2023)",
    price: "90,000.00 AED",
    image: "/recommended-4.jpg",
    year: "2023"
  }
];

export default function YouMightAlsoLike() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-gray mb-4">
            You Might Also Like
          </h2>
          <p className="text-lg text-luxury-light-gray">
            Discover Curated Favorites: Timeless Elegance, Crafted for You.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="text-center">
              {/* Product Image */}
              <div className="relative aspect-square mb-4 overflow-hidden bg-luxury-beige border border-gray-200">
                <Image
                  src="/Capture One Catalog01911758622100684.webp"
                  alt="Luxury Product Placeholder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              
              {/* Product Details */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-luxury-gray leading-tight">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-luxury-gray">
                  {product.price}
                </p>
                
                {/* Action Buttons */}
                <div className="flex justify-center space-x-2 mt-3">
                  {/* WhatsApp Button */}
                  <button className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </button>
                  
                  {/* Phone Button (only for last product) */}
                  {product.id === 4 && (
                    <button className="inline-flex items-center justify-center w-8 h-8 bg-luxury-gray rounded-full hover:bg-luxury-light-gray transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
