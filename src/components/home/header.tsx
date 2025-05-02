import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export const Header = ({ ...props }: React.ComponentProps<"header">) => {
  return (
    <header
      {...props}
    >
      <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group">
            <div className="w-4 h-4 rotate-45 bg-primary/20 group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <span className="text-lg font-semibold">Geometric</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Products", "Resources", "Pricing"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary/30 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="rounded-full">
              Sign in
            </Button>
            <Button size="sm" className="rounded-full">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 group">
            <div className="w-5 h-[2px] bg-primary/70 group-hover:w-6 transition-all" />
            <div className="w-6 h-[2px] bg-primary/70" />
            <div className="w-5 h-[2px] bg-primary/70 group-hover:w-6 transition-all self-end group-hover:self-start" />
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Navigation - Hidden by default */}
      <div className="md:hidden hidden">
      <nav className="container mx-auto px-4 py-4 space-y-4">
        {["Features", "Products", "Resources", "Pricing"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="block text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            {item}
          </a>
        ))}
        <div className="pt-4 border-t border-primary/5 flex flex-col gap-3">
          <Button variant="ghost" className="rounded-full w-full">
            Sign in
          </Button>
          <Button className="rounded-full w-full">
            Get Started
          </Button>
        </div>
      </nav>
      </div>
    </header>
  );
};
