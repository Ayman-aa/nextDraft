"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
// Remove motion import temporarily
// import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Smart Inbox",
    description: "AI-powered inbox that automatically categorizes and prioritizes your emails.",
    // Update image path to one that exists
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Focus Mode",
    description: "Eliminate distractions with a clean, focused interface designed for productivity.",
    // Update image path to one that exists
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Advanced Analytics",
    description: "Gain insights into your email habits and optimize your communication.",
    // Update image path to one that exists
    image:"/placeholder.svg?height=400&width=600",
  },
]

export function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragStartX, setDragStartX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragStartX(e.clientX)
  }

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    const dragEndX = e.clientX
    const difference = dragStartX - dragEndX

    if (difference > 50) {
      handleNext()
    } else if (difference < -50) {
      handlePrev()
    }
  }

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden">
      <div
        ref={carouselRef}
        className="relative h-[400px] cursor-grab touch-pan-y"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {features.map((feature, index) => (
            // Replace motion.div with regular div
            <div
              key={index}
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center transition-all duration-500",
                index === currentIndex 
                  ? "opacity-100 scale-100 rotate-0" 
                  : "opacity-0 scale-90 rotate-0 pointer-events-none"
              )}
              // Remove framer motion props
            >
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl shadow-lg">
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  fill 
                  className="object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' text-anchor='middle' alignment-baseline='middle' fill='%23999'%3EImage%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                index === currentIndex ? "w-6 bg-primary" : "bg-muted hover:bg-primary/50",
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}