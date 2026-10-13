import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SupportSection } from "@/components/support-section"
import { AboutSection } from "@/components/about-section"
import { HelpSection } from "@/components/help-section"
import { ProcessSection } from "@/components/process-section"
import { ReviewsSection } from "@/components/reviews-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main>
        <Hero />
        <SupportSection />
        <AboutSection />
        <HelpSection />
        <ProcessSection />
        <ReviewsSection />
        <BenefitsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
