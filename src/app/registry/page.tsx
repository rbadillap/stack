import { Debug, DebugToolbar, DebugContent } from "@/components/registry/debug"
import { Header } from "@/components/home/header"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Showcase } from "@/components/home/showcase"
import { CTA } from "@/components/home/cta"
import { Footer } from "@/components/home/footer"
import { Main } from "@/components/home/main"

export default function Registry() {
  return (
    <div className="container relative mx-auto">
      <div className="flex flex-col gap-8 py-8">
        <Debug>
          <DebugToolbar>
          </DebugToolbar>
          <DebugContent>
            <Header />
            <Main>
              <Hero />
              <Features />
              <Showcase />
              <CTA />
            </Main>
            <Footer />
          </DebugContent>
        </Debug>
      </div>
    </div>
  )
}
