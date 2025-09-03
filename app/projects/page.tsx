"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Korean Learning Platform",
    description:
      "Interactive online platform for Korean language learning with gamified lessons and cultural insights.",
    image: "",
    tags: ["Education", "Korean", "Interactive"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cultural Exchange Program",
    description:
      "Business initiative connecting Korean and international students through structured exchange programs.",
    image: "/diverse-students-in-cultural-exchange-program.jpg",
    tags: ["Business", "Culture", "Education"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Marketing Campaign Analytics",
    description: "Data-driven marketing campaigns for educational institutions targeting Korean language learners.",
    image: "/images/project-dashboard.png",
    tags: ["Marketing", "Analytics", "Strategy"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Language Assessment Tool",
    description: "Comprehensive Korean proficiency assessment system for educational institutions.",
    image: "/language-assessment-interface-with-korean-text.jpg",
    tags: ["Assessment", "Korean", "Tool"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Business Consulting Portal",
    description: "Professional consulting services for businesses entering Korean markets.",
    image: "/professional-business-consulting-website.jpg",
    tags: ["Business", "Consulting", "Korea"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Educational Content Hub",
    description: "Centralized platform for Korean educational resources and teaching materials.",
    image: "/educational-content-library-with-korean-materials.jpg",
    tags: ["Education", "Content", "Resources"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                My <span className="text-accent">Projects</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                A showcase of my work in Korean language education, business development, and marketing initiatives.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="h-full transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>

                    <div className="p-4 sm:p-6 space-y-4 flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 sm:px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link href="/contact">
                          <Button size="sm" className="w-full group">
                            <ExternalLink size={14} className="mr-2 group-hover:translate-x-1 transition-transform" />
                            Get In Touch
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center pt-8 sm:pt-12"
            >
              <Card className="p-6 sm:p-8 bg-accent/5 border-accent/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Interested in Working Together?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, and opportunities to be part of your
                  vision.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Start a Conversation
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
