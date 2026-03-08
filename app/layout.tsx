import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const siteUrl = 'https://nirbhaychauhan1.github.io/Portfolio'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nirbhay Chauhan | Full-Stack Developer',
  description: 'Personal portfolio of Nirbhay Chauhan - Full-Stack Developer: Java, Node.js, PHP backend; Spring Boot, Microservices, REST APIs, and modern front-end.',
  keywords: ['Nirbhay Chauhan', 'Full-Stack Developer', 'Java Developer', 'Backend Engineer', 'Spring Boot', 'Node.js', 'PHP', 'REST APIs', 'Microservices'],
  authors: [{ name: 'Nirbhay Chauhan', url: siteUrl }],
  creator: 'Nirbhay Chauhan',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Nirbhay Chauhan | Full-Stack Developer',
    description: 'Personal portfolio of Nirbhay Chauhan - Full-Stack Developer: Java, Node.js, PHP backend; Spring Boot, Microservices, REST APIs.',
    siteName: 'Nirbhay Chauhan Portfolio',
    images: [{ url: '/profile.png', width: 1200, height: 630, alt: 'Nirbhay Chauhan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nirbhay Chauhan | Full-Stack Developer',
    description: 'Full-Stack Developer: Java, Node.js, PHP · Spring Boot, Microservices, REST APIs.',
    creator: '@1nirbhaychauhan',
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nirbhay Chauhan',
    jobTitle: 'Full-Stack Developer',
    url: siteUrl,
    image: `${siteUrl}/profile.png`,
    sameAs: [
      'https://www.linkedin.com/in/nirbhaychauhan1',
      'https://github.com/nirbhaychauhan1',
      'https://twitter.com/1nirbhaychauhan',
      'https://www.instagram.com/nirbhay_chauhan1',
      'https://www.hackerrank.com/profile/_191500509',
    ],
    email: 'cnirbhay62@gmail.com',
    description: 'Full-Stack Developer: Java, Node.js, PHP backend; Spring Boot, Microservices, REST APIs, and modern front-end.',
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background-light dark:bg-background text-slate-900 dark:text-slate-100`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
