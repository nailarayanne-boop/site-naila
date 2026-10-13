import { CalendarClock, Home, Lock, MessageCircleHeart } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { LogoMark } from "@/components/logo-mark"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/lib/site-config"

const benefits = [
  { icon: Home, title: "Comodidade", text: "Sessões no conforto da sua casa ou de onde se sentir mais à vontade, sem deslocamentos." },
  { icon: Lock, title: "Sigilo profissional", text: "Atendimento ético e confidencial, em um espaço seguro para você se expressar." },
  { icon: CalendarClock, title: "Flexibilidade", text: "Horários adaptados à sua rotina." },
  { icon: MessageCircleHeart, title: "Acolhimento", text: "Escuta ativa e humanizada, com respeito à sua história e ao seu tempo." },
]

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-title"
      className="relative overflow-hidden bg-navy py-24 text-cream md:py-32"
    >
      <LogoMark
        className="pointer-events-none absolute -right-32 top-1/2 w-[44rem] -translate-y-1/2 text-cream/[0.05]"
        strokeWidth={1}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="beneficios-title"
          tone="light"
          eyebrow="Benefícios da terapia online"
          title="Cuidado profissional que acompanha a sua vida"
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <StaggerItem
              as="article"
              key={title}
              className="rounded-3xl border border-cream/10 bg-cream/[0.03] p-8 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-sand/60"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-sand text-navy">
                <Icon className="size-5" strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-2xl">{title}</h3>
              <p className="mt-2 leading-relaxed text-cream/75">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-14">
          <ButtonLink href={siteConfig.whatsapp.link} external variant="sand">
            Quero agendar meu atendimento
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
