import type { Metadata } from "next"
import { Archivo_Black, Hanken_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Lisa | Developer Portfolio",
  description: "Junior System Developer — .NET, Java & modern web",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  )
}
