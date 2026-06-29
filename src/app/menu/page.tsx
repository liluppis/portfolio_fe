import Link from "next/link"
import { MenuItem } from "@/components/menu-items"
import { motion } from "motion/react"
import { Timeline } from "@/components/timeline"

export default function Menu() {
  return (
    <main className="bg-pink min-h-screen flex flex-col justify-center items-start relative">
      <Timeline viewBox="0 0 1120 720">
        <path
          d="M 180 125 V 646"
          stroke="var(--color-purple)"
          strokeWidth={10}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 180 641 H 0"
          stroke="var(--color-purple)"
          strokeWidth={10}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </Timeline>
      <div className="flex flex-row w-[750px] relative z-10 ml-63">
        <div className="flex flex-col">
          <h1 className="text-purple font-heading text-4xl leading-none border-b-10 border-purple pb-4 w-[665px]">
            WHAT WOULD YOU LIKE TO SEE?
          </h1>

          <MenuItem
            number="01"
            comment="// studies, internships & more"
            title="EXPERIENCE"
            meta="2 internships | agile teams"
            href="/experience"
          />
          <MenuItem
            number="02"
            comment="// .NET, Java & the rest of the toolbox"
            title="TECHSTACK"
            meta=".NET | Java | React | SQL"
            href="/techstack"
          />
          <MenuItem
            number="03"
            comment="// things I've actually shipped"
            title="PROJECTS"
            meta="6 shipped"
            href="/projects"
          />
          <MenuItem
            number="04"
            comment="// the human behind the commits"
            title="THE WHOLE STORY"
            meta="coffee-driven | human first"
            href="/about"
          />
        </div>
      </div>
      <div className="absolute bottom-10 w-full">
        <Link
          href="/"
          className="flex items-center gap-2 text-purple font-mono text-lg ml-10"
        >
          <span>←</span>
          <span>cd ~/start</span>
        </Link>
      </div>
    </main>
  )
}
