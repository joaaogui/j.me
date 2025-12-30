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
  title: 'João Guilherme | Software Engineer',
  description: 'Software Engineer specializing in React, TypeScript, and Frontend Architecture. Currently at Nubank.',
  keywords: ['Software Engineer', 'Frontend', 'React', 'TypeScript', 'Next.js'],
  authors: [{ name: 'João Guilherme' }],
  openGraph: {
    title: 'João Guilherme | Software Engineer',
    description: 'Software Engineer specializing in React, TypeScript, and Frontend Architecture.',
    type: 'website',
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
