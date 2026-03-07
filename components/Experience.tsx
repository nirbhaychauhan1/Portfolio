'use client'

import { motion } from 'framer-motion'

// Policy-safe: generic product references; company names can be replaced with "Confidential" if required
const experiences = [
  {
    company: 'Mishal Technologies',
    role: 'Web Developer',
    period: 'Oct 2025 – Present',
    location: 'Mumbai, Maharashtra',
    bullets: [
      'Implementing new features and fixes for an enterprise ERP application using PHP, Laravel, and Node.js.',
      'Working on multiple modules of the ERP system using agile methodologies.',
      'Owning database operations and backend logic for the application.',
      'Developing and maintaining RESTful APIs and front-end–backend integration.',
      'Collaborating with the team to deliver robust solutions and maintain code quality.',
    ],
  },
  {
    company: 'Audax Labs',
    role: 'Associate Consultant – Java Developer',
    period: 'Oct 2023 – Present',
    location: 'Noida, Uttar Pradesh',
    bullets: [
      'Developing RESTful APIs and data migration solutions with Spring Boot.',
      'Automating data processing pipelines to improve efficiency and reduce manual effort.',
      'Working with Java 17, MySQL, and enterprise content platforms.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background-light dark:bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="relative border-l-2 border-accent-start/30 pl-8 sm:pl-10 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <span className="absolute -left-[2.6rem] top-0 w-5 h-5 rounded-full bg-accent-start ring-8 ring-accent-start/10 group-hover:scale-125 transition-transform" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                <span className="text-accent-start font-mono text-sm">{exp.period}</span>
              </div>
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">{exp.company}</p>
              <p className="text-slate-500 dark:text-slate-500 text-sm mb-3">{exp.location}</p>
              <ul className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-1.5 list-disc list-inside text-sm">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
