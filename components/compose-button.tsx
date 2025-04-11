"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Paperclip, Send, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export function ComposeButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCompose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button onClick={toggleCompose} className="fixed bottom-4 right-4 shadow-lg" size="lg">
        {isOpen ? (
          <>
            <X className="mr-2 h-4 w-4" /> Close
          </>
        ) : (
          <>
            <span className="mr-2">+</span> Compose
          </>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-full max-w-lg rounded-lg border bg-background shadow-xl"
          >
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-medium">New Message</h2>
              <Button variant="ghost" size="icon" onClick={toggleCompose}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <Input placeholder="To" className="border-0 border-b px-0 focus-visible:ring-0" />
                </div>
                <div>
                  <Input placeholder="Subject" className="border-0 border-b px-0 focus-visible:ring-0" />
                </div>
                <Textarea
                  placeholder="Compose your message..."
                  className="min-h-[200px] resize-none border-0 focus-visible:ring-0"
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-t p-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Paperclip className="h-4 w-4" />
                  <span className="sr-only">Attach</span>
                </Button>
              </div>
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Send
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

