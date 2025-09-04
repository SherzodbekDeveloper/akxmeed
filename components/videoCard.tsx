"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Play, Volume2, VolumeX } from "lucide-react"

interface VideoCardProps {
  video: { src: string; title: string, href: string }
  idx: number
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>
  activeVideo: number | null
  toggleSound: (index: number) => void
}

export function VideoCard({
  video,
  idx,
  videoRefs,
  activeVideo,
  toggleSound,
}: VideoCardProps) {
  useEffect(() => {
    const vid = videoRefs.current[idx]
    if (vid) {
      vid.muted = activeVideo !== idx
    }
  }, [activeVideo, idx, videoRefs])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
    >
      <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
        <CardContent className="p-0 relative h-full flex flex-col">
          <div className="relative w-full aspect-[9/16]">
            <video
              ref={(el) => {
                videoRefs.current[idx] = el
              }}
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 "
            />

            <button
              onClick={() => toggleSound(idx)}
              className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
            >
              {activeVideo === idx ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-between p-4 space-y-3">
            <h3 className="text-lg font-semibold text-center line-clamp-2">
              {video.title}
            </h3>
            <a href={video.href} >
              <Button variant="outline" className="w-full group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Videoni ko‘rish
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
