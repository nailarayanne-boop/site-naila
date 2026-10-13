"use client"

import { createElement, useEffect, useRef } from "react"

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"
const DURATION_MS = 800

/**
 * Entrada suave ao rolar. O conteúdo é renderizado visível no servidor e só é
 * escondido no cliente quando está abaixo da dobra, então a página continua
 * legível sem JavaScript, antes da hidratação ou se o observador nunca disparar.
 */
function armReveal(trigger: HTMLElement, targets: HTMLElement[], delays: number[]) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const rect = trigger.getBoundingClientRect()
  const alreadyInView = rect.top < window.innerHeight - 80
  if (reduceMotion || alreadyInView || targets.length === 0) return () => {}

  const setHidden = (el: HTMLElement) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(24px)"
    el.style.transition = "none"
  }
  targets.forEach(setHidden)
  // força o navegador a registrar o estado escondido antes da transição
  void trigger.offsetHeight

  let revealed = false
  let timeoutId: number | undefined

  const reveal = () => {
    if (revealed) return
    revealed = true
    cleanupListeners()
    targets.forEach((el, i) => {
      el.style.transition = `opacity ${DURATION_MS}ms ${EASE} ${delays[i]}s, transform ${DURATION_MS}ms ${EASE} ${delays[i]}s`
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    })
    const longest = Math.max(...delays) * 1000 + DURATION_MS + 100
    timeoutId = window.setTimeout(() => {
      // devolve o controle ao CSS da classe (hover etc.)
      targets.forEach((el) => {
        el.style.opacity = ""
        el.style.transform = ""
        el.style.transition = ""
      })
    }, longest)
  }

  const check = () => {
    const r = trigger.getBoundingClientRect()
    if (r.top < window.innerHeight - 80 && r.bottom > 0) reveal()
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) reveal()
    },
    { rootMargin: "0px 0px -80px 0px" },
  )
  observer.observe(trigger)
  window.addEventListener("scroll", check, { passive: true })
  window.addEventListener("resize", check)

  function cleanupListeners() {
    observer.disconnect()
    window.removeEventListener("scroll", check)
    window.removeEventListener("resize", check)
  }

  return () => {
    cleanupListeners()
    if (timeoutId) window.clearTimeout(timeoutId)
    targets.forEach((el) => {
      el.style.opacity = ""
      el.style.transform = ""
      el.style.transition = ""
    })
  }
}

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "li" | "article"
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    return armReveal(el, [el], [delay])
  }, [delay])
  return createElement(as, { ref, className }, children)
}

type StaggerProps = {
  children: React.ReactNode
  className?: string
  as?: "div" | "ul" | "ol"
  stagger?: number
}

export function Stagger({ children, className, as = "div", stagger = 0.1 }: StaggerProps) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = Array.from(el.children) as HTMLElement[]
    return armReveal(el, items, items.map((_, i) => i * stagger))
  }, [stagger])
  return createElement(as, { ref, className }, children)
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "li" | "article"
}) {
  return createElement(as, { className }, children)
}
