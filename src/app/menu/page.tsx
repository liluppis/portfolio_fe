import Link from "next/link"
import { TimelineLine } from "@/components/timeline"
import { MenuItem } from "@/components/menu-items"
import { motion } from "motion/react"

export default function Menu() {
  return (
    <main className="bg-pink min-h-screen flex flex-col justify-center items-start relative">
      <div className="flex flex-row w-[750px]">
        <div className="flex flex-row items-baseline">
          <TimelineLine
            direction="horizontal"
            length="400px"
            thickness="10px"
            color="purple"
          />
          <TimelineLine
            direction="vertical"
            length="566px"
            thickness="10px"
            color="purple"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-purple font-heading text-4xl ml-5 leading-none">
            WHAT WOULD YOU LIKE TO SEE?
          </h1>
          <div>
            <TimelineLine
              direction="horizontal"
              length="750px"
              thickness="10px"
              color="purple"
            />
          </div>
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
