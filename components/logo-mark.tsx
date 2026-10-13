type LogoMarkProps = {
  className?: string
  strokeWidth?: number
  title?: string
}

export function LogoMark({ className, strokeWidth = 1.5, title }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 202 146"
      fill="none"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        d="M7 139V7l91 132V76h62a34.5 34.5 0 0 0 0-69H98l97 132"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
