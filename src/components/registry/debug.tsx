"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { TerminalIcon } from "lucide-react"

interface DebugProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  enabled?: boolean
}

interface DebugContextValue {
  enabled: boolean
}

const DebugContext = React.createContext<DebugContextValue | undefined>(undefined)

function useDebug() {
  const context = React.useContext(DebugContext)
  if (!context) {
    throw new Error("Debug components must be used within a Debug provider")
  }
  return context
}

const Debug = React.forwardRef<HTMLDivElement, DebugProps>(
  ({ children, enabled = true, className, ...props }, ref) => {
    if (!enabled) return <>{children}</>

    return (
      <DebugContext.Provider value={{ enabled }}>
        <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
          {children}
        </div>
      </DebugContext.Provider>
    )
  }
)
Debug.displayName = "Debug"

interface DebugToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const DebugToolbar = React.forwardRef<HTMLDivElement, DebugToolbarProps>(
  ({ children, className, ...props }, ref) => {
    const { enabled } = useDebug()
    if (!enabled) return null

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-4 rounded-lg border border-border bg-card p-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DebugToolbar.displayName = "DebugToolbar"

interface DebugContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const DebugContent = React.forwardRef<HTMLDivElement, DebugContentProps>(
  ({ children, className, ...props }, ref) => {
    const { enabled } = useDebug()
    if (!enabled) return <>{children}</>

    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child

          // Get the display name of the component
          let componentName = "Unknown"
          
          if (typeof child.type === "string") {
            componentName = child.type
          } else if (typeof child.type === "function") {
            const functionComponent = child.type as React.FunctionComponent
            componentName = functionComponent.displayName || functionComponent.name || "Unknown"
          }

          return (
            <div className="group rounded-lg border border-border relative overflow-hidden">
              <div className="bg-muted px-3 py-1.5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono text-muted-foreground transition-colors group-hover:text-foreground">
                    &lt;{componentName} /&gt;
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs p-1.5 rounded-sm border border-border text-muted-foreground hover:bg-muted bg-muted-foreground/5"
                    onClick={() => {
                      console.log(`pnpm dlx shadcn add https://stackcn.vercel.app/${componentName}.tsx`)
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none"></rect>
                      <line
                        x1="208"
                        y1="128"
                        x2="128"
                        y2="208"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      ></line>
                      <line
                        x1="192"
                        y1="40"
                        x2="40"
                        y2="192"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      ></line>
                    </svg>
                    <pre>pnpm dlx shadcn add {componentName}.tsx</pre>
                  </Button>
                  <Separator orientation="vertical" className="!h-4 border-border" />
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="text-xs p-1.5 rounded-sm border border-border text-muted-foreground bg-accent hover:bg-muted-foreground/5"
                    onClick={() => {
                      console.log(`pnpm dlx shadcn add https://stackcn.vercel.app/components/${componentName}.tsx`)
                    }}
                  >
                    <a
                      href={`#`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in{" "}
                      <svg
                        viewBox="0 0 40 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-current"
                      >
                        <path
                          d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 transition-all duration-300 ease-out group-hover:border-border/60 group-hover:bg-muted/50" />
                <div className="relative z-0 p-4">
                  {child}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)
DebugContent.displayName = "DebugContent"

export { Debug, DebugToolbar, DebugContent }
