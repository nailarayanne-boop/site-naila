const whatsappNumber = "5562998560392"
const whatsappMessage = "Olá, Naila! Vim pelo site e gostaria de agendar uma sessão."

export const siteConfig = {
  name: "Naila Rayanne",
  role: "Psicóloga",
  crp: "CRP 09/012807",
  approach: "Gestalt-terapia",
  url: "https://www.psicologanailarayanne.com",
  title: "Naila Rayanne | Psicóloga Online — CRP 09/012807",
  description:
    "Psicoterapia online humanizada com a psicóloga Naila Rayanne (CRP 09/012807). Um espaço seguro, ético e acolhedor para cuidar da sua saúde emocional, de onde estiver.",

  whatsapp: {
    display: "(62) 99856-0392",
    number: whatsappNumber,
    link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  },
  instagram: {
    handle: "@psi.nailarayanne",
    link: "https://www.instagram.com/psi.nailarayanne/",
  },

  images: {
    hero: {
      src: "/images/naila-hero.jpg",
      alt: "Naila Rayanne sorrindo durante um atendimento online, sentada diante do notebook em seu consultório com luz quente e plantas ao fundo",
    },
    about: {
      src: "/images/naila-sobre.jpg",
      alt: "Retrato de Naila Rayanne usando óculos e camisa listrada caramelo, com prateleiras e plantas ao fundo",
    },
    session: {
      src: "/images/naila-atendimento.jpg",
      alt: "Naila Rayanne sorrindo, de óculos e fone de ouvido, pronta para uma sessão por videochamada",
    },
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    badges: ["Atendimento 100% online", "Terapia feita para você"],
    title: "Terapia humanizada, com escuta e apoio para o seu bem-estar emocional.",
    subtitle:
      "Um espaço seguro, ético e acolhedor para você falar sobre o que sente, de onde estiver.",
  },

  support: {
    title: "Já pensou ter suporte emocional de onde estiver?",
    text: "A terapia online permite que você cuide da sua saúde mental com conforto, segurança e acolhimento, sem precisar sair de casa. Em um espaço sigiloso e respeitoso, você pode falar sobre seus sentimentos, desafios e vivências com tranquilidade e confiança. O atendimento é profissional e humanizado, com escuta atenta e respeito à sua individualidade.",
  },

  about: {
    paragraphs: [
      "Sou Naila Rayanne, psicóloga (CRP 09/012807), e acredito que cada pessoa possui recursos internos importantes para lidar com suas dores, desafios e momentos difíceis. Meu trabalho é oferecer um espaço seguro, empático e acolhedor, onde você possa se sentir à vontade para falar, refletir e se compreender melhor.",
      "Atuo com psicoterapia online pela abordagem da Gestalt-terapia, que valoriza o encontro, a consciência do aqui e agora e a forma única como cada pessoa vive suas experiências, sempre respeitando o seu ritmo e as suas necessidades.",
      "Meu objetivo é ajudar você a compreender seus pensamentos, emoções e comportamentos, promovendo mais equilíbrio emocional, autoconhecimento e qualidade de vida.",
    ],
  },

  finalCta: "Dar o primeiro passo é um ato de cuidado com você.",
} as const
