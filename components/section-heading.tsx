import { Reveal } from "@/components/reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  id?: string
  description?: string
  align?: "left" | "center"
  tone?: "dark" | "light"
}

export function SectionHeading({ eyebrow, title, id, description, align = "left", tone = "dark" }: SectionHeadingProps) {
  const centered = align === "center"
  const light = tone === "light"
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow flex items-center gap-4 ${centered ? "justify-center" : ""} ${light ? "text-sand" : "text-petrol"}`}>
        <span aria-hidden="true" className={`h-px w-10 ${light ? "bg-sand/60" : "bg-sand"}`} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-5 text-balance font-serif text-4xl font-normal leading-[1.1] md:text-5xl ${light ? "text-cream" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-pretty leading-relaxed ${light ? "text-cream/75" : "text-ink-soft"}`}>{description}</p>
      ) : null}
    </Reveal>
  )
}
