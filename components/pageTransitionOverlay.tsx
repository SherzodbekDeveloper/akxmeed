"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export function PageTransitionOverlay({ direction = "in" }: { direction?: "in" | "out" }) {
  const { theme } = useTheme()

  const getBg = () => {
    if (theme === "system") {
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "bg-black text-white" : "bg-white text-black"
      }
      return "bg-black text-white"
    }
    return theme === "dark" ? "bg-black text-white" : "bg-white text-black"
  }

  return (
    <motion.div
      initial={{ scaleY: direction === "in" ? 0 : 1 }}
      animate={{ scaleY: direction === "in" ? 1 : 0 }}
      exit={{ scaleY: direction === "in" ? 1 : 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      style={{ originY: direction === "in" ? 0 : 1 }}
      className={`fixed inset-0 z-[9999] ${getBg()} flex items-center justify-center`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-4xl font-bold tracking-widest"
      >
        Akxmeed
      </motion.h1>
    </motion.div>
  )
}
