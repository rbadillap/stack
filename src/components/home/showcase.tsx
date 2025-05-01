import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const Showcase = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section
      {...props}
    >
    {/* Geometric Background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute h-[200%] w-[200%] -top-1/2 -left-1/2 bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.03] rotate-12" />
    </div>

    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-24">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-primary/30" />
          <div className="px-4 py-1 rounded-full bg-primary/5 text-sm font-medium text-primary/70">
            Our Product
          </div>
          <div className="w-8 h-[1px] bg-primary/30" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-6">Product Showcase</h2>
        <Separator className="w-12 mx-auto bg-primary/20 my-6" />
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Experience the fusion of form and function through our geometric approach to design
        </p>
      </div>

      {/* Product Display */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Product Visual */}
        <div className="relative aspect-square">
          {/* Main Product Container */}
          <div className="absolute inset-4 rounded-[2rem] bg-card shadow-2xl shadow-primary/5 overflow-hidden group">
            {/* Product Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--primary)_1px,transparent_1px),linear-gradient(90deg,var(--primary)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.02]" />
            
            {/* Geometric Decorations */}
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-primary/10 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-primary/5 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            
            {/* Product Preview */}
            <div className="absolute inset-6 rounded-2xl bg-secondary/30 backdrop-blur-sm flex items-center justify-center">
              <div className="w-3/4 h-3/4 relative">
                {/* Product Geometric Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 rounded-xl border border-primary/10 transform group-hover:rotate-45 transition-transform duration-700" />
                    <div className="absolute inset-4 rounded-lg bg-primary/5 transform group-hover:-rotate-45 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -right-4 top-1/4 w-8 h-8 bg-primary/5 rounded-lg animate-float" />
          <div className="absolute -left-6 bottom-1/3 w-12 h-12 border border-primary/10 rounded-full animate-float-delay" />
        </div>

        {/* Product Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-5xl font-bold tracking-tight">
              Pure. Simple.
              <span className="block text-primary/80 mt-2">Beautiful.</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our product embodies the essence of minimalist design, where every element serves a purpose and nothing is superfluous.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {[
              "Geometric precision in every detail",
              "Minimalist approach to functionality",
              "Seamless user experience"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary/30 rotate-45" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="rounded-full px-8">
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 group relative overflow-hidden"
            >
              <span className="relative z-10">View Details</span>
              <div className="absolute inset-0 bg-primary/5 transform translate-y-full transition-transform group-hover:translate-y-0" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>

)
}