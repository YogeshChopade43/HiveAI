import { Navbar } from '@/components/shared/navbar'
import { Hero } from '@/components/shared/hero'
import { FeaturesSection } from '@/components/shared/features-section'
import { TestimonialsSection } from '@/components/shared/testimonials-section'
import { NewsletterSection } from '@/components/shared/newsletter-section'
import { Footer } from '@/components/shared/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}