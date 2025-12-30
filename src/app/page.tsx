import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto py-12 md:py-16 lg:py-20 min-h-screen flex flex-col lg:block">
          {/* Two-column layout on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 flex-1">
            {/* Left Column - Info */}
            <div className="flex flex-col order-2 lg:order-1 lg:min-h-[calc(100vh-10rem)]">
              <Hero />
              <About />
              <Experience />
            </div>
            
            {/* Right Column - Projects (prominent) */}
            <div className=" order-2">
              <Projects />
            </div>
          </div>
        </div>
        <Footer />

      </main>
      <Analytics />
    </>
  )
}
