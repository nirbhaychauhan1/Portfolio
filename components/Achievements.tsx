'use client'

import { motion } from 'framer-motion'

const achievements = [
  { name: 'Oracle Certified Associate, Java SE 8', issuer: 'Oracle' },
  { name: 'Database Administrator Associate', issuer: 'Microsoft' },
  { name: 'Python Programming', issuer: 'Sololearn' },
  { name: 'Web Design for Everybody (HTML, CSS)', issuer: 'University of Michigan' },
  { name: 'Android Application Development', issuer: 'Netcamp Solutions' },
  { name: 'Network Management', issuer: 'Netcamp Solutions' },
  { name: '5 Star Gold Level in Java', issuer: 'HackerRank' },
  { name: 'Star Certificate (Performance recognition)', issuer: 'Employer' },
]

export default function Achievements() {
  return (
    <section className="py-24 px-6 bg-background-light dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center"
        >
          Certifications & Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-400 text-center mb-12"
        >
          Recognitions and course certifications
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-card p-5 hover:border-accent-start/20 transition-colors"
            >
              <span className="text-accent-start text-lg block mb-1">✓</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 text-sm block">{item.name}</span>
              <span className="text-slate-500 dark:text-slate-500 text-xs">{item.issuer}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
