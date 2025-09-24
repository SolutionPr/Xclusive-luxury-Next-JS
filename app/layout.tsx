import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { DataProvider } from './contexts/DataContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Xclusive Collection - Luxury Fashion & Lifestyle',
  description: 'Discover the finest luxury collection with Xclusive. Premium fashion, lifestyle products, and exclusive designs for the discerning customer.',
  keywords: 'luxury, fashion, collection, premium, exclusive, lifestyle',
  authors: [{ name: 'Xclusive Collection' }],
  creator: 'Xclusive Collection',
  publisher: 'Xclusive Collection',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xclusive-collection.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Xclusive Collection - Luxury Fashion & Lifestyle',
    description: 'Discover the finest luxury collection with Xclusive. Premium fashion, lifestyle products, and exclusive designs for the discerning customer.',
    url: 'https://xclusive-collection.com',
    siteName: 'Xclusive Collection',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xclusive Collection - Luxury Fashion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xclusive Collection - Luxury Fashion & Lifestyle',
    description: 'Discover the finest luxury collection with Xclusive. Premium fashion, lifestyle products, and exclusive designs for the discerning customer.',
    images: ['/og-image.jpg'],
    creator: '@xclusivecollection',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xclusive Collection',
  description: 'Luxury fashion and lifestyle brand offering premium products and exclusive designs.',
  url: 'https://xclusive-collection.com',
  logo: 'https://xclusive-collection.com/logo.png',
  sameAs: [
    'https://www.instagram.com/xclusivecollection',
    'https://www.facebook.com/xclusivecollection',
    'https://twitter.com/xclusivecollection',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
