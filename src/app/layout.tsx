import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://joaog.space"),
  title: "João Guilherme | Software Engineer",
  description:
    "Senior software engineer at Nubank. Personal tools for Clash Royale, Brawl Stars, music, and TV live on joaog.space.",
  keywords: ["Software Engineer", "Nubank", "Next.js", "TypeScript", "João Guilherme"],
  authors: [{ name: "João Guilherme", url: "https://joaog.space" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "João Guilherme | Software Engineer",
    description:
      "Personal tools for games, music, and TV, plus the work behind them.",
    url: "https://joaog.space",
    siteName: "joaog.space",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "João Guilherme | Software Engineer",
    description: "Personal tools for games, music, and TV.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
