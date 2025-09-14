import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { Navigation } from "@/components/Navigation/Navigation"
import { Skeleton } from "@/components/ui/skeleton"

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
       
        <Suspense fallback={<Skeleton />}>
          <Navigation/>
          {children}
          <Footer />
        </Suspense>
         
      </body>
    </html>
  )
}
