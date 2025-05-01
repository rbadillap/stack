"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

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
            <div className="group relative my-1 overflow-hidden">
              <div className="absolute inset-0 rounded-lg border border-border transition-all duration-300 ease-out group-hover:border-border/60 group-hover:bg-muted/50" />
              <div className="absolute left-2 top-2 z-[1] rounded-sm bg-background/80 px-1.5 py-0.5">
                <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  {componentName}
                </span>
              </div>
              <div className="relative z-0 p-2">
                {child}
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
