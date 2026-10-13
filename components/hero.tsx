import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { WhatsappIcon } from "@/components/brand-icons"
import { LogoMark } from "@/components/logo-mark"
import { RotatingSeal } from "@/components/rotating-seal"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  const { hero, images, whatsapp } = siteConfig

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-28 lg:pb-16">
      <LogoMark
        className="pointer-events-none absolute -left-24 top-24 hidden w-[46rem] text-navy/[0.05] lg:block"
        strokeWidth={1}
      />

      <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_auto]">
        <div className="fade-up lg:self-end">
          <ul className="flex flex-wrap gap-2.5">
            {hero.badges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 rounded-full border border-navy/15 bg-cream/70 px-4 py-1.5 text-xs tracking-wide text-navy"
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-sand" />
                {badge}
              </li>
            ))}
          </ul>
          <h1
            id="hero-title"
            className="mt-8 text-balance font-serif text-[2.6rem] font-light leading-[1.05] text-navy sm:text-6xl lg:mt-6 lg:text-[3.1rem] xl:text-[3.2rem]"
          >
            Terapia <em className="font-normal italic text-petrol">humanizada</em>, com escuta e apoio para o seu{" "}
            <span className="whitespace-nowrap">bem-estar</span> emocional.
          </h1>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 h-[88%] w-[88%] rounded-[45%_55%_40%_60%/55%_45%_55%_45%] bg-sand/60 md:-right-10"
          />
          <div aria-hidden="true" className="arch absolute -bottom-4 -left-4 h-[70%] w-[70%] border border-sand" />
          <div className="arch relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-[min(34rem,calc(100svh-9rem))] bg-sand-light">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, (min-width: 640px) 28rem, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <RotatingSeal className="absolute -bottom-6 -left-2 size-28 md:-left-8 md:size-32" />
        </div>

        <div className="fade-up [animation-delay:150ms] lg:self-start">
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-ink-soft">{hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-7">
            <ButtonLink href={whatsapp.link} external>
              <WhatsappIcon className="size-4" />
              Agendar pelo WhatsApp
            </ButtonLink>
            <ButtonLink href="#sobre" variant="secondary">
              Conhecer meu trabalho
              <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </ButtonLink>
          </div>
          <p className="eyebrow mt-10 text-navy/60 lg:mt-7">{siteConfig.crp}</p>
        </div>
      </div>
    </section>
  )
}
