"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Youtube, Send, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"

const navItems = [
  { name: "Bosh sahifa", href: "#" },
  { name: "Haqida", href: "#about" },
  { name: "Sayohat", href: "#travel" },
  { name: "Loyihalar", href: "#projects" },
  { name: "Aloqa", href: "#contact" },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/akxmeed", label: "Instagram" },
  { icon: Send, href: "https://t.me/akxmeed", label: "Telegram" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-lg font-bold tracking-tight">
          Akxmeed
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-accent ${
                pathname === item.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    pathname === item.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <ThemeToggle />
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
