"use client"

import { motion } from "framer-motion"

export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full mx-auto"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h3 className="text-lg font-medium">Loading...</h3>
          <p className="text-sm text-muted-foreground">
            Preparing your portfolio experience
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export function LoadingSpinner({ size = "default" }: { size?: "sm" | "default" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    default: "w-6 h-6", 
    lg: "w-8 h-8"
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-2 border-primary/20 border-t-primary rounded-full`}
    />
  )
}

export function LoadingCard() {
  return (
    <div className="space-y-3">
      <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
      <div className="h-3 bg-muted animate-pulse rounded w-1/2" />
      <div className="h-3 bg-muted animate-pulse rounded w-2/3" />
    </div>
  )
}
