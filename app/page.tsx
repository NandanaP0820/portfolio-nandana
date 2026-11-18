import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/hero'
import { CompetencyCta } from '@/components/competency-cta'
import { AboutSection, ComingSoonSections } from '@/components/coming-soon-sections'
import { ContactSection } from '@/components/contact-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col gap-24 pb-24">
        <Hero />
        <CompetencyCta />
        <AboutSection />
        <ComingSoonSections />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
