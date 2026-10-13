type Variant = "primary" | "secondary" | "sand" | "ghost-light"

const variants: Record<Variant, string> = {
  primary: "bg-navy text-cream hover:bg-petrol",
  secondary: "border border-navy/25 text-navy hover:border-sand hover:bg-sand-light",
  sand: "bg-sand text-navy hover:bg-cream",
  "ghost-light": "border border-cream/30 text-cream hover:border-sand hover:text-sand",
}

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: Variant
  external?: boolean
  className?: string
}

export function ButtonLink({ href, children, variant = "primary", external, className = "" }: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
