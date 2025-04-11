"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Download, Filter, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { StatCounter } from "@/components/stat-counter"
import { EmailVolumeChart } from "@/components/email-volume-chart"
import { ResponseTimeChart } from "@/components/response-time-chart"
import { CategoryDistributionChart } from "@/components/category-distribution-chart"
import { AIInsights } from "@/components/ai-insights"

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("This Week")

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Email Analytics</h1>
          <p className="text-muted-foreground">Track and analyze your email activity</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                <Calendar className="h-4 w-4" />
                {dateRange}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setDateRange("Today")}>Today</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange("This Week")}>This Week</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange("This Month")}>This Month</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange("Last 3 Months")}>Last 3 Months</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Refresh</span>
          </Button>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Emails</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <StatCounter end={1254} />
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500">+12%</span> from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <StatCounter end={42} suffix=" min" />
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500">-15%</span> from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Open Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <StatCounter end={87} suffix="%" />
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500">+5%</span> from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Unread Emails</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <StatCounter end={24} />
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-rose-500">+8%</span> from last period
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="volume">Email Volume</TabsTrigger>
          <TabsTrigger value="response">Response Time</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Email Volume</CardTitle>
                <CardDescription>Number of emails sent and received over time</CardDescription>
              </CardHeader>
              <CardContent>
                <EmailVolumeChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
                <CardDescription>Average time to respond to emails</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponseTimeChart />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Breakdown of emails by category</CardDescription>
            </CardHeader>
            <CardContent>
              <CategoryDistributionChart />
            </CardContent>
          </Card>
          <AIInsights />
        </TabsContent>
        <TabsContent value="volume">
          <Card>
            <CardHeader>
              <CardTitle>Email Volume</CardTitle>
              <CardDescription>Detailed analysis of email volume over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <EmailVolumeChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="response">
          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
              <CardDescription>Detailed analysis of response times</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponseTimeChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Detailed breakdown of emails by category</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <CategoryDistributionChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

