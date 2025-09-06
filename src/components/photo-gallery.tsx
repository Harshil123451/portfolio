"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { PhotoCard } from "@/components/photo-card"
import { LightboxModal } from "@/components/lightbox-modal"
import { cn } from "@/lib/utils"

interface Photo {
  src: string
  alt: string
  caption: string
  quote: string
}

interface PhotoGalleryProps {
  photos: readonly Photo[]
  className?: string
}

export function PhotoGallery({ photos, className }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)

  const handlePhotoClick = (index: number) => {
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setSelectedIndex(null)
  }

  const handleNavigate = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
        {photos.map((photo, index) => (
          <PhotoCard
            key={`${photo.src}-${index}`}
            photo={photo}
            index={index}
            onClick={() => handlePhotoClick(index)}
          />
        ))}
      </div>

      <LightboxModal
        isOpen={selectedIndex !== null}
        onClose={handleClose}
        photos={photos}
        currentIndex={selectedIndex || 0}
        onNavigate={handleNavigate}
      />
    </>
  )
}
