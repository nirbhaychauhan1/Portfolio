'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-card-lg p-8 max-w-2xl mx-auto shadow-soft"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-start/20 to-accent-end/10 flex items-center justify-center flex-shrink-0 text-accent-start text-2xl">
              🎓
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">B.Tech – Computer Science and Engineering</h3>
              <p className="text-slate-700 dark:text-slate-300">GLA University, Mathura</p>
              <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">CGPA 7.9 • 2019 – 2023 • Mathura, Uttar Pradesh</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
