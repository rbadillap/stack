export const Features = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section
      {...props}
    >
    {/* Geometric Background Elements */}
    <div className="absolute inset-0 -z-10 bg-secondary/30">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[linear-gradient(45deg,var(--primary)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.03]" />
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-[linear-gradient(-45deg,var(--primary)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.03]" />
    </div>

    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-24">
        <div className="inline-block rotate-45 bg-primary/5 p-3 rounded-xl mb-8">
          <div className="w-3 h-3 bg-primary/40 rounded-sm rotate-45" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4">Features that Define</h2>
        <p className="text-muted-foreground text-lg">
          Each element carefully crafted to enhance your design experience
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Geometric Precision",
            description: "Clean lines and perfect shapes create visual harmony in every pixel",
            icon: (
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-primary/10 rounded-lg rotate-45" />
                <div className="absolute inset-2 bg-primary/20 rounded-sm rotate-45" />
              </div>
            )
          },
          {
            title: "Minimalist Approach",
            description: "Simplified aesthetics that amplify your content's impact",
            icon: (
              <div className="relative w-12 h-12">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary/20" />
              </div>
            )
          },
          {
            title: "Neural Aesthetics",
            description: "Design patterns that resonate with natural cognitive processes",
            icon: (
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-2 border-primary/10 rounded-full" />
                <div className="absolute inset-3 border border-primary/20 rounded-full" />
              </div>
            )
          },
          {
            title: "Responsive Grid",
            description: "Fluid layouts that adapt seamlessly across all devices",
            icon: (
              <div className="relative w-12 h-12 grid grid-cols-2 grid-rows-2 gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-primary/10 rounded-sm" />
                ))}
              </div>
            )
          },
          {
            title: "Visual Harmony",
            description: "Balanced compositions that create a sense of peace and order",
            icon: (
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-2 border-primary/10 rotate-45" />
                <div className="absolute inset-2 bg-primary/10 rotate-45" />
              </div>
            )
          },
          {
            title: "Dynamic Elements",
            description: "Subtle interactions that enhance user engagement",
            icon: (
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-primary/5 rounded-lg" />
                <div className="absolute right-0 top-0 w-6 h-6 bg-primary/20 rounded-tr-lg" />
              </div>
            )
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="group relative bg-card/50 backdrop-blur-sm border border-primary/5 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            
            {/* Content */}
            <div className="relative space-y-4">
              {/* Icon */}
              <div className="mb-6">{feature.icon}</div>
              
              {/* Text */}
              <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              
              {/* Interactive Element */}
              <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center text-sm text-primary/70">
                  <span>Learn more</span>
                  <div className="ml-2 w-4 h-[1px] bg-primary/30 transition-all group-hover:w-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  )
}