# 🚀 Krishi Chheda - Portfolio Website

A modern, responsive portfolio website showcasing both professional development work and photography. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎯 Professional Section
- **Dynamic Project Showcase** - Automatically fetches and displays GitHub repositories
- **Skills & Technologies** - Interactive skill cards with proficiency levels
- **Timeline** - Professional journey and key achievements
- **Contact Forms** - Working contact forms with email integration

### 📸 Photography Section
- **Photo Gallery** - Beautiful grid layout with hover effects
- **Lightbox Modal** - Full-screen image viewing with navigation
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion powered transitions

### 🎨 Design & UX
- **Dark/Light Mode** - Toggle between themes
- **Professional/Photography Toggle** - Easy switching between portfolio modes
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Meta tags, sitemap, and structured data

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harshil123451/portfolio.git
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
   Add your GitHub token to `.env.local`:
   ```
   GITHUB_TOKEN=your_github_token_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── photos/           # Photography portfolio images
│   └── og.png           # Open Graph image
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── photography/ # Photography section
│   │   └── projects/    # Projects page
│   ├── components/      # Reusable React components
│   │   ├── ui/          # UI components (buttons, cards, etc.)
│   │   └── ...          # Feature components
│   ├── contexts/        # React contexts
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── site.config.ts       # Site configuration
└── tailwind.config.ts   # Tailwind CSS configuration
```

## ⚙️ Configuration

### Site Configuration
Edit `site.config.ts` to customize:
- Personal information
- Social media links
- Skills and technologies
- Professional timeline
- Photography gallery

### GitHub Integration
The portfolio automatically fetches your GitHub repositories. Update the username in:
- `site.config.ts` → `githubUsername`
- `src/lib/github.ts` → API configuration

## 🎨 Customization

### Adding New Photos
1. Add images to `public/photos/`
2. Update the `photos` array in `site.config.ts`
3. Include: `src`, `alt`, `caption`, and `quote`

### Modifying Skills
Edit the `skills` array in `site.config.ts`:
```typescript
skills: [
  { name: "Technology", level: "Proficiency" },
  // Add more skills...
]
```

### Updating Timeline
Modify the `timeline` array in `site.config.ts`:
```typescript
timeline: [
  {
    year: "2024",
    title: "Project Name",
    description: "Project description"
  },
  // Add more entries...
]
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
vercel --prod
```

## 📱 Responsive Design

- **Mobile:** Optimized for phones (320px+)
- **Tablet:** Perfect for tablets (768px+)
- **Desktop:** Full experience (1024px+)
- **Large Screens:** Enhanced for large displays (1440px+)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Harshil123451/portfolio/issues).

## 📞 Contact

**Krishi Chheda**
- Email: [krishichheda38@gmail.com](mailto:krishichheda38@gmail.com)
- GitHub: [@Harshil123451](https://github.com/Harshil123451)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/your-handle/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

⭐ **Star this repository if you found it helpful!**