import { InstagramIcon, WhatsappIcon } from "@/components/brand-icons"
import { LogoMark } from "@/components/logo-mark"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <LogoMark className="h-12 w-auto text-cream" strokeWidth={1.2} />
            <p className="mt-6 font-serif text-xl">
              {siteConfig.name} — {siteConfig.role}
            </p>
            <p className="eyebrow mt-2 text-[0.65rem] text-sand">{siteConfig.crp}</p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-cream/75 transition-colors hover:text-sand">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            <a
              href={siteConfig.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${siteConfig.instagram.handle}`}
              className="flex size-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-sand hover:text-sand"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${siteConfig.whatsapp.display}`}
              className="flex size-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-sand hover:text-sand"
            >
              <WhatsappIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-sm text-cream/65 md:flex-row md:justify-between">
          <p className="max-w-xl">
            Este site não oferece atendimento de urgência. Em situação de crise, ligue 188 (CVV) ou 192 (SAMU).
          </p>
          <p>© 2026 Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
