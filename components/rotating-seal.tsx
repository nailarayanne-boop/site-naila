import { LogoMark } from "@/components/logo-mark"

export function RotatingSeal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-cream shadow-[0_10px_40px_-12px_rgba(15,30,61,0.25)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" className="animate-spin-slow absolute inset-0 size-full text-navy">
        <defs>
          <path id="seal-circle" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
        </defs>
        <text className="fill-current text-[10.4px] uppercase tracking-[0.32em]" fontFamily="var(--font-manrope)">
          <textPath href="#seal-circle">Terapia online • Terapia online •</textPath>
        </text>
      </svg>
      <LogoMark className="w-[34%] text-navy" strokeWidth={1.2} />
    </div>
  )
}
