"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Eye } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Photo {
  src: string
  alt: string
  caption: string
  quote: string
}

interface PhotoCardProps {
  photo: Photo
  index: number
  onClick: () => void
  className?: string
}

export function PhotoCard({ photo, index, onClick, className }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group cursor-pointer", className)}
      onClick={onClick}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className={cn(
              "object-cover transition-all duration-500 group-hover:scale-110",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Loading placeholder */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          
          {/* Error placeholder */}
          {hasError && (
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">📸</div>
                <div className="text-sm">Image unavailable</div>
              </div>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          
          {/* Hover content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-2 bg-black/50 rounded-full px-3 py-2">
                <Eye className="h-4 w-4" />
                <span className="text-sm font-medium">View</span>
              </div>
            </div>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-muted-foreground">
              {photo.caption}
            </h3>
            <p className="text-xs italic text-muted-foreground/80 font-serif">
              "{photo.quote}"
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
