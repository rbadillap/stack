import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const Footer = ({ ...props }: React.ComponentProps<"footer">) => {
  return (
    <footer
      {...props}
    >
    {/* Geometric Background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(0deg,var(--primary)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-1/3 aspect-square">
        <div className="absolute inset-0 bg-primary/[0.02] rounded-full blur-3xl" />
      </div>
    </div>

    <div className="container mx-auto px-4">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <div className="w-4 h-4 rotate-45 bg-primary/20" />
            </div>
            <span className="text-xl font-semibold">Geometric</span>
          </div>
          <p className="text-muted-foreground">
            Crafting digital experiences through geometric precision and minimalist design.
          </p>
          <div className="flex gap-4">
            {[
              { label: "Twitter", href: "#" },
              { label: "GitHub", href: "#" },
              { label: "Dribbble", href: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group hover:bg-primary/5 transition-colors"
              >
                <span className="text-sm text-primary/70 group-hover:text-primary/90">
                  {social.label[0]}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            {[
              "About Us",
              "Our Work",
              "Services",
              "Contact"
            ].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-primary/30 group-hover:rotate-45 transition-transform" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Resources</h4>
          <ul className="space-y-3">
            {[
              "Documentation",
              "Design System",
              "Templates",
              "Showcase"
            ].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-primary/30 group-hover:rotate-45 transition-transform" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Stay Updated</h4>
          <p className="text-muted-foreground">
            Subscribe to our newsletter for design insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full bg-background border border-primary/10 focus:outline-none focus:border-primary/20 transition-colors"
            />
            <Button size="sm" className="rounded-full whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 border-t border-primary/5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>© 2024 Geometric. All rights reserved.</span>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary/70">Made with</span>
            <div className="w-1 h-1 bg-primary/30 rotate-45" />
            <span className="text-primary/70">geometric precision</span>
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}
