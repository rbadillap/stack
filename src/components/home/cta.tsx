import { Button } from "@/components/ui/button"

export const CTA = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section
      {...props}
    >
    {/* Geometric Background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-primary/[0.02]" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(-45deg,var(--primary)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.03]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(45deg,var(--primary)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.03]" />
    </div>

    <div className="container mx-auto px-4">
      <div className="relative max-w-4xl mx-auto">
        {/* Geometric Decorations */}
        <div className="absolute -top-8 -left-16 w-32 h-32">
          <div className="absolute inset-0 border border-primary/10 rounded-full animate-spin-slow" />
          <div className="absolute inset-4 border border-primary/20 rounded-full animate-spin-slow-reverse" />
          <div className="absolute inset-8 border border-primary/30 rounded-full animate-spin-slow" />
        </div>
        <div className="absolute -bottom-8 -right-16 w-32 h-32">
          <div className="absolute inset-0 bg-primary/5 rotate-45 animate-float" />
          <div className="absolute inset-4 bg-primary/5 -rotate-45 animate-float-delay" />
        </div>

        {/* Content */}
        <div className="relative backdrop-blur-sm bg-background/30 rounded-[2rem] p-12 border border-primary/10">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-primary/70">
                <span className="w-8 h-[1px] bg-primary/30" />
                <span>START CREATING</span>
                <span className="w-8 h-[1px] bg-primary/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Ready to Transform Your
                <span className="block text-primary/80">Design Experience?</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us in crafting the future of digital design with geometric precision and minimalist beauty.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button size="lg" className="rounded-full px-8 h-14 text-base relative group overflow-hidden">
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 bg-primary/10 transform translate-y-full transition-transform group-hover:translate-y-0" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base group relative overflow-hidden"
              >
                <span className="relative z-10">Schedule Demo</span>
                <div className="absolute inset-0 bg-primary/5 transform translate-y-full transition-transform group-hover:translate-y-0" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {[
                { number: "100+", label: "Projects" },
                { number: "50k+", label: "Users" },
                { number: "99%", label: "Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary/90">{stat.number}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
