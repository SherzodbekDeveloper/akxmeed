"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { Mail, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { EnhancedTransitionLink } from '@/utils/transitionLinks'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section id="home-hero" className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
                <div className=" hover:scale-102 transition-transform duration-300">
                  <Image
                    src="/hero.jpg"
                    alt="Sherzod - Professional Portrait"
                    width={600}
                    height={700}
                    className="w-full h-auto rounded-2xl shadow-2xl filter grayscale hover:grayscale-0 transition duration-500"
                    priority
                  />
                </div>

                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60 animate-pulse-glow"
                />
                <motion.div
                  animate={{ y: [10, -10, 10], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"
                />
                <motion.div
                  animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-1/2 -left-6 w-4 h-4 bg-accent/30 rounded-full"
                />
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6 lg:space-y-8 order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="space-y-4 lg:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance"
                >
                  Turning Vision Into{" "}
                  <motion.span
                    className="text-accent"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(var(--accent), 0)",
                        "0 0 10px rgba(var(--accent), 0.5)",
                        "0 0 0px rgba(var(--accent), 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Reality
                  </motion.span>{" "}
                  With <span className="text-accent">Teaching</span> And <span className="text-accent">Business</span>.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty mx-auto lg:mx-0"
                >
                  Meet <strong>Ali Sakhobovich</strong> — a passionate bloger, marketing strategist, and
                  entrepreneur. Founder of <strong>Ahmed School</strong> and <strong>Ahmed Agency</strong> in Jizzakh,
                  he’s building bridges between cultures and empowering young minds to succeed.
                  Ahmed School is where Korean language learning becomes inspiring and practical,
                  while Ahmed Agency helps businesses grow with fresh, bold strategies.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <EnhancedTransitionLink href="/about">
                  <Button size="lg" className="group w-full sm:w-auto hover-lift">
                    About me
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </EnhancedTransitionLink>
                <EnhancedTransitionLink href="/contact">
                  <Button variant="outline" size="lg" className="group bg-transparent w-full sm:w-auto hover-lift">
                    <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Contact Me
                  </Button>
                </EnhancedTransitionLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Lightbulb Icon */}

    </div>
  )
}
