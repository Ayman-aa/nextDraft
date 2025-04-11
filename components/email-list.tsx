"use client"

import { useState } from "react"
import { format } from "date-fns"
import { motion } from "framer-motion"
import { Archive, Clock, Star, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Email {
  id: string
  read: boolean
  starred: boolean
  sender: {
    name: string
    email: string
    avatar?: string
  }
  subject: string
  preview: string
  date: Date
  hasAttachment: boolean
}

// Sample data
const generateEmails = (category: string): Email[] => {
  const baseEmails: Email[] = [
    {
      id: "1",
      read: false,
      starred: true,
      sender: {
        name: "Alex Johnson",
        email: "alex@example.com",
      },
      subject: "Project Update - Q2 Goals",
      preview: "I wanted to share the latest updates on our Q2 goals and progress so far...",
      date: new Date(2023, 3, 15, 14, 30),
      hasAttachment: true,
    },
    {
      id: "2",
      read: true,
      starred: false,
      sender: {
        name: "Sarah Miller",
        email: "sarah@example.com",
      },
      subject: "Meeting Notes - Product Review",
      preview: "Attached are the notes from yesterday's product review meeting...",
      date: new Date(2023, 3, 14, 11, 20),
      hasAttachment: true,
    },
    {
      id: "3",
      read: false,
      starred: false,
      sender: {
        name: "Team Notifications",
        email: "notifications@example.com",
      },
      subject: "New comment on your document",
      preview: "Michael left a comment on your document 'Q2 Marketing Strategy'...",
      date: new Date(2023, 3, 14, 9, 45),
      hasAttachment: false,
    },
    {
      id: "4",
      read: true,
      starred: true,
      sender: {
        name: "David Wilson",
        email: "david@example.com",
      },
      subject: "Feedback on your presentation",
      preview: "I just wanted to say that your presentation yesterday was excellent...",
      date: new Date(2023, 3, 13, 16, 15),
      hasAttachment: false,
    },
    {
      id: "5",
      read: true,
      starred: false,
      sender: {
        name: "Emily Chen",
        email: "emily@example.com",
      },
      subject: "Question about the new feature",
      preview: "I was testing the new feature and had a question about how it works...",
      date: new Date(2023, 3, 13, 14, 50),
      hasAttachment: false,
    },
    {
      id: "6",
      read: false,
      starred: false,
      sender: {
        name: "Support Team",
        email: "support@example.com",
      },
      subject: "Your ticket has been resolved",
      preview: "We're happy to inform you that your support ticket #45678 has been resolved...",
      date: new Date(2023, 3, 12, 11, 30),
      hasAttachment: false,
    },
    {
      id: "7",
      read: true,
      starred: false,
      sender: {
        name: "Marketing Newsletter",
        email: "marketing@example.com",
      },
      subject: "This Week in Marketing: Top Trends",
      preview: "Discover the top marketing trends this week and how they can impact your strategy...",
      date: new Date(2023, 3, 12, 9, 0),
      hasAttachment: false,
    },
  ]

  if (category === "social") {
    return baseEmails.slice(2, 5)
  } else if (category === "promotions") {
    return baseEmails.slice(4, 7)
  }

  return baseEmails
}

interface EmailListProps {
  category?: string
}

export function EmailList({ category = "primary" }: EmailListProps) {
  const emails = generateEmails(category)
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null)
  const [hoveredEmail, setHoveredEmail] = useState<string | null>(null)

  const handleEmailClick = (id: string) => {
    setSelectedEmail(id)
  }

  const formatEmailDate = (date: Date) => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return format(date, "h:mm a")
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday"
    } else {
      return format(date, "MMM d")
    }
  }

  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-auto">
          <ul className="divide-y">
            {emails.map((email) => (
              <motion.li
                key={email.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative cursor-pointer transition-colors",
                  email.read ? "bg-background" : "bg-primary/5",
                  selectedEmail === email.id && "bg-primary/10",
                  hoveredEmail === email.id && "bg-muted",
                )}
                onClick={() => handleEmailClick(email.id)}
                onMouseEnter={() => setHoveredEmail(email.id)}
                onMouseLeave={() => setHoveredEmail(null)}
              >
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className="flex flex-col items-center gap-2 pt-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn("h-6 w-6 text-muted-foreground", email.starred && "text-yellow-500")}
                    >
                      <Star className="h-4 w-4" />
                      <span className="sr-only">{email.starred ? "Unstar" : "Star"}</span>
                    </Button>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className={cn("truncate text-sm", !email.read && "font-medium")}>{email.sender.name}</p>
                      <p className="whitespace-nowrap text-xs text-muted-foreground">{formatEmailDate(email.date)}</p>
                    </div>
                    <p className={cn("truncate text-sm", !email.read && "font-medium")}>{email.subject}</p>
                    <p className="truncate text-xs text-muted-foreground">{email.preview}</p>
                  </div>
                </div>

                {/* Action buttons that appear on hover */}
                {hoveredEmail === email.id && (
                  <div className="absolute right-2 top-1/2 flex -translate-y-1/2 gap-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Archive className="h-4 w-4" />
                          <span className="sr-only">Archive</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Archive</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Delete</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Clock className="h-4 w-4" />
                          <span className="sr-only">Snooze</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Snooze</TooltipContent>
                    </Tooltip>
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </TooltipProvider>
  )
}

