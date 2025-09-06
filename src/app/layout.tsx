import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { SideProvider } from '@/contexts/side-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { generateSEO } from '@/lib/seo'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = generateSEO()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SideProvider>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </SideProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
