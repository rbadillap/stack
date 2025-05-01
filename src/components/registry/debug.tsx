import * as React from "react"
import { cn } from "@/lib/utils"

interface DebugWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  enabled?: boolean
}

const DebugWrapper = React.forwardRef<HTMLDivElement, DebugWrapperProps>(
  ({ children, enabled = true, className, ...props }, ref) => {
    if (!enabled) return <>{children}</>

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
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
            <div className="group relative my-1">
              <div className="absolute inset-0 rounded-lg border border-zinc-200 transition-all duration-300 ease-out group-hover:border-zinc-400 group-hover:bg-zinc-50/50 dark:border-zinc-800 dark:group-hover:border-zinc-700 dark:group-hover:bg-zinc-900/50" />
              <span className="absolute left-2 top-2 z-10 text-xs text-zinc-500 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                {componentName}
              </span>
              <div className="relative p-2">
                {child}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)

DebugWrapper.displayName = "DebugWrapper"

export { DebugWrapper }
