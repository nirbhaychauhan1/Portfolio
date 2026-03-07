import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Nirbhay Chauhan | Full-Stack Developer',
  description: 'Personal portfolio of Nirbhay Chauhan - Full-Stack Developer: Java, Node.js, PHP backend; Spring Boot, Microservices, REST APIs, and modern front-end.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background-light dark:bg-background text-slate-900 dark:text-slate-100`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
