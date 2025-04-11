"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, ArrowRight, Brain, ChevronDown, ChevronUp, Clock, Lightbulb, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"

const insights = [
  {
    id: 1,
    title: "Peak Email Times",
    description: "You receive most emails between 9-11 AM. Consider scheduling focused email time during this period.",
    icon: Clock,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: 2,
    title: "Response Rate Improvement",
    description: "Your response rate has improved by 15% this month. Keep up the good work!",
    icon: Sparkles,
    color: "bg-green-500/10 text-green-500",
  },
  {
    id: 3,
    title: "Potential Spam Detected",
    description: "We've identified 12 potential spam emails in your inbox. Consider reviewing your filters.",
    icon: AlertCircle,
    color: "bg-amber-500/10 text-amber-500",
  },
]

export function AIInsights() {
  const [isOpen, setIsOpen] = useState(true)
  const [expandedInsight, setExpandedInsight] = useState<number | null>(null)

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>AI Insights</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Hide
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show
              </>
            )}
          </Button>
        </div>
        <CardDescription>AI-powered insights based on your email activity</CardDescription>
      </CardHeader>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <CardContent className="grid gap-4 pt-0">
            <AnimatePresence>
              {insights.map((insight) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader
                      className="cursor-pointer p-4"
                      onClick={() => setExpandedInsight(expandedInsight === insight.id ? null : insight.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className={`rounded-full p-2 ${insight.color}`}>
                            <insight.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <CardTitle className="text-base">{insight.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{insight.description}</CardDescription>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          {expandedInsight === insight.id ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <AnimatePresence>
                      {expandedInsight === insight.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent className="border-t bg-muted/30 p-4">
                            <div className="space-y-4">
                              <p className="text-sm">
                                Based on your email patterns, we've generated this insight to help you optimize your
                                workflow.
                              </p>
                              <div className="flex items-center gap-2">
                                <Lightbulb className="h-4 w-4 text-amber-500" />
                                <p className="text-sm font-medium">Recommended Action</p>
                              </div>
                              <p className="text-sm">
                                {insight.id === 1 &&
                                  "Block 9-11 AM in your calendar for email processing to improve productivity."}
                                {insight.id === 2 &&
                                  "Share your communication strategies with team members to improve overall team response rates."}
                                {insight.id === 3 && "Review and update your spam filters in the settings page."}
                              </p>
                              <Button variant="outline" size="sm" className="gap-1">
                                Take Action
                                <ArrowRight className="h-3 w-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

