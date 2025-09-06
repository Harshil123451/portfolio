"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search, Camera } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="relative">
            <motion.h1 
              className="text-8xl md:text-9xl font-bold text-primary/20"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-4xl"
              >
                🔍
              </motion.div>
            </div>
          </div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Oops! Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best photographers sometimes miss the shot!
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild size="lg" className="group">
            <Link href="/">
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-8 text-muted-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/projects" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Search className="h-4 w-4" />
            <span className="text-sm">Projects</span>
          </Link>
          <Link href="/photography" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Camera className="h-4 w-4" />
            <span className="text-sm">Photography</span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
