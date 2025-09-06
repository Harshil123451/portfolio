"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Code, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Side = "professional" | "photography"

interface SideToggleProps {
  currentSide: Side
  onSideChange: (side: Side) => void
  className?: string
}

export function SideToggle({ currentSide, onSideChange, className }: SideToggleProps) {
  return (
    <div className={cn("flex items-center bg-muted rounded-lg p-1", className)}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onSideChange("professional")}
        className={cn(
          "relative flex items-center gap-2 transition-all duration-200 rounded-md",
          currentSide === "professional" 
            ? "bg-primary text-primary-foreground shadow-sm font-medium" 
            : "hover:bg-background/50 text-muted-foreground hover:text-foreground"
        )}
      >
        <Code className="h-4 w-4" />
        <span className="hidden sm:inline">Professional</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onSideChange("photography")}
        className={cn(
          "relative flex items-center gap-2 transition-all duration-200 rounded-md",
          currentSide === "photography" 
            ? "bg-primary text-primary-foreground shadow-sm font-medium" 
            : "hover:bg-background/50 text-muted-foreground hover:text-foreground"
        )}
      >
        <Camera className="h-4 w-4" />
        <span className="hidden sm:inline">Photography</span>
      </Button>
    </div>
  )
}
