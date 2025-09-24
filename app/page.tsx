import dynamic from 'next/dynamic';
import Header from './components/Header';
import ProductCategories from './components/ProductCategories';
import LimitedEditionSection from './components/LimitedEditionSection';
import ImageSection from './components/ImageSection';
import ProductListing from './components/ProductListing';
import YouMightAlsoLike from './components/YouMightAlsoLike';
import Footer from './components/Footer';

// Dynamic import for video banner to reduce initial bundle size
const VideoBanner = dynamic(() => import('./components/VideoBanner'), {
  loading: () => (
    <div className="w-full h-screen bg-luxury-beige flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gray"></div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <VideoBanner />
      <ProductCategories />
      <LimitedEditionSection />
      <ImageSection />
      <ProductListing />
      <YouMightAlsoLike />
      <Footer />
    </main>
  );
}
