import { ArrowRight, CheckCircle, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroAnimation } from "@/components/hero-animation"
import { FeatureCarousel } from "@/components/feature-carousel"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { StatCounter } from "@/components/stat-counter"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-4 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-primary">Reimagine</span> your email experience
            </h1>
            <p className="text-xl text-muted-foreground">
              Pulse transforms how you manage communications with AI-powered tools, beautiful design, and intuitive
              workflows.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                See how it works
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Features that transform your workflow
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Discover how Pulse helps you take control of your inbox and boost your productivity.
            </p>
          </div>

          <FeatureCarousel />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{feature.description}</CardDescription>
                  <Button variant="link" className="group/btn p-0">
                    Try Now
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">Trusted by thousands</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Join the community of professionals who have transformed their email experience.
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm">
              <StatCounter end={2500000} suffix="+" className="text-4xl font-bold text-primary" />
              <p className="mt-2 text-muted-foreground">Emails Processed Daily</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm">
              <StatCounter end={98} suffix="%" className="text-4xl font-bold text-primary" />
              <p className="mt-2 text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm">
              <StatCounter end={250000} suffix="+" className="text-4xl font-bold text-primary" />
              <p className="mt-2 text-muted-foreground">Active Users</p>
            </div>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Ready to transform your email experience?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl">
              Join thousands of professionals who have already made the switch to Pulse.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: Star,
    title: "AI-Powered Prioritization",
    description: "Smart algorithms learn your preferences and automatically prioritize important messages.",
  },
  {
    icon: CheckCircle,
    title: "Focus Mode",
    description: "Eliminate distractions with a clean, focused interface designed for productivity.",
  },
  {
    icon: ArrowRight,
    title: "Smart Templates",
    description: "Create and save templates for common responses to save time and ensure consistency.",
  },
]

