import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from '@/components/theme-provider'
import { Suspense } from 'react'
import { Analytics } from "@vercel/analytics/next"
import Footer from '@/components/footer'
import { TransitionProvider } from '@/components/transition-provider'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sherzod's Portfolio",
  description: "Korean Language Teacher, Businessman, and Marketologist",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider defaultTheme="dark" storageKey="sherzod-portfolio-theme">
          <Suspense fallback={null}>
            <div className="min-h-screen flex flex-col">
              <main className="flex-1">
                <TransitionProvider>{children}</TransitionProvider>
                <Toaster position='top-center' />
              </main>
              <div className="[&:has(~#home-hero)]:hidden">
                <Footer />
              </div>
            </div>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
