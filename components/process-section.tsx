import Image from "next/image"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/lib/site-config"

const steps = [
  { title: "Você entra em contato pelo WhatsApp", text: "Uma mensagem simples é o suficiente para começarmos a conversar." },
  { title: "Agendamos o melhor horário para você", text: "Encontramos juntas um dia e horário que caibam na sua rotina." },
  { title: "A sessão acontece por videochamada, em plataforma segura", text: "Você recebe o link e participa de onde se sentir mais à vontade." },
  { title: "Seguimos juntas no seu processo, no seu ritmo", text: "Cada encontro respeita o seu tempo e as suas necessidades." },
]

export function ProcessSection() {
  const { images } = siteConfig
  return (
    <section id="como-funciona" aria-labelledby="processo-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-24">
        <div className="lg:order-2">
          <SectionHeading id="processo-title" eyebrow="Como funciona" title="Começar é mais simples do que parece" />
          <Stagger as="ol" className="relative mt-12 space-y-10" stagger={0.12}>
            <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-sand" />
            {steps.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="relative flex gap-6">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-sand bg-cream font-serif text-lg text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-2">
                  <h3 className="font-serif text-2xl leading-snug text-navy">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="relative mx-auto w-full max-w-sm lg:order-1 lg:max-w-md">
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -right-8 h-3/4 w-3/4 rounded-[60%_40%_55%_45%/45%_55%_45%_55%] bg-sand/50"
          />
          <div className="arch relative aspect-[3/4] overflow-hidden bg-sand-light">
            <Image
              src={images.session.src}
              alt={images.session.alt}
              fill
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
