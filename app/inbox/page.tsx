import { Search, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmailList } from "@/components/email-list"
import { EmailView } from "@/components/email-view"
import { ComposeButton } from "@/components/compose-button"

export default function InboxPage() {
  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex w-full max-w-md items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search emails..." className="h-9 bg-muted/30 focus-visible:ring-primary" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex h-full w-full flex-col border-r md:w-80 lg:w-96">
            <Tabs defaultValue="primary" className="w-full">
              <div className="flex items-center justify-between border-b px-4 py-2">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="primary">Primary</TabsTrigger>
                  <TabsTrigger value="social">Social</TabsTrigger>
                  <TabsTrigger value="promotions">Promotions</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="primary" className="flex-1 overflow-auto p-0">
                <EmailList />
              </TabsContent>
              <TabsContent value="social" className="flex-1 overflow-auto p-0">
                <EmailList category="social" />
              </TabsContent>
              <TabsContent value="promotions" className="flex-1 overflow-auto p-0">
                <EmailList category="promotions" />
              </TabsContent>
            </Tabs>
          </div>

          <div className="hidden flex-1 md:block">
            <EmailView />
          </div>
        </div>
      </div>

      <ComposeButton />
    </div>
  )
}

