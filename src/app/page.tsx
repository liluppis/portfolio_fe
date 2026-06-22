import Image from "next/image"
import profile from "@/assets/lisaupperud.jpeg"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-pink min-h-screen flex flex-col justify-center pl-50 gap-15">
      <div className="flex flex-row items-center gap-20">
        <Image
          src={profile}
          alt="Lisa Upperud"
          width={300}
          height={300}
          className="rounded-full border-10 border-purple"
        />
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
      <div>
        <Link href="/menu" className="group flex flex-row ml-150">
          <span className="text-purple font-heading text-4xl whitespace-nowrap">
            EXPLORE MY PORTFOLIO
          </span>
        </Link>
      </div>
    </main>
  )
}
