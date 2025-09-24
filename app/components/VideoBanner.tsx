'use client';

import { useState, useRef, useEffect } from 'react';
import { useData } from '../contexts/DataContext';

export default function VideoBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { videoData, loading } = useData();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsLoaded(true);
        setHasVideo(true);
        // Auto-play the video when it loads
        video.play().catch(() => {
          // If autoplay fails, that's okay - user can click to play
        });
      };
      const handleError = () => {
        setIsLoaded(true);
        setHasVideo(false);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      // Check if video loads within 5 seconds
      const timeout = setTimeout(() => {
        if (!isLoaded) {
          setIsLoaded(true);
          setHasVideo(false);
        }
      }, 5000);

      return () => {
        clearTimeout(timeout);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [isMounted, isLoaded]);


  // Show loading state during hydration
  if (!isMounted) {
    return (
      <section className="relative w-full h-screen overflow-hidden bg-luxury-beige">
        <div className="relative w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gray"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-luxury-beige">
      {/* Video Container */}
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%'
          }}
          poster="/video-poster.svg"
          preload="auto"
          muted
          loop
          playsInline
          autoPlay
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        >
          <source src={videoData?.video || '/hero-video.mp4'} type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Loading Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-luxury-beige flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gray"></div>
          </div>
        )}

        {/* Fallback Background - Only show if video fails to load */}
        {!hasVideo && (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            {/* Luxury product background simulation */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-lg transform rotate-12 blur-sm"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg transform -rotate-12 blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-2xl opacity-30"></div>
            </div>
            {/* Warm lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-100/30 via-transparent to-orange-100/20"></div>
          </div>
        )}


        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white drop-shadow-lg">
              {videoData?.title || 'Artful Living Joyful Luxury'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up text-white/90 drop-shadow-md">
              {videoData?.description || 'Xclusive Collection, Where Every Moment is Worth Treasuring.'}
            </p>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
