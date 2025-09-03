"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { PageTransitionOverlay } from './pageTransitionOverlay'

interface TransitionContextType {
  isTransitioning: boolean
  startTransition: () => void
  endTransition: () => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function useTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider")
  }
  return context
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"in" | "out">("in")

  const startTransition = useCallback(() => {
    setDirection("in")
    setIsTransitioning(true)
  }, [])

  const endTransition = useCallback(() => {
    setDirection("out")
    // Remove overlay after out animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 700)
  }, [])

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition, endTransition }}>
      {children}
      {isTransitioning && <PageTransitionOverlay direction={direction} />}
    </TransitionContext.Provider>
  )
}
