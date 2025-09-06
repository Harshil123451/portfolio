# Photography Setup Guide

This guide will help you set up the photography side of your dual-mode portfolio.

## 📸 Quick Setup

### 1. Add Your Photos
Place your photography images in the `public/photos/` directory:

```
public/photos/
├── beach-sunset.jpg
├── city-lights.jpg
├── forest-trail.jpg
├── street-art.jpg
├── coffee-morning.jpg
├── rainy-day.jpg
├── rooftop-view.jpg
└── portrait-candid.jpg
```

### 2. Update Photo Configuration
Edit `site.config.ts` to add your photo details:

```typescript
photos: [
  { 
    src: "/photos/beach-sunset.jpg", 
    alt: "Beach sunset", 
    caption: "Golden hour, Melbourne 2024",
    quote: "Chasing light until the day ends"
  },
  { 
    src: "/photos/city-lights.jpg", 
    alt: "City lights", 
    caption: "Late night walks",
    quote: "City mood, neon dreams"
  },
  // ... add more photos
]
```

### 3. Customize Photography Content

#### Update Photography Bio
In `site.config.ts`, modify the photography section:

```typescript
photography: {
  tagline: "Your photography tagline here",
  bio: "Your photography story and approach...",
  routes: ["/photography", "/photography/about", "/photography/contact"],
}
```

#### Update About Page
Edit `src/app/photography/about/page.tsx` to reflect your photography style and approach.

#### Update Contact Page
Edit `src/app/photography/contact/page.tsx` to customize the collaboration message.

## 🎨 Photography Styling

### Color Scheme
The photography side uses a softer palette:
- **Primary**: Teal to Amber gradient
- **Accent**: Warm, creative tones
- **Typography**: Playfair Display for captions

### Customizing Colors
Edit `tailwind.config.ts` to adjust the photography color scheme:

```typescript
// Add custom colors for photography mode
colors: {
  'photo-primary': '#14b8a6', // Teal
  'photo-secondary': '#f59e0b', // Amber
  // ... other colors
}
```

## 📱 Features

### Photo Gallery
- **Responsive Grid**: Automatically adjusts to screen size
- **Lazy Loading**: Images load as you scroll
- **Hover Effects**: Smooth zoom and overlay effects
- **Captions**: Display photo captions and quotes

### Lightbox Modal
- **Full-Screen View**: Click any photo to view in full size
- **Navigation**: Arrow keys or click to navigate between photos
- **Mobile Support**: Swipe gestures on mobile devices
- **Keyboard Shortcuts**: ESC to close, arrow keys to navigate

### Photography Pages
- **Gallery**: Main photo showcase with filtering
- **About**: Your photography story and style
- **Contact**: Collaboration-focused contact form

## 🚀 Tips for Best Results

### Image Optimization
1. **Size**: Use 1200x800px or similar aspect ratio
2. **Format**: JPG for photos, PNG for graphics
3. **Compression**: Optimize for web (use tools like TinyPNG)
4. **Alt Text**: Write descriptive alt text for accessibility

### Content Writing
1. **Captions**: Keep them short and descriptive
2. **Quotes**: Use inspirational or personal quotes
3. **Bio**: Write in first person, casual tone
4. **Contact**: Focus on collaboration and creativity

### Performance
1. **Lazy Loading**: Images load as needed
2. **Responsive Images**: Next.js optimizes automatically
3. **Caching**: Images are cached for better performance

## 🔧 Troubleshooting

### Images Not Loading
- Check file paths in `site.config.ts`
- Ensure images are in `public/photos/` directory
- Verify image file extensions match configuration

### Lightbox Not Working
- Check browser console for JavaScript errors
- Ensure all photo objects have required properties
- Verify image URLs are correct

### Styling Issues
- Check Tailwind classes are applied correctly
- Verify custom CSS in `globals.css`
- Test responsive design on different screen sizes

## 📞 Support

If you need help with the photography setup:
1. Check the main README.md for general setup
2. Review the component files in `src/components/`
3. Test with placeholder images first
4. Open an issue on GitHub for specific problems

---

**Happy shooting! 📸**
