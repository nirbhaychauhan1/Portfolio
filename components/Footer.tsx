'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  { href: 'https://www.linkedin.com/in/nirbhaychauhan1', label: 'LinkedIn', icon: 'in' },
  { href: 'https://github.com/nirbhaychauhan1', label: 'GitHub', icon: '⌘' },
  { href: 'https://twitter.com/1nirbhaychauhan', label: 'Twitter', icon: '𝕏' },
  { href: 'https://www.instagram.com/nirbhay_chauhan1', label: 'Instagram', icon: '📷' },
  { href: 'https://www.hackerrank.com/profile/_191500509', label: 'HackerRank', icon: 'HR' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-slate-200 dark:border-white/5 text-center bg-background-light dark:bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-accent-start transition-colors text-sm font-medium"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">© {new Date().getFullYear()} Nirbhay Chauhan. All rights reserved.</p>
        <p className="text-slate-500 dark:text-slate-500 text-xs mt-2">Moradabad, Uttar Pradesh · Built with Next.js & Tailwind</p>
        <p className="text-slate-500/80 dark:text-slate-500/80 text-xs mt-1">Smooth UI & meaningful UX</p>
      </div>
    </motion.footer>
  )
}
