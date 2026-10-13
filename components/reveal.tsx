"use client"

import { motion, type Variants } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "li" | "article"
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </Component>
  )
}

type StaggerProps = {
  children: React.ReactNode
  className?: string
  as?: "div" | "ul" | "ol"
  stagger?: number
}

export function Stagger({ children, className, as = "div", stagger = 0.1 }: StaggerProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Component>
  )
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
  const Component = motion[as]
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  )
}
