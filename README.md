# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, GitHub integration, and a beautiful UI with smooth animations.

## 🚀 Features

- **Dual-Mode Portfolio**: Professional and Photography sides with smooth toggle
- **Modern Design**: Clean, professional design with dark mode support
- **Responsive**: Fully responsive across all devices
- **GitHub Integration**: Automatically fetches and displays your GitHub repositories
- **Photo Gallery**: Beautiful masonry-style gallery with lightbox modal
- **SEO Optimized**: Dynamic metadata, sitemap, and OpenGraph images
- **Accessibility**: Semantic HTML, focus states, and keyboard navigation
- **Performance**: Optimized for Lighthouse scores with code splitting
- **Animations**: Smooth animations with Framer Motion
- **Contact Form**: Working contact form (ready for Formspree integration)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your values:
   ```env
   # Optional: GitHub token for higher API rate limits
   GITHUB_TOKEN=your_github_token_here
   
   # Optional: Formspree ID for contact form
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
   
   # Your site URL for SEO
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Configure your personal information**
   
   Edit `site.config.ts` with your details:
   ```typescript
   export const siteConfig = {
     name: "Your Name",
     title: "Your Name — Portfolio",
     githubUsername: "your-github-username",
     email: "your@email.com",
     location: "Your Location",
     sections: {
       professional: {
         tagline: "Your professional tagline",
         bio: "Your professional bio...",
         routes: ["/", "/projects", "/about", "/contact"],
       },
       photography: {
         tagline: "Your photography tagline",
         bio: "Your photography bio...",
         routes: ["/photography", "/photography/about", "/photography/contact"],
       },
     },
     photos: [
       { 
         src: "/photos/your-photo.jpg", 
         alt: "Photo description", 
         caption: "Your caption",
         quote: "Your quote"
       },
       // ... add more photos
     ],
     // ... update social links and other details
   }
   ```

5. **Add your assets**
   - Replace `public/og.png` with your OpenGraph image (1200x630px)
   - Replace `public/resume.pdf` with your actual resume
   - Add your profile photo to `public/avatar.jpg` (optional)
   - Add your photography images to `public/photos/` directory

6. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization

### Dual-Mode Portfolio
The portfolio has two distinct sides:
- **Professional**: Clean, minimal design for showcasing technical work
- **Photography**: Casual, creative vibe with photo gallery and lightbox

Switch between modes using the toggle in the navbar.

### Colors and Theme
The color scheme is defined in `tailwind.config.ts`. You can customize:
- Primary colors
- Dark mode colors
- Font families
- Animations

### Content
- **Homepage**: Edit `src/app/page.tsx` to modify the hero section
- **About**: Update `src/app/about/page.tsx` with your story
- **Projects**: The projects page automatically pulls from GitHub
- **Contact**: Customize the contact form in `src/components/contact-form.tsx`
- **Photography**: Add your images to `public/photos/` and update `site.config.ts`

### GitHub Integration
The site automatically fetches your GitHub repositories. You can:
- Pin specific repos by adding them to `pinnedRepos` in `site.config.ts`
- Filter topics by updating `topicsFilter`
- Customize the display in `src/components/project-card.tsx`

### Adding Photography Content
1. **Add Photos**: Place your images in `public/photos/` directory
2. **Update Config**: Add photo details to `photos` array in `site.config.ts`:
   ```typescript
   photos: [
     { 
       src: "/photos/your-photo.jpg", 
       alt: "Description of the photo", 
       caption: "Your caption here",
       quote: "Your inspirational quote"
     },
     // ... add more photos
   ]
   ```
3. **Image Specs**: Recommended 1200x800px, optimized for web
4. **Lightbox**: Photos automatically open in full-screen lightbox with navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

This portfolio is optimized for performance:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimal JavaScript bundle
- **Images**: Optimized with Next.js Image component
- **Caching**: GitHub API responses cached for 1 hour

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Framer Motion](https://www.framer.com/motion/) for the smooth animations
- [Lucide](https://lucide.dev/) for the beautiful icons

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:
- Open an issue on GitHub
- Contact me at [your-email@example.com](mailto:your-email@example.com)

---

**Happy coding! 🎉**
