// API service for Xclusive Collections
const API_BASE_URL = 'https://xclusive-collections.com/prod-api/luxury';

export interface DynamicReplacementItem {
  id: string;
  data: {
    type: string;
    [key: string]: any;
  };
}

export interface CategoryImages {
  category_bag: string;
  category_accessories: string;
  category_watches: string;
  category_jewellery: string;
  category_hermes: string;
  category_artwork: string;
}

export interface ApiResponse {
  code: number;
  msg: string;
  data: DynamicReplacementItem[];
}

// Fetch dynamic replacement data
export async function fetchDynamicReplacement(): Promise<DynamicReplacementItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/dynamicReplacement/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control for better performance
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse = await response.json();
    
    if (result.code !== 200) {
      throw new Error(`API error: ${result.msg}`);
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching dynamic replacement data:', error);
    throw error;
  }
}

// Get category images from API data
export function getCategoryImages(data: DynamicReplacementItem[]): CategoryImages | null {
  const categoryImgData = data.find(item => item.data.type === 'categoryImg');
  
  if (!categoryImgData) {
    return null;
  }

  return {
    category_bag: categoryImgData.data.category_bag || '',
    category_accessories: categoryImgData.data.category_accessories || '',
    category_watches: categoryImgData.data.category_watches || '',
    category_jewellery: categoryImgData.data.category_jewellery || '',
    category_hermes: categoryImgData.data.category_hermes || '',
    category_artwork: categoryImgData.data.category_artwork || '',
  };
}

// Get home video data
export function getHomeVideoData(data: DynamicReplacementItem[]) {
  const homeVideoData = data.find(item => item.data.type === 'homeVideo');
  
  if (!homeVideoData) {
    return null;
  }

  return {
    title: homeVideoData.data.home_title || '',
    description: homeVideoData.data.home_description || '',
    video: homeVideoData.data.home_video || '',
  };
}

// Get limited edition data
export function getLimitedEditionData(data: DynamicReplacementItem[]) {
  const limitData = data.find(item => item.data.type === 'home_limit');
  
  if (!limitData) {
    return null;
  }

  return {
    image: limitData.data.home_limit_image || '',
    title: limitData.data.home_limit_title || '',
    description: limitData.data.home_limit_description || '',
  };
}
