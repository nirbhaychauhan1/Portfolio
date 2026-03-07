'use client'

import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'PHP', 'JavaScript', 'Python', 'SQL'],
    icon: 'code',
  },
  {
    title: 'Frameworks & Web',
    items: ['HTML5', 'CSS3', 'Node.js', 'Spring Boot', 'Laravel', 'JPA', 'Microservices', 'Bootstrap', 'JavaScript'],
    icon: 'layers',
  },
  {
    title: 'Tools & Platforms',
    items: ['Kafka', 'Kubernetes', 'Apache Solr', 'HCI', 'HCP', 'VS Code', 'IntelliJ', 'Eclipse', 'PyCharm'],
    icon: 'settings',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background-light dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center"
        >
          Technical Arsenal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-slate-600 dark:text-slate-400 text-center mb-16"
        >
          Expertise in building modern enterprise solutions
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="h-full [perspective:1000px]"
            >
              <TiltCard className="h-full" maxTilt={5} scale={1}>
                <div className="glass-card rounded-card-lg p-8 shadow-soft hover:shadow-glow-orange transition-shadow duration-300 h-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-accent-start text-2xl">
                  {group.icon === 'code' && '⌨'}
                  {group.icon === 'layers' && '▦'}
                  {group.icon === 'settings' && '⚙'}
                </span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-200/80 dark:bg-white/5 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-white/5 hover:border-accent-start/30 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
