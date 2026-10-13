import { siteConfig } from "@/lib/site-config"

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.images.hero.src}`,
    telephone: "+55 62 99856-0392",
    areaServed: { "@type": "Country", name: "Brasil" },
    availableService: {
      "@type": "MedicalTherapy",
      name: "Psicoterapia online",
    },
    serviceType: "Psicoterapia online",
    knowsAbout: ["Gestalt-terapia", "Psicoterapia online", "Saúde mental"],
    identifier: siteConfig.crp,
    sameAs: [siteConfig.instagram.link],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
