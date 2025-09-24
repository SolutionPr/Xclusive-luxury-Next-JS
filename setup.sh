#!/bin/bash

echo "🚀 Setting up Xclusive Collection Next.js Project..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install additional performance packages
echo "⚡ Installing performance monitoring packages..."
npm install --save-dev web-vitals

echo "✅ Setup complete!"
echo ""
echo "To start development server:"
echo "npm run dev"
echo ""
echo "To build for production:"
echo "npm run build"
echo "npm start"
echo ""
echo "📊 Performance testing:"
echo "Visit https://pagespeed.web.dev/ to test your site's performance"
