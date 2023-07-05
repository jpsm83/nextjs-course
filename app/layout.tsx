import './globals.css'
import type { Metadata } from "next";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "metada",
  description: "testing metadata"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <nav><h1>my nav bar</h1></nav>
        {children}
        </body>
    </html>
  )
}
