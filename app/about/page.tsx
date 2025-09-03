"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import TypingAnimation from "@/components/typing-animation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar,  Users, Instagram } from "lucide-react"
import Link from "next/link"

const travelData = [
  {
    year: "2022",
    country: "Indonesia",
    image: "/beautiful-indonesia-landscape-with-temples.jpg",
    description: "Explored the rich culture and business opportunities in Southeast Asia.",
  },
  {
    year: "2023",
    country: "Thailand",
    image: "/thailand-temples-and-modern-bangkok-skyline.jpg",
    description: "Studied language education methods and cultural exchange programs.",
  },
  {
    year: "2024",
    country: "South Korea",
    image: "/seoul-modern-cityscape-with-traditional-korean-arc.jpg",
    description: "Advanced Korean language studies and business development initiatives.",
  },
]

const galleryImages = [
  {
    src: "/private/img6.jpg",
    alt: "Professional presentation",
  },
  { src: "/private/img1.jpg", alt: "Team collaboration" },
  { src: "/private/img2.JPG", alt: "Teaching session" },
  { src: "/private/img3.jpg", alt: "Marketing presentation" },
  { src: "/private/img4.jpg", alt: "Networking event" },
  { src: "/private/img5.jpg", alt: "Workshop facilitation" },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-20">

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >

              <div className="relative order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 group">
                  <img
                    src="/private/img11.JPG"
                    alt="Akhmed Portrait"
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover filter grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </div>



              <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                    Akhmed is{" "}
                    <span className="text-accent">
                      <TypingAnimation texts={["Marketolog", "Businessman", "Bloger"]} speed={150} delay={2000} />
                    </span>
                  </h1>

                  <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                    <p>
                      After <span className="font-semibold text-foreground">5+ years of experience</span> in{" "}
                      <span className="font-semibold text-foreground">Korean language education</span>, I now focus on applying
                      innovative teaching methods to transform how people learn languages, connecting culture, business and human
                      behavior. I design comprehensive educational programs with effectiveness and engagement by default.
                    </p>

                    <p className="hidden sm:block">
                      On my journey, I carry stories, dreams, and inspirations that have shaped me into who I am. My path into
                      education began at 20 years old, when I found myself fascinated by Korean culture during my first language
                      exchange. By 25, still self-taught, I had built my first educational program, and realized this was more than
                      a career. It was a calling.
                    </p>

                    <p>
                      Since 2020, I&apos;ve mixed business strategy with educational innovation.{" "}
                      <span className="font-semibold text-foreground">I create comprehensive learning systems</span>, test them with
                      real students, and refine the approach with feedback, analytics, and proven methodologies, delivering results
                      responsibly, at scale.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto group"
                      >
                        <Users className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                        MENTORSHIP
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex items-center justify-center gap-2 bg-transparent w-full sm:w-auto"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                <span className="text-accent">Ahmed</span> School
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Card 1 - About Ahmed School */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden">
                      <img
                        src="/ahmedschool.JPG"
                        alt="Ahmed School"
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold">Learn Korean with Confidence</h3>
                      <p className="text-muted-foreground">
                        Ahmed School is a creative and innovative Korean language school
                        designed to make learning exciting and effective. With modern
                        teaching methods, personalized support, and immersive experiences,
                        we help students master Korean naturally and confidently.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto"
                        asChild
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Discover More
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>

                {/* Card 2 - Courses and Learning Experience */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden">
                      <img
                        src="/ahmedteam.JPG"
                        alt="Ahmed School Korean Classes"
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold">Interactive Korean Courses</h3>
                      <p className="text-muted-foreground">
                        From beginners to advanced learners, our courses combine
                        conversation practice, cultural insights, and engaging materials
                        to make every class fun and productive. Join Ahmed School and
                        start speaking Korean with confidence!
                      </p>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto"
                        asChild
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Start Learning
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.section>


            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                Behind the <span className="text-accent">Scenes</span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[4/3] group cursor-pointer"
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* About Section */}


            {/* Travel Timeline Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                Travel <span className="text-accent">Journey</span>
              </h2>

              <div className="relative">
                {/* Desktop Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

                {/* Mobile Timeline Line */}
                <div className="md:hidden absolute left-8 w-0.5 h-full bg-border"></div>

                <div className="space-y-8 sm:space-y-12">
                  {travelData.map((travel, index) => (
                    <motion.div
                      key={travel.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                      className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                    >
                      {/* Content */}
                      <div
                        className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} pl-16 md:pl-0`}
                      >
                        <Card className="p-4 sm:p-6 space-y-4 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-2 text-accent font-semibold text-sm sm:text-base">
                            <Calendar size={16} />
                            {travel.year}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                            <MapPin size={20} />
                            {travel.country}
                          </h3>
                          <img
                            src={travel.image || "/placeholder.svg"}
                            alt={`${travel.country} ${travel.year}`}
                            className="w-full h-40 sm:h-48 object-cover rounded-lg"
                          />
                          <p className="text-sm sm:text-base text-muted-foreground">{travel.description}</p>
                        </Card>
                      </div>

                      {/* Timeline Dot */}
                      <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10"></div>

                      {/* Desktop Spacer */}
                      <div className="hidden md:block w-5/12"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
