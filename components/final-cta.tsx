import { ButtonLink } from "@/components/button-link"
import { WhatsappIcon } from "@/components/brand-icons"
import { LogoMark } from "@/components/logo-mark"
import { Reveal } from "@/components/reveal"
import { siteConfig } from "@/lib/site-config"

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="cta-title" className="px-5 pb-24 md:px-8 md:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sand-light px-6 py-20 text-center md:py-28">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-20 size-72 rounded-[45%_55%_40%_60%/55%_45%_55%_45%] bg-sand/50"
        />
        <div aria-hidden="true" className="absolute -bottom-24 -right-16 size-80 rounded-full border border-navy/10" />
        <div className="relative">
          <LogoMark className="mx-auto h-10 w-auto text-navy" strokeWidth={1.2} />
          <h2
            id="cta-title"
            className="mx-auto mt-10 max-w-3xl text-balance font-serif text-4xl font-light leading-[1.1] text-navy md:text-6xl"
          >
            {siteConfig.finalCta}
          </h2>
          <div className="mt-10 flex flex-col items-center gap-4">
            <ButtonLink href={siteConfig.whatsapp.link} external>
              <WhatsappIcon className="size-4" />
              Agendar pelo WhatsApp
            </ButtonLink>
            <p className="text-sm text-ink-soft">{siteConfig.whatsapp.display}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
