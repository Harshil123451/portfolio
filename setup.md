# Quick Setup Guide

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure your personal information**
   
   Edit `site.config.ts` with your details:
   ```typescript
   export const siteConfig = {
     name: "Your Name",
     title: "Your Name — Portfolio",
     tagline: "Your tagline here",
     bio: "Your bio here...",
     githubUsername: "your-github-username",
     email: "your@email.com",
     location: "Your Location",
     socials: {
       github: "https://github.com/your-username",
       linkedin: "https://www.linkedin.com/in/your-handle/",
       x: "https://x.com/your-handle",
       resumeUrl: "/resume.pdf",
     },
     pinnedRepos: ["repo1", "repo2", "repo3", "repo4"],
     topicsFilter: ["portfolio", "web", "ai", "fpga", "flutter"],
   }
   ```

3. **Set up environment variables (optional)**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local`:
   ```env
   GITHUB_TOKEN=your_github_token_here
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Add your assets**
   - Replace `public/og.png` with your OpenGraph image (1200x630px)
   - Replace `public/resume.pdf` with your actual resume
   - Add your profile photo to `public/avatar.jpg` (optional)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Go to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts`
- **Content**: Update pages in `src/app/`
- **Components**: Modify components in `src/components/`
- **Styling**: Customize `src/app/globals.css`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 📊 Features Included

✅ Modern Next.js 14 with App Router  
✅ TypeScript for type safety  
✅ Tailwind CSS for styling  
✅ Dark mode support  
✅ Responsive design  
✅ GitHub integration  
✅ SEO optimization  
✅ Contact form  
✅ Smooth animations  
✅ Accessibility features  
✅ Performance optimized  

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 📞 Support

If you need help, check the full README.md or open an issue on GitHub.

---

**Happy coding! 🎉**
