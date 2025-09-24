'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals - only in production
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Use a try-catch to handle potential import errors
      try {
        import('web-vitals').then((webVitals) => {
          if (webVitals.onCLS) webVitals.onCLS(console.log);
          if (webVitals.onINP) webVitals.onINP(console.log);
          if (webVitals.onFCP) webVitals.onFCP(console.log);
          if (webVitals.onLCP) webVitals.onLCP(console.log);
          if (webVitals.onTTFB) webVitals.onTTFB(console.log);
        }).catch((error) => {
          console.warn('Failed to load web-vitals:', error);
        });
      } catch (error) {
        console.warn('Web-vitals not available:', error);
      }
    }
  }, []);

  return null;
}
