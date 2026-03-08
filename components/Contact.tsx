'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Email', value: 'cnirbhay62@gmail.com', href: 'mailto:cnirbhay62@gmail.com', icon: '✉' },
  { label: 'Phone', value: '+91-7668903337', href: 'tel:+917668903337', icon: '📞' },
  { label: 'LinkedIn', value: 'Connect', href: 'https://www.linkedin.com/in/nirbhaychauhan1', icon: 'in' },
  { label: 'GitHub', value: 'nirbhaychauhan1', href: 'https://github.com/nirbhaychauhan1', icon: '⌘' },
  { label: 'Twitter', value: '@1nirbhaychauhan', href: 'https://twitter.com/1nirbhaychauhan', icon: '𝕏' },
  { label: 'Instagram', value: 'nirbhay_chauhan1', href: 'https://www.instagram.com/nirbhay_chauhan1', icon: '📷' },
  { label: 'HackerRank', value: 'Profile', href: 'https://www.hackerrank.com/profile/_191500509', icon: 'HR' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background-light dark:bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-card-lg p-8 sm:p-12 relative overflow-hidden shadow-soft-lg"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-start/20 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Let&apos;s build something epic
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto">
              Open to full-stack and backend roles. Let&apos;s connect and discuss your next project.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 bg-slate-200/50 dark:bg-white/5 rounded-2xl hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors border border-slate-300/50 dark:border-white/5 text-center block"
                >
                  <span className="text-accent-start text-2xl mb-3 block">{link.icon}</span>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{link.label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1 truncate">{link.value}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
