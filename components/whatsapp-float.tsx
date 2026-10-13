import { WhatsappIcon } from "@/components/brand-icons"
import { siteConfig } from "@/lib/site-config"

export function WhatsappFloat() {
  return (
    <a
      href={siteConfig.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agende sua sessão pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-navy text-cream shadow-[0_12px_30px_-10px_rgba(15,30,61,0.5)] transition-colors hover:bg-petrol md:bottom-8 md:right-8"
    >
      <WhatsappIcon className="size-6" />
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-cream px-4 py-2 text-xs font-medium text-navy opacity-0 shadow-md transition-[opacity,transform] duration-300 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
      >
        Agende sua sessão
      </span>
    </a>
  )
}
