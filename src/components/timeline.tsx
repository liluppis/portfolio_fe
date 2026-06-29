import React from "react"

export interface TimelineProps {
  viewBox: string
  className?: string
  children?: React.ReactNode
}

export const Timeline: React.FC<TimelineProps> = ({
  viewBox,
  className = "",
  children,
}) => {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full z-0 ${className}`}
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
    >
      {children}
    </svg>
  )
}
