"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram, Youtube, Send, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sherzod@example.com",
    href: "mailto:sherzod@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Seoul, South Korea",
    href: "#",
  },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
  { icon: Send, href: "#", label: "Telegram", color: "hover:text-blue-500" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

    const text = `
📩 *New Contact Form Submission*
━━━━━━━━━━━━━━
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
💬 Message: ${formData.message}
`

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      })

      alert("✅ Message sent successfully!")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
      alert("❌ Failed to send message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Get In <span className="text-accent">Touch</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Ready to start your Korean language journey or discuss business opportunities? I'd love to hear from
                you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Send a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        required
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h2>

                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <info.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-muted-foreground text-sm sm:text-base">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-all ${social.color}`}
                        aria-label={social.label}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <Card className="p-4 sm:p-6 bg-accent/5 border-accent/20">
                  <h3 className="font-bold mb-2">Available for:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Korean Language Tutoring</li>
                    <li>• Business Consulting</li>
                    <li>• Marketing Strategy</li>
                    <li>• Cultural Exchange Programs</li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
