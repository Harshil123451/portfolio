"use client"

import * as React from "react"
import { useRouter, usePathname } from "next/navigation"

type Side = "professional" | "photography"

interface SideContextType {
  currentSide: Side
  setCurrentSide: (side: Side) => void
  isPhotographyMode: boolean
}

const SideContext = React.createContext<SideContextType | undefined>(undefined)

export function SideProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  
  // Determine current side based on pathname
  const currentSide: Side = pathname.startsWith("/photography") ? "photography" : "professional"
  
  const setCurrentSide = React.useCallback((side: Side) => {
    if (side === "photography") {
      router.push("/photography")
    } else {
      router.push("/")
    }
  }, [router])

  const isPhotographyMode = currentSide === "photography"

  const value = React.useMemo(() => ({
    currentSide,
    setCurrentSide,
    isPhotographyMode,
  }), [currentSide, setCurrentSide, isPhotographyMode])

  return (
    <SideContext.Provider value={value}>
      {children}
    </SideContext.Provider>
  )
}

export function useSide() {
  const context = React.useContext(SideContext)
  if (context === undefined) {
    throw new Error("useSide must be used within a SideProvider")
  }
  return context
}
