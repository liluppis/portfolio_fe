import Image from "next/image"
import profile from "@/assets/lisaupperud.jpeg"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-pink min-h-screen max-w-screen flex flex-col justify-center pl-50 gap-15 relative">
      <div className="flex flex-row items-center gap-20">
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

      <div className="flex items-center ml-37 mt-23 gap-4">
        <Link href="/menu" className="group">
          <span className="inline-block text-purple font-heading text-4xl whitespace-nowrap group-hover:-skew-x-12 transition-transform duration-300 ease-in-out">
            EXPLORE MY PORTFOLIO
          </span>
        </Link>
      </div>

      <div className="absolute bottom-10 left-10">
        <p className="font-mono text-comment text-sm">
          // status: open to learn
        </p>
      </div>
    </main>
  )
}
