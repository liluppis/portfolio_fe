import React from "react"

export interface TimelineSegment {
  direction: "vertical" | "horizontal"
  length: string
  className?: string
}

export interface TimelineBranch {
  position: string
  length: string
  direction: "left" | "right" | "up" | "down"
  className?: string
}

export interface TimelineProps {
  segments?: TimelineSegment[]
  branches?: TimelineBranch[]
  className?: string
  thickness?: string
  color?: string
  children?: React.ReactNode
}

export const Timeline: React.FC<TimelineProps> = ({
  segments = [],
  branches = [],
  className = "",
  thickness = "10px",
  color = "purple",
  children,
}) => {
  return <div className={`relative ${className}`}>{children}</div>
}

export interface TimelineLineProps {
  direction: "vertical" | "horizontal"
  length?: string
  thickness?: string
  color?: string
  className?: string
  style?: React.CSSProperties
}

export const TimelineLine: React.FC<TimelineLineProps> = ({
  direction,
  length = "100%",
  thickness = "10px",
  color,
  className = "",
  style = {},
}) => {
  const isVertical = direction === "vertical"

  const colorMap: Record<string, string> = {
    purple: "#433285",
    "dark-purple": "#241531",
    "light-purple": "#a788b2",
    pink: "#deb3c3",
    orange: "#E5604D",
    "light-orange": "#eb988c",
  }

  const bgColor = color ? colorMap[color] || color : undefined

  return (
    <div
      className={className}
      style={{
        width: isVertical ? thickness : length,
        height: isVertical ? length : thickness,
        backgroundColor: bgColor,
        ...style,
      }}
    />
  )
}

export interface TimelineNodeProps {
  size?: string
  color?: string
  className?: string
  children?: React.ReactNode
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({
  size = "20px",
  color = "purple",
  className = "",
  children,
}) => {
  const colorMap: Record<string, string> = {
    purple: "#433285",
    "dark-purple": "#241531",
    pink: "#deb3c3",
    orange: "#241531",
    "light-orange": "#eb988c",
  }

  const bgColor = colorMap[color] || color

  return (
    <div
      className={`rounded-full flex items-center justify-center ${className}`}
      style={{ width: size, height: size, backgroundColor: bgColor }}
    >
      {children}
    </div>
  )
}

export interface TimelineBranchProps {
  direction: "left" | "right" | "up" | "down"
  length?: string
  thickness?: string
  color?: string
  className?: string
  children?: React.ReactNode
}

export const TimelineBranch: React.FC<TimelineBranchProps> = ({
  direction,
  length = "100px",
  thickness = "10px",
  color = "purple",
  className = "",
  children,
}) => {
  const isHorizontal = direction === "left" || direction === "right"

  return (
    <div className={`flex items-center ${className}`}>
      <TimelineLine
        direction={isHorizontal ? "horizontal" : "vertical"}
        length={length}
        thickness={thickness}
        color={color}
      />
      {children}
    </div>
  )
}
