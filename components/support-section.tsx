import { Reveal } from "@/components/reveal"
import { SproutIllustration } from "@/components/sprout-illustration"
import { siteConfig } from "@/lib/site-config"

export function SupportSection() {
  const { support } = siteConfig
  return (
    <section aria-labelledby="suporte-title" className="border-y border-navy/10 bg-sand-light/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="eyebrow flex items-center gap-4 text-petrol">
            <span aria-hidden="true" className="h-px w-10 bg-sand" />
            De onde estiver
          </p>
          <h2
            id="suporte-title"
            className="mt-5 max-w-2xl text-balance font-serif text-4xl font-normal leading-[1.1] text-navy md:text-5xl"
          >
            {support.title}
          </h2>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">{support.text}</p>
        </Reveal>
        <Reveal delay={0.15} className="mx-auto w-full max-w-xs lg:max-w-sm">
          <SproutIllustration />
        </Reveal>
      </div>
    </section>
  )
}
