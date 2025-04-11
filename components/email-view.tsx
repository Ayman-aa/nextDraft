"use client"

import { useState } from "react"
import Image from "next/image"
import { format } from "date-fns"
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Clock,
  Forward,
  MoreHorizontal,
  Reply,
  ReplyAll,
  Star,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function EmailView() {
  const [starred, setStarred] = useState(false)

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Archive className="h-4 w-4" />
                  <span className="sr-only">Archive</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Archive</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Delete</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Clock className="h-4 w-4" />
                  <span className="sr-only">Snooze</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Snooze</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold">Project Update - Q2 Goals</h1>

          <div className="mt-4 flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-primary">
                  AJ
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">Alex Johnson</p>
                  <span className="text-xs text-muted-foreground">alex@example.com</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  To: me - {format(new Date(2023, 3, 15, 14, 30), "MMM d, yyyy 'at' h:mm a")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className={starred ? "text-yellow-500" : ""}
                onClick={() => setStarred(!starred)}
              >
                <Star className="h-4 w-4" />
                <span className="sr-only">{starred ? "Unstar" : "Star"}</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                  <DropdownMenuItem>Mute conversation</DropdownMenuItem>
                  <DropdownMenuItem>Block sender</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p>Hi Team,</p>
            <p>
              I wanted to share the latest updates on our Q2 goals and progress so far. We've made significant strides
              in several key areas, and I'm excited about the momentum we're building.
            </p>
            <p>Here's a summary of our current status:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Product Development: On track with the new feature rollout</li>
              <li>Marketing Campaigns: Exceeding expectations with a 15% increase in engagement</li>
              <li>Customer Retention: Improved by 7% compared to Q1</li>
              <li>Revenue Growth: Currently at 12% growth, aiming for 15% by end of quarter</li>
            </ul>
            <p>
              Please review the attached documents for more detailed information. I'd like to discuss these points
              further in our team meeting tomorrow.
            </p>
            <p>Let me know if you have any questions or concerns before then.</p>
            <p>
              Best regards,
              <br />
              Alex
            </p>
          </div>

          <div className="mt-6 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">2 Attachments</p>
              <Button variant="outline" size="sm">
                Download All
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-3">
                <div className="relative mb-2 h-24 w-full overflow-hidden rounded bg-muted">
                  <Image
                    src="//placeholder.svg?height=100&width=200"
                    alt="Q2 Goals Document"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium">Q2_Goals.pdf</p>
                <p className="text-xs text-muted-foreground">2.4 MB</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="relative mb-2 h-24 w-full overflow-hidden rounded bg-muted">
                  <Image
                    src="//placeholder.svg?height=100&width=200"
                    alt="Progress Report"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium">Progress_Report.xlsx</p>
                <p className="text-xs text-muted-foreground">1.8 MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-4">
        <div className="mx-auto flex max-w-3xl items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Reply className="mr-2 h-4 w-4" />
                  Reply
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reply</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ReplyAll className="h-4 w-4" />
                  <span className="sr-only">Reply All</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reply All</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Forward className="h-4 w-4" />
                  <span className="sr-only">Forward</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Forward</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

