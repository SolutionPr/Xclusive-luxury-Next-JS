'use client';

import { useData } from '../contexts/DataContext';

export default function LimitedEditionSection() {
  const { limitedEditionData, loading } = useData();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-luxury-gray mb-8 text-center">
          {limitedEditionData?.title || 'Limited Edition'}
        </h2>
        
        <div 
          className="text-luxury-light-gray leading-relaxed mb-12 text-center"
          style={{
            fontSize: '14px',
            textAlign: 'center',
            margin: '24px 0 16px',
            fontWeight: '700'
          }}
        >
          {loading ? (
            <div className="animate-pulse">
              <div className="h-4 bg-luxury-gray/20 rounded mb-4"></div>
              <div className="h-4 bg-luxury-gray/20 rounded mb-4"></div>
              <div className="h-4 bg-luxury-gray/20 rounded mb-4"></div>
              <div className="h-4 bg-luxury-gray/20 rounded"></div>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ 
              __html: limitedEditionData?.description?.replace(/\n\n/g, '</p><p className="mb-6">').replace(/\n/g, '<br />') || 'Loading...' 
            }} />
          )}
        </div>
        
        <div className="text-center">
          <button className="btn-secondary border-luxury-gray text-luxury-gray hover:bg-luxury-gray hover:text-white transition-all duration-300">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
