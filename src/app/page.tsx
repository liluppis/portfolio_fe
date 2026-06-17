import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-pink min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-purple text-4xl font-heading">Hello World</h1>
      <p className="text-white">Welcome to my portfolio!</p>
      <p className="font-mono text-comment">// let's go</p>
    </main>
  )
}
