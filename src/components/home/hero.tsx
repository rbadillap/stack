import { Button } from "@/components/ui/button"

export const Hero = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section
      {...props}
    >
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main circles */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-primary/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-primary/[0.03] rounded-full translate-y-1/2 -translate-x-1/2 backdrop-blur-3xl" />
      
      {/* Additional geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-primary/10 rotate-45" />
      <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/[0.02] rounded-lg rotate-12" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.02]" />
    </div>

    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-primary/70">
            <span className="w-8 h-[1px] bg-primary/30" />
            <span>GEOMETRIC DESIGN</span>
            <span className="w-8 h-[1px] bg-primary/30" />
          </div>
          <h1 className="text-7xl font-bold tracking-tighter leading-[1.1]">
            Minimalist Design
            <span className="block text-primary/80 text-8xl font-light">Geometric Precision</span>
          </h1>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Experience the perfect balance of form and function through our geometric approach to design, where every pixel serves a purpose.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Button size="lg" className="rounded-full px-8 h-14 text-base">
            Explore Now
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base group relative overflow-hidden">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-primary/5 transform translate-y-full transition-transform group-hover:translate-y-0" />
          </Button>
        </div>

        {/* Geometric stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-16">
          {[
            { number: "100%", label: "Geometric" },
            { number: "Pure", label: "Design" },
            { number: "∞", label: "Possibilities" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold text-primary/90">{stat.number}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}
