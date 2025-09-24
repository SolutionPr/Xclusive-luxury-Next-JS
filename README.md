# Xclusive Collection - Next.js Landing Page

A high-performance Next.js landing page built with modern web technologies and optimized for Core Web Vitals.

## Features

### 🚀 Performance Optimizations
- **Next.js 14** with App Router for optimal performance
- **Image optimization** using `next/image` with WebP/AVIF support
- **Font optimization** with `next/font` and preloading
- **Dynamic imports** to reduce initial bundle size
- **Compression** (gzip & brotli) and caching headers
- **Core Web Vitals** monitoring and optimization
- **Critical resource preloading**

### 🎨 Design & UX
- **Tailwind CSS** for utility-first styling
- **Responsive design** for all device sizes
- **Clean, minimalist** luxury aesthetic
- **Smooth animations** and transitions
- **Accessibility** best practices

### 🔍 SEO & Marketing
- **Comprehensive meta tags** (title, description, Open Graph, Twitter Cards)
- **Structured data** (JSON-LD) for rich snippets
- **Sitemap.xml** and robots.txt
- **Social media optimization**

### 📱 Modern Web Standards
- **TypeScript** for type safety
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **Security headers** and best practices

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Performance Features

### Core Web Vitals Optimization
- **LCP (Largest Contentful Paint)**: Optimized with preloaded hero video and images
- **FID (First Input Delay)**: Minimized with code splitting and dynamic imports
- **CLS (Cumulative Layout Shift)**: Prevented with proper image dimensions and font loading

### Image Optimization
- Automatic WebP/AVIF format serving
- Responsive image sizing
- Lazy loading for non-critical images
- Preloading for critical hero assets

### Font Optimization
- Google Fonts with `next/font`
- Font display swap for better performance
- Preloading critical fonts

### Bundle Optimization
- Dynamic imports for non-critical components
- Tree shaking for unused code
- Code splitting at route level

## File Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── VideoBanner.tsx     # Hero video section
│   │   └── PerformanceMonitor.tsx # Performance tracking
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Home page
│   ├── robots.ts               # Robots.txt
│   └── sitemap.ts              # Sitemap generation
├── public/
│   ├── hero-video.mp4          # Hero video (placeholder)
│   ├── video-poster.jpg        # Video poster (placeholder)
│   └── og-image.jpg            # Open Graph image (placeholder)
├── middleware.ts               # Performance middleware
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json
```

## Performance Monitoring

The application includes built-in performance monitoring that tracks:
- Core Web Vitals (CLS, FID, FCP, LCP, TTFB)
- Resource loading times
- User interaction metrics

## SEO Features

- **Meta tags**: Comprehensive title, description, and social media tags
- **Structured data**: JSON-LD for organization and product information
- **Sitemap**: Automatically generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Facebook and social media optimization
- **Twitter Cards**: Twitter sharing optimization

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Production Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy to your hosting platform:**
   - Vercel (recommended)
   - Netlify
   - AWS Amplify
   - Any Node.js hosting

3. **Environment variables:**
   - Set up your domain in the metadata configuration
   - Add Google Analytics tracking ID
   - Configure social media URLs

## Performance Testing

Use these tools to test performance:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## License

MIT License - feel free to use this project for your own purposes.
