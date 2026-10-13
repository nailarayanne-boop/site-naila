import Image from "next/image"
import { ButtonLink } from "@/components/button-link"
import { WhatsappIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/lib/site-config"

export function AboutSection() {
  const { about, images, whatsapp, crp, approach } = siteConfig
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden="true" className="arch absolute -left-5 top-8 h-full w-full bg-sand/50" />
          <div aria-hidden="true" className="arch absolute -right-4 -top-4 h-full w-full border border-navy/20" />
          <div className="arch relative aspect-[3/4] overflow-hidden bg-sand-light">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 24rem, 90vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading id="sobre-title" eyebrow="Quem sou eu" title="Um encontro para você se compreender melhor" />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-pretty leading-relaxed text-ink-soft">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <ButtonLink href={whatsapp.link} external>
              <WhatsappIcon className="size-4" />
              Fale comigo
            </ButtonLink>
            <dl className="flex gap-8 border-l border-sand pl-6">
              <div>
                <dt className="eyebrow text-[0.6rem] text-petrol">Registro</dt>
                <dd className="mt-1 font-serif text-lg text-navy">{crp}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.6rem] text-petrol">Abordagem</dt>
                <dd className="mt-1 font-serif text-lg text-navy">{approach}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
