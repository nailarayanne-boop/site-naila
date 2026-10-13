"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/lib/site-config"

export function ReviewsSection() {
  const { eyebrow, title, items, signature, disclaimer, ctaLabel, googleReviewsUrl } = siteConfig.reviews
  const trackRef = useRef<HTMLUListElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector("li")
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth
    track.scrollBy({ left: direction * step, behavior: "smooth" })
  }

  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="bg-sand-light/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="avaliacoes-title" eyebrow={eyebrow} title={title} />
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Avaliação anterior"
              className="flex size-12 items-center justify-center rounded-full border border-navy/25 text-navy transition-colors hover:border-sand hover:bg-cream"
            >
              <ChevronLeft className="size-5" strokeWidth={1.4} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Próxima avaliação"
              className="flex size-12 items-center justify-center rounded-full border border-navy/25 text-navy transition-colors hover:border-sand hover:bg-cream"
            >
              <ChevronRight className="size-5" strokeWidth={1.4} aria-hidden="true" />
            </button>
          </div>
        </div>

        <Reveal className="mt-14">
          <ul
            ref={trackRef}
            aria-label="Avaliações de pacientes"
            tabIndex={0}
            className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((text, index) => (
              <li
                key={index}
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-navy/10 bg-cream p-8 sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <span aria-hidden="true" className="font-serif text-7xl leading-none text-sand">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 font-serif text-xl italic leading-relaxed text-navy">
                  {text}
                </blockquote>
                <p className="eyebrow mt-8 text-petrol">{signature}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-ink-soft">{disclaimer}</p>
          <ButtonLink
            href={googleReviewsUrl}
            variant="secondary"
            external={googleReviewsUrl.startsWith("http")}
          >
            {ctaLabel}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
