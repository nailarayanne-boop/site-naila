import { Brain, Compass, Feather, HeartHandshake, Route, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Stagger, StaggerItem } from "@/components/reveal"

const topics = [
  { icon: Brain, title: "Ansiedade", text: "Um espaço para acolher preocupações e compreender o que a ansiedade comunica." },
  { icon: Sparkles, title: "Autoestima", text: "Olhar para si com mais gentileza e reconhecer o próprio valor." },
  { icon: HeartHandshake, title: "Relacionamentos", text: "Refletir sobre vínculos, limites e a forma como você se relaciona." },
  { icon: Compass, title: "Autoconhecimento", text: "Perceber sentimentos, desejos e escolhas no aqui e agora." },
  { icon: Route, title: "Momentos de transição", text: "Apoio para atravessar mudanças, recomeços e decisões importantes." },
  { icon: Feather, title: "Estresse e sobrecarga", text: "Cuidar do cansaço emocional e encontrar formas de respirar na rotina." },
]

export function HelpSection() {
  return (
    <section aria-labelledby="ajuda-title" className="bg-sand-light/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="ajuda-title"
          eyebrow="Como posso te ajudar"
          title="Temas que podemos cuidar juntas"
          description="Cada processo é único. Estes são alguns dos temas frequentemente trabalhados em terapia."
        />
        <Stagger as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ icon: Icon, title, text }) => (
            <StaggerItem
              as="li"
              key={title}
              className="group rounded-3xl border border-navy/10 bg-cream p-8 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-sand hover:shadow-[0_20px_40px_-24px_rgba(15,30,61,0.3)]"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-navy/15 text-petrol transition-colors duration-500 group-hover:border-sand group-hover:bg-sand-light">
                <Icon className="size-5" strokeWidth={1.25} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-navy">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
