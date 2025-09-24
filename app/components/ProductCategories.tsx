'use client';

import Image from 'next/image';
import { useData } from '../contexts/DataContext';
import { CategoryImages } from '../services/api';

const categoryNames = [
  { id: 1, name: 'HANDBAGS', key: 'category_bag', alt: 'Luxury Handbags Collection' },
  { id: 2, name: 'ACCESSORIES', key: 'category_accessories', alt: 'Luxury Accessories Collection' },
  { id: 3, name: 'WATCHES', key: 'category_watches', alt: 'Luxury Watches Collection' },
  { id: 4, name: 'JEWELLERY', key: 'category_jewellery', alt: 'Luxury Jewellery Collection' },
  { id: 5, name: 'LIMITED EDITION', key: 'category_hermes', alt: 'Limited Edition Collection' },
  { id: 6, name: 'ARTWORK', key: 'category_artwork', alt: 'Artwork Collection' }
];

export default function ProductCategories() {
  const { categoryImages, loading, error } = useData();

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-gray mb-12 text-center">
            Our Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-luxury-beige border border-gray-200 animate-pulse">
                  <div className="absolute inset-0 bg-luxury-beige flex items-center justify-center">
                    <div className="w-16 h-16 bg-luxury-gray/20 rounded-full"></div>
                  </div>
                </div>
                <div className="h-4 bg-luxury-gray/20 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-gray mb-12 text-center">
            Our Categories
          </h2>
          <div className="text-center text-red-500">
            <p>Failed to load categories. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-luxury-gray mb-12 text-center">
          Our Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categoryNames.map((category) => {
            const imageUrl = categoryImages?.[category.key as keyof CategoryImages] || '';
            
            return (
              <div key={category.id} className="group cursor-pointer">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-100">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={category.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <Image
                      src="/Capture One Catalog01911758622100684.webp"
                      alt="Luxury Product Placeholder"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                  )}
                </div>
                <h3 className="text-center text-sm font-medium text-luxury-gray tracking-wider uppercase">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
