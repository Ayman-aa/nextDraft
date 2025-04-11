"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Pulse has completely transformed how I manage my emails. The AI prioritization is spot on!",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "//placeholder.svg?height=80&width=80",
  },
  {
    quote: "The analytics dashboard gives me insights I never knew I needed. I've cut my email time in half.",
    author: "Michael Chen",
    role: "Product Manager",
    avatar: "//placeholder.svg?height=80&width=80",
  },
  {
    quote: "Clean interface, powerful features, and excellent customer support. What more could you ask for?",
    author: "Alex Rodriguez",
    role: "Startup Founder",
    avatar: "//placeholder.svg?height=80&width=80",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-background p-6 shadow-sm md:p-10">
      <Quote className="absolute left-6 top-6 h-12 w-12 text-primary/10" />

      <div className="relative mx-auto h-[200px] md:h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <p className="mb-6 text-lg md:text-xl">"{testimonials[currentIndex].quote}"</p>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={testimonials[currentIndex].avatar || "//placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
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

