import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import { FeaturedArticles } from "@/components/featured-articles"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <InfoSection />
        <FeaturedArticles />
      </main>
    </div>
  )
}
