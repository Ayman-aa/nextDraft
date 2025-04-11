"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function HeroAnimation() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="relative h-full w-full"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg"
        variants={itemVariants}
      />

      <motion.div
        className="absolute left-[10%] top-[10%] rounded-lg bg-background p-4 shadow-lg"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20"></div>
          <div className="space-y-1">
            <div className="h-3 w-24 rounded-full bg-muted"></div>
            <div className="h-2 w-16 rounded-full bg-muted"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[20%] rounded-lg bg-background p-4 shadow-lg"
        variants={itemVariants}
      >
        <div className="space-y-2">
          <div className="h-3 w-32 rounded-full bg-muted"></div>
          <div className="h-2 w-24 rounded-full bg-muted"></div>
          <div className="h-2 w-28 rounded-full bg-muted"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[30%] rounded-lg bg-background p-4 shadow-lg"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3">
          <div className="space-y-1">
            <div className="h-3 w-20 rounded-full bg-muted"></div>
            <div className="h-2 w-28 rounded-full bg-muted"></div>
          </div>
          <div className="h-8 w-8 rounded-full bg-primary/20"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] right-[10%] rounded-lg bg-background p-4 shadow-lg"
        variants={itemVariants}
      >
        <div className="space-y-2">
          <div className="h-3 w-24 rounded-full bg-muted"></div>
          <div className="h-2 w-32 rounded-full bg-muted"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-background p-6 shadow-xl"
        variants={itemVariants}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-32 rounded-full bg-primary/20"></div>
            <div className="h-4 w-4 rounded-full bg-primary/40"></div>
          </div>
          <div className="h-3 w-full rounded-full bg-muted"></div>
          <div className="h-3 w-3/4 rounded-full bg-muted"></div>
          <div className="h-3 w-5/6 rounded-full bg-muted"></div>
          <div className="h-8 w-24 rounded-md bg-primary/20"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}

