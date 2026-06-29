import React from "react"

export interface TimelineProps {
  /** viewBox coordinate space, e.g. "0 0 1920 960" */
  viewBox: string
  className?: string
  children?: React.ReactNode
}

/**
 * Absolute SVG overlay for decorative spine lines.
 * Pin it inside a `relative` parent; it fills that parent.
 * Draw paths/lines as children in the viewBox coordinate space.
 */
export const Timeline: React.FC<TimelineProps> = ({
  viewBox,
  className = "",
  children,
}) => {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
    >
      {children}
    </svg>
  )
}
