import React, { memo, useMemo } from 'react'
import {
  CornerDownLeft as CornerDownLeftIcon,
  SquareTerminal as SquareTerminalIcon,
  Triangle as TriangleIcon,
  Save as SaveIcon,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/compose/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import * as globals from '@/shared/globals'
import { Table, TableBody, TableHeader } from '@/components/ui/table'
import DemoPage from '@/app/products/page'


export const description =
  'An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.'

export const dynamic = 'force-dynamic'

function Screen() {
  const breadcrumbs = useMemo(
    () => [
      { name: 'Test Cases', href: globals.shortlinks.RootTestCases },
      { name: 'Playground' },
    ],
    [],
  )
  // useMemo để ghi nhớ danh sách các breadcrumb điều hướng, giúp ngăn ngừa việc tính toán lại danh sách này khi không cần thiết. 
  // Danh sách chứa hai mục: một liên kết đến "Test Cases" và một mục "Playground".

  return (
    <div className="grid h-screen w-full pl-[53px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <TriangleIcon className="size-5 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="Playground"
              >
                <SquareTerminalIcon className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Playground 
            </TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">
            <Breadcrumb items={breadcrumbs} />
          </h1>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative flex-col items-start gap-8 md:flex"
            x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <div className="grid gap-3">
                  <Label htmlFor="url">URL</Label>
                  <Input
                    id="url"
                    type="url"
                    placeholder="Enter the URL to get the document from Swagger"
                  />
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Settings
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="role">Endpoint</Label>
                  <Select defaultValue="path-a">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a enpoint" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="path-a">Path A</SelectItem>
                      <SelectItem value="path-b">Path B</SelectItem>
                      <SelectItem value="path-c">Path C</SelectItem>
                    </SelectContent>
                
                  </Select>
                </div>
              </fieldset>
            </form>
{/* respone START */}

{/* end */}
          
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <DemoPage></DemoPage>
            <div className="flex-1" />
            <form
              className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter additional custom prompts if you want (optional)"
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <SaveIcon className="size-3.5" />
                      Save
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Save as...</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Google Sheet</DropdownMenuItem>
                      <DropdownMenuItem>Excel</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                  Generate
                  <CornerDownLeftIcon className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Screen
