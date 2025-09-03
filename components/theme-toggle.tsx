"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion } from "framer-motion"
import { useHasMounted } from "@/hooks/useHasMounted" 
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const hasMounted = useHasMounted()


  if (!hasMounted) return null

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-10 h-10 rounded-full bg-muted hover:bg-accent transition-colors flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? 90 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -90,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon size={18} />
      </motion.div>
    </motion.button>
  )
}
