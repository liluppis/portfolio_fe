"use client"

import Image from "next/image"
import profile from "@/assets/lisaupperud.jpeg"
import Link from "next/link"
import { Timeline } from "@/components/timeline"
import { motion } from "motion/react"

export default function Home() {
  return (
    <main className="bg-pink min-h-screen max-w-screen flex flex-col pt-40 pl-50 gap-15 relative">
      <Timeline viewBox="0 0 1920 960">
        <motion.path
          d="M 430 540 V 740 H 1920"
          stroke="var(--color-purple)"
          strokeWidth={10}
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </Timeline>
      <div className="flex flex-row items-center gap-20 relative z-10">
        <div className="relative">
          <Image
            src={profile}
            alt="Lisa Upperud"
            width={300}
            height={300}
            className="rounded-full border-10 border-purple"
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <h1 className="flex flex-col items-start text-5xl">
            <span className="text-dark-purple font-heading">HI</span>
            <span className="text-dark-purple font-heading">I'M LISA</span>
          </h1>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start text-xl">
              <p className="text-dark-purple font-bold">
                Junior System Developer
              </p>
              <p className="text-dark-purple font-bold w-100">
                Crafting Scalable Architectural Systems in .NET, Java and Modern
                Web Technologies.
              </p>
            </div>
            <p className="font-mono text-comment">
              // also fluent in coffee and clean commits
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute left-250 z-10"
        style={{ top: "calc(740 / 960 * 100%)" }}
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "-150%" }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      >
        <Link href="/menu" className="group inline-block">
          <span className="inline-block text-purple font-heading text-4xl whitespace-nowrap group-hover:-skew-x-20 transition-transform duration-300 ease-in-out">
            EXPLORE MY PORTFOLIO
          </span>
        </Link>
      </motion.div>
      <div className="absolute bottom-10 left-10">
        <p className="font-mono text-comment text-sm">
          // status: open to learn
        </p>
      </div>
    </main>
  )
}
