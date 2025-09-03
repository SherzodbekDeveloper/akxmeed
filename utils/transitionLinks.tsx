"use client"

import Link, { type LinkProps } from "next/link"
import type React from "react"
import { useRouter } from "next/navigation"
import { useTransition } from "@/components/transition-provider"

interface TransitionLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">, LinkProps {
  children: React.ReactNode
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const EnhancedTransitionLink: React.FC<TransitionLinkProps> = ({ children, href, ...props }) => {
  const router = useRouter()
  const { startTransition, endTransition } = useTransition()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    // Start the transition animation
    startTransition()

    // Wait for the "in" animation to complete
    await sleep(700)

    // Navigate to the new page
    if (typeof href === "string") {
      router.push(href)
    }

    // Wait a bit for the new page to load, then start the "out" animation
    await sleep(100)
    endTransition()
  }

  return (
    <Link {...props} href={href} onClick={handleClick}>
      {children}
    </Link>
  )
}
