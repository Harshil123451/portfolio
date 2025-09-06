"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Photo {
  src: string
  alt: string
  caption: string
  quote: string
}

interface LightboxModalProps {
  isOpen: boolean
  onClose: () => void
  photos: readonly Photo[]
  currentIndex: number
  onNavigate: (index: number) => void
}

export function LightboxModal({ 
  isOpen, 
  onClose, 
  photos, 
  currentIndex, 
  onNavigate 
}: LightboxModalProps) {
  const currentPhoto = photos[currentIndex]

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          e.preventDefault()
          onNavigate(currentIndex > 0 ? currentIndex - 1 : photos.length - 1)
          break
        case "ArrowRight":
          e.preventDefault()
          onNavigate(currentIndex < photos.length - 1 ? currentIndex + 1 : 0)
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate])

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!currentPhoto) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="relative h-full w-full flex items-center justify-center p-4 overflow-hidden">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation buttons */}
            {photos.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    onNavigate(currentIndex > 0 ? currentIndex - 1 : photos.length - 1)
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    onNavigate(currentIndex < photos.length - 1 ? currentIndex + 1 : 0)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex items-center justify-center w-full h-full">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 85vw, 80vw"
                  className="max-w-[80vw] max-h-[80vh] w-auto h-auto object-contain"
                  priority
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '80vw',
                    maxHeight: '80vh'
                  }}
                />
              </div>
              
              {/* Caption */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6"
              >
                <div className="text-white text-center">
                  <h3 className="text-base md:text-lg font-medium mb-1">
                    {currentPhoto.caption}
                  </h3>
                  <p className="text-xs md:text-sm text-white/80 italic font-serif">
                    "{currentPhoto.quote}"
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Photo counter */}
            {photos.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                {currentIndex + 1} / {photos.length}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
