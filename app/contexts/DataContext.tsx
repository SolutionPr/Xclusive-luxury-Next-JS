'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchDynamicReplacement, getCategoryImages, getHomeVideoData, getLimitedEditionData, CategoryImages } from '../services/api';

interface VideoData {
  title: string;
  description: string;
  video: string;
}

interface LimitedEditionData {
  image: string;
  title: string;
  description: string;
}

interface DataContextType {
  categoryImages: CategoryImages | null;
  videoData: VideoData | null;
  limitedEditionData: LimitedEditionData | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [categoryImages, setCategoryImages] = useState<CategoryImages | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [limitedEditionData, setLimitedEditionData] = useState<LimitedEditionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Single API call to fetch all data
        const data = await fetchDynamicReplacement();
        
        // Extract all data types from the single response
        const categoryData = getCategoryImages(data);
        const videoInfo = getHomeVideoData(data);
        const limitedData = getLimitedEditionData(data);
        
        setCategoryImages(categoryData);
        setVideoData(videoInfo);
        setLimitedEditionData(limitedData);
        
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load data');
        
        // Set fallback data
        setCategoryImages(null);
        setVideoData({
          title: 'Artful Living Joyful Luxury',
          description: 'Xclusive Collection，Where Every Moment is Worth Treasuring.',
          video: '/hero-video.mp4'
        });
        setLimitedEditionData({
          image: '/xclusive-collection.jpg',
          title: 'Limited Edition',
          description: `Dubai's Premier Destination for Rare Luxury Collectibles.

At Xclusive Collection, we specialize in curating the world's most exclusive and sought-after luxury items. From ultra-rare Hermès limited-edition handbags, collectible Chanel and Louis Vuitton pieces, to Hermès fine jewelry and custom-crafted luxury items like bicycles, guitars, and signature decorative objects — every piece in our collection tells a story of rarity and refinement.

Our boutique also proudly features exceptional high jewelry from renowned houses like Van Cleef & Arpels, alongside limited-edition timepieces that are as prestigious as they are elusive. Whether you're a seasoned collector or a passionate luxury enthusiast, Xclusive Collection offers a one-of-a-kind experience where each piece is a true treasure.

Discover the art of luxury collecting — exclusively in Dubai.`
        });
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  return (
    <DataContext.Provider value={{
      categoryImages,
      videoData,
      limitedEditionData,
      loading,
      error
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
