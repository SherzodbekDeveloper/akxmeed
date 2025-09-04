"use client"

import Navigation from "@/components/navigation"
import TypingAnimation from '@/components/typing-animation'
import { Button } from "@/components/ui/button"
import { Card } from '@/components/ui/card'
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Instagram, Mail, MapPin, Phone, Send, Users } from "lucide-react"
import Image from "next/image"



import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { VideoCard } from '@/components/videoCard'
import { useRef, useState } from 'react'
import { toast } from "sonner"



const videos = [
  { src: "/vd1.mp4", title: "AXMED SCHOOL RASMAN OCHIQ 🤩", href: 'https://www.instagram.com/reel/DN28z0S2mMM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { src: "/vd2.mp4", title: "Ona siz uchun harakatdaman⚡️", href: 'https://www.instagram.com/reel/C-kidSjtwl1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { src: "/vd3.mp4", title: "Janubiy Koreya 500.000 kishi uchun bo'sh ish o'rinlari taklif qilmoqda⚡️", href: 'https://www.instagram.com/reel/DMz91VdsSPL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
]
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "akxmeed@example.com",
    href: "mailto:akxmeed@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+998 95 779 19 03",
    href: "tel:+998957791903",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Seoul, South Korea",
    href: "#",
  },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/akxmeed/", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Send, href: "https://t.me/akxmeed", label: "Telegram", color: "hover:text-blue-500" },
]




const travelData = [
  {
    year: "2024",
    country: "Saudi Arabia",
    image: "/tour/saudi.jpg",
    href: 'https://www.instagram.com/stories/highlights/18483278155060586/',
    description:
      "Makkada va Madinada tarixiy joylarni ziyorat qilib, islom madaniyati bilan yanada yaqindan tanishdim. Ruhiy tajriba hayotimdagi eng unutilmas lahzalardan bo‘ldi.",
    link: "https://instagram.com/highlight/saudi-arabia",
  },
  {
    year: "2024",
    country: "Philippines",
    image: "/tour/phill.jpg",
    href: 'https://www.instagram.com/stories/highlights/17852373135316321/',

    description:
      "Tropik orollar va mehmondo‘st xalq orasida dam olib, yangi biznes va madaniyat aloqalarini o‘rnatdim.",
    link: "https://instagram.com/highlight/philippines",
  },
  {
    year: "2024",
    country: "Thailand",
    image: "/tour/thai.jpg",
    href: 'https://www.instagram.com/stories/highlights/18023228243482635/',
    description:
      "Bangkokning shovqin-suronli ko‘chalari va Pattaya plyajlari meni hayratga soldi. Osiyo madaniyatining turfa rang-barangligini his qildim.",
    link: "https://instagram.com/highlight/thailand",
  },
  {
    year: "2024",
    country: "South Korea",
    image: "/tour/seul.jpg",
    href: 'https://www.instagram.com/stories/highlights/17999797430165682/',
    description:
      "Seuldagi zamonaviy hayot va tarixiy joylarni o‘rganib, koreys tili va biznes sohasida tajribamni oshirdim.",
    link: "https://instagram.com/highlight/south-korea",
  },
  {
    year: "2025",
    country: "Kazakhstan",
    image: "/tour/astana.jpg",
    href: 'https://www.instagram.com/stories/highlights/18079354324605652/',
    description:
      "Qozog‘istonning keng dashtlari va boy madaniyati meni ilhomlantirdi. Qo‘shni davlat bilan yaqin aloqalar o‘rnatdim.",
    link: "https://instagram.com/highlight/kazakhstan",
  },
  {
    year: "2025",
    country: "Malaysia",
    image: "/tour/malaysia.jpg",
    href: 'https://www.instagram.com/stories/highlights/17981156159692826/',
    description:
      "Kuala-Lumpurdagi zamonaviy me’morchilik va tabiat go‘zalligi menga katta taassurot qoldirdi.",
    link: "https://instagram.com/highlight/malaysia",
  },
  {
    year: "2025",
    country: "China",
    image: "/tour/china.jpg",
    href: 'https://www.instagram.com/stories/highlights/18030534536061112/',
    description:
      "Pekin va Shanxayda madaniyat va texnologiyaning uyg‘unligini his qilib, yangi imkoniyatlarni kashf qildim.",
    link: "https://instagram.com/highlight/china",
  },
  {
    year: "2025",
    country: "Indonesia",
    image: "/tour/indonesia.jpg",
    href: 'https://www.instagram.com/stories/highlights/18009332693450595/',
    description:
      "Bali orolining tabiiy go‘zalligi va tinch hayoti ruhiy xotirjamlik berdi.",
    link: "https://instagram.com/highlight/indonesia",
  },
  {
    year: "2025",
    country: "Singapore",
    image: "/tour/singapore.jpg",
    href: 'https://www.instagram.com/stories/highlights/18019027625200812/',
    description:
      "Singapurning innovatsion shaharsozligi va boy madaniy merosi menga katta motivatsiya berdi.",
    link: "https://instagram.com/highlight/singapore",
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


export default function HeroPage() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })


  const toggleSound = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        const isMuted = video.muted
        video.muted = !isMuted
        setActiveVideo(!isMuted ? null : index)
      } else {
        video.muted = true
      }
    })
  }
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

      toast.success("Xabaringiz muvaffaqiyatli yuborildi!")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error)
      toast.error("Xabar yuborilmadi. Qaytadan urinib ko‘ring.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
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
                <div className="hover:scale-102 transition-transform duration-300">
                  <Image
                    src="/hero.jpg"
                    alt="Ali - Professional Portret"
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
                  G‘oyalarni{" "}
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
                    Haqiqatga
                  </motion.span>{" "}
                  Aylantirish – <span className="text-accent">Ta’lim</span> va{" "}
                  <span className="text-accent">Biznes</span> bilan.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty mx-auto lg:mx-0"
                >
                  Tanishing, <strong>Ali S. Axmedov</strong> — bloger, marketing mutaxassisi va tadbirkor.
                  <strong> Axmed School</strong> va <strong>Axmed Agency</strong> asoschisi sifatida u yoshlar uchun
                  zamonaviy ingliz va koreys tili kurslarini yo‘lga qo‘ygan. Ali marketing bo‘yicha keng tajribaga ega
                  bo‘lib, bizneslarni global bozorda rivojlantirishda yordam beradi. Uning maqsadi — bilim va
                  imkoniyatlar ko‘prigini yaratish.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="about">
                  <Button size="lg" className="group w-full sm:w-auto hover-lift">
                    Men haqimda
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="group bg-transparent w-full sm:w-auto hover-lift">
                    <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Bog‘lanish
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id='about' className='bg-gray-50 dark:bg-gray-900'>
        <div className="min-h-screen bg-background">

          <div className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto space-y-4 sm:space-y-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                <span className="text-accent">Kadr</span> Orqasida
              </h2>
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
                      alt="Ali Portreti"
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
                      Ali Sakhobovich —{" "}
                      <span className="text-accent">
                        <TypingAnimation texts={["Bloger", "Marketolog", "Biznesmen"]} speed={150} delay={2000} />
                      </span>
                    </h1>

                    <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                      <p>
                        Hozirda <span className="font-semibold text-foreground">Seul, Janubiy Koreya</span> shahrida tahsil olib,
                        ijodkorlik, strategiya va tadbirkorlik atrofida o‘z brendimni rivojlantirmoqdaman.
                        Ishimning asosiy maqsadi — <span className="font-semibold text-foreground">biznes innovatsiyalari</span>ni
                        real hayotdagi rivojlanish imkoniyatlari bilan bog‘lash.
                      </p>

                      <p className="hidden sm:block">
                        Madaniyat, sayohat va kontent yaratishga bo‘lgan qiziqishim meni marketing va
                        tadbirkorlik sohasiga olib keldi. Vaqt o‘tishi bilan bir nechta muvaffaqiyatli
                        loyihalarni yo‘lga qo‘ydim, ijod va strategiyani uyg‘unlashtirishni o‘rgandim.
                      </p>

                      <p>
                        Bugungi kunda <strong>Axmed School</strong> va <strong>Axmed Agency</strong> loyihalariga rahbarlik qilaman.
                        Biz ta’lim va biznesni yangicha yondashuvlar bilan rivojlantirib, yoshlar va brendlar uchun
                        imkoniyatlar yaratmoqdamiz.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a href="contact">
                        <Button
                          size="lg"
                          className="bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto group"
                        >
                          <Users className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                          MENTORLIK
                        </Button>
                      </a>
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
                  <span className="text-accent">Axmed</span> School
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Card 1 */}
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
                          alt="Axmed School"
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h3 className="text-xl font-bold">Koreys va Ingliz tilini ishonch bilan o‘rganing</h3>
                        <p className="text-muted-foreground">
                          A School — innovatsion va ijodiy yondashuvga ega koreys va ingliz tili maktabi.
                          Zamonaviy metodlar va interaktiv darslar orqali talabalarimiz koreys va ingliz tilini
                          ishonch bilan va tabiiy o‘zlashtirishlari mumkin.
                        </p>
                        <Button variant="outline" className="w-full sm:w-auto" asChild>
                          <a href="https://www.instagram.com/axmed_school/" target="_blank" rel="noopener noreferrer">
                            Batafsil
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>

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
                          alt="Axmed School darslari"
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h3 className="text-xl font-bold">Interaktiv Koreys va Ingliz Kurslari</h3>
                        <p className="text-muted-foreground">
                          Boshlovchilar va ilg‘orlar uchun maxsus kurslarimiz orqali siz koreys va ingliz tilida
                          bemalol muloqot qilishni o‘rganasiz. Madaniyat, suhbat mashg‘ulotlari va
                          qiziqarli materiallar bilan darslar yanada samarali.
                        </p>
                        <Button variant="outline" className="w-full sm:w-auto" asChild>
                          <a href="https://www.instagram.com/axmed_school/" target="_blank" rel="noopener noreferrer">
                            Boshlash
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
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-center">
                    <span className="text-accent">Kadr</span> Orqasida
                  </h2>
                </motion.section>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
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

              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 sm:space-y-8"
                id='travel'
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-center">
                  Sayohat <span className="text-accent">Yo‘li</span>
                </h2>

                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
                  <div className="md:hidden absolute left-8 w-0.5 h-full bg-border"></div>

                  <div className="space-y-8 sm:space-y-12">
                    {travelData.map((travel, index) => (
                      <motion.div
                        key={travel.country}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                        className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                      >
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

                            {travel.href && (
                              <a href={travel.href} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="w-full">
                                  Tomosha qilish
                                </Button>
                              </a>
                            )}
                          </Card>
                        </div>
                        <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10"></div>
                        <div className="hidden md:block w-5/12"></div>
                      </motion.div>

                    ))}
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Loyihalar & <span className='text-red-400'>Blog</span>
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, idx) => (
              <VideoCard
                key={idx}
                idx={idx}
                video={video}
                videoRefs={videoRefs}
                activeVideo={activeVideo}
                toggleSound={toggleSound}
              />
            ))}
          </div>
        </div>
      </section>

      <section id='contact' className="min-h-screen bg-background">

        <div className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Biz bilan <span className="text-accent">bog‘laning</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Savollaringiz, takliflaringiz yoki biznes hamkorlik bo‘yicha fikrlaringiz bo‘lsa, bemalol yozing.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Xabar yuborish</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ismingiz
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="To‘liq ismingiz"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefon raqamingiz
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+998 90 123 45 67"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email manzilingiz
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Xabaringiz
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Taklif yoki savolingizni yozing..."
                        rows={6}
                        required
                        className="resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full group">
                      <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                      Xabarni yuborish
                    </Button>
                  </form>
                </Card>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Bog‘lanish ma’lumotlari</h2>
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
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Ijtimoiy tarmoqlar</h3>
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
                  <h3 className="font-bold mb-2">Xizmatlar:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Koreys va Ingliz tili darslari</li>
                    <li>• Biznes konsalting</li>
                    <li>• Marketing strategiyasi</li>
                    <li>• Madaniy almashinuv dasturlari</li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}