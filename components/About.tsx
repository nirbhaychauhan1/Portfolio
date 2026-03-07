'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background-light dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-1 w-20 bg-gradient-to-r from-accent-start to-accent-end rounded-full mb-12"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="glass-card rounded-card-lg p-8 shadow-soft">
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              I&apos;m a Full-Stack Developer with strong backend skills in <span className="text-slate-900 dark:text-white font-medium">Java</span>, <span className="text-slate-900 dark:text-white font-medium">Node.js</span>, and <span className="text-slate-900 dark:text-white font-medium">PHP</span>. I build robust, scalable systems — from REST APIs and data migration to front-end integration and enterprise applications.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I work across the stack: Spring Boot, Laravel, Node.js, microservices, and modern front-end. I deliver
              <span className="text-slate-900 dark:text-white font-medium"> end-to-end software</span> that is maintainable, performant,
              and aligned with business goals.
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm mt-6 italic">
              Smooth UI, meaningful UX — making complex applications simple for users.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Java & Node.js', 'REST APIs', 'Data Migration', 'Full-Stack'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass-card rounded-card p-4 text-center hover:bg-slate-300/30 dark:hover:bg-white/[0.05] transition-colors"
              >
                <span className="text-slate-900 dark:text-white font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
