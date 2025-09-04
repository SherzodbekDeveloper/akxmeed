"use client"
import { motion } from "framer-motion"
import { Heart, Instagram, Send } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/akxmeed", label: "Instagram" },
  { icon: Send, href: "https://t.me/akxmeed", label: "Telegram" },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-background border-t border-border mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-foreground">Ali Sakhobovich</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Blogger • Marketer • Entrepreneur <br />
              Based in Seoul, South Korea
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={14} className="text-accent" /> by Akhmed
            </p>
            <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
