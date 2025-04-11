"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const colors = [
  { name: "Indigo", value: "indigo", color: "#3A36E0" },
  { name: "Cyan", value: "cyan", color: "#0FCCCE" },
  { name: "Violet", value: "violet", color: "#6E56CF" },
  { name: "Rose", value: "rose", color: "#FF7D63" },
  { name: "Green", value: "green", color: "#10B981" },
]

interface ThemeCustomizerProps {
  className?: string
}

export function ThemeCustomizer({ className }: ThemeCustomizerProps) {
  const [selectedColor, setSelectedColor] = useState("indigo")

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-medium">Theme Colors</h3>
      <div className="space-y-2">
        <Label>Primary Color</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between" role="combobox">
              <div className="flex items-center gap-2">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: colors.find((c) => c.value === selectedColor)?.color,
                  }}
                />
                {colors.find((c) => c.value === selectedColor)?.name}
              </div>
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <div className="p-2">
              {colors.map((color) => (
                <div
                  key={color.value}
                  className={cn(
                    "flex cursor-pointer items-center rounded-md px-2 py-1.5 text-sm",
                    selectedColor === color.value ? "bg-muted" : "hover:bg-muted",
                  )}
                  onClick={() => setSelectedColor(color.value)}
                >
                  <div className="mr-2 h-4 w-4 rounded-full" style={{ backgroundColor: color.color }} />
                  <span className="flex-1">{color.name}</span>
                  {selectedColor === color.value && <Check className="h-4 w-4" />}
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label>Preview</Label>
        <div className="rounded-md border p-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <div
                className="h-5 w-20 rounded"
                style={{
                  backgroundColor: colors.find((c) => c.value === selectedColor)?.color,
                }}
              />
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-2/3 rounded bg-muted" />
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded"
                style={{
                  backgroundColor: colors.find((c) => c.value === selectedColor)?.color,
                }}
              />
              <div className="h-8 w-8 rounded bg-muted" />
              <div className="h-8 w-8 rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

