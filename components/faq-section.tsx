"use client"

import { useId, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "Como funciona a sessão online?",
    a: "A sessão acontece por videochamada, no horário combinado. Basta estar em um lugar reservado, com uma boa conexão, onde você se sinta à vontade para conversar.",
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "Cada sessão tem duração média de 50 minutos. A frequência é combinada de acordo com as suas necessidades.",
  },
  {
    q: "A terapia online é tão eficaz quanto a presencial?",
    a: "A psicoterapia online é regulamentada pelo Conselho Federal de Psicologia e segue os mesmos princípios éticos e técnicos do atendimento presencial. Cada processo é singular e depende do seu envolvimento e do vínculo terapêutico.",
  },
  {
    q: "Preciso de algum programa específico?",
    a: "Não. Você só precisa de um celular, tablet ou computador com câmera, microfone e internet. O link da sessão é enviado antes do atendimento.",
  },
  {
    q: "Como é garantido o sigilo?",
    a: "O sigilo é um dever ético previsto no Código de Ética do Psicólogo. As sessões são realizadas em plataforma segura e tudo o que é dito permanece confidencial.",
  },
  {
    q: "Como faço para agendar?",
    a: "É só enviar uma mensagem pelo WhatsApp. Vamos conversar sobre disponibilidade e combinar o melhor horário para você.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionHeading
          id="duvidas-title"
          eyebrow="Dúvidas frequentes"
          title="Perguntas que costumam surgir"
          description="Se a sua dúvida não estiver aqui, fique à vontade para me chamar no WhatsApp."
        />
        <Reveal delay={0.1}>
          <ul className="border-t border-navy/15">
            {faqs.map((item, i) => {
              const isOpen = open === i
              const buttonId = `${baseId}-btn-${i}`
              const panelId = `${baseId}-panel-${i}`
              return (
                <li key={item.q} className="border-b border-navy/15">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-xl text-navy transition-colors hover:text-petrol md:text-2xl"
                    >
                      {item.q}
                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300 ${
                          isOpen ? "rotate-45 border-sand bg-sand" : "border-navy/20"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="size-4" strokeWidth={1.5} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-ink-soft">{item.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
