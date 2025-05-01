import { Header } from "@/components/home/header"
import { Main } from "@/components/home/main"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Showcase } from "@/components/home/showcase"
import { CTA } from "@/components/home/cta"
import { Footer } from "@/components/home/footer"

export default function Home() {
  return (
    <div className="relative">
      <Header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-primary/5" />
      
      <Main className="flex flex-col min-h-screen">
        <Hero className="relative min-h-[90vh] flex items-center overflow-hidden" />
        <Features className="py-32 relative" />
        <Showcase className="py-32 relative overflow-hidden" />
        <CTA className="relative py-32 overflow-hidden" />
      </Main>
      <Footer className="relative pt-24 pb-12 bg-secondary/30" />
    </div>
  )
}
