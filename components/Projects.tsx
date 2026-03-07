'use client'

import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

// Policy-safe: generic titles & descriptions, no internal product names or confidential metrics
const projects = [
  {
    title: 'Enterprise Management Platform',
    description: 'Designed and implemented RESTful APIs for multiple modules. Migrated legacy ORM to Spring Data JPA. Owned database design, query optimization, and persistence layer refactoring with modern Java practices.',
    tech: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
    company: null, // Omit to avoid linking work to employer publicly
    liveUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
  {
    title: 'Enterprise ERP System',
    description: 'Delivered new features and fixes for a large-scale ERP application (inventory and business process management). Built and maintained backend services and RESTful APIs with Laravel and Node.js.',
    tech: ['PHP', 'Laravel', 'Node.js'],
    company: null,
    liveUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=800&h=500&fit=crop',
  },
  {
    title: 'Data Migration & Indexing Platform',
    description: 'Led migration of large-scale enterprise data from multiple regions and source systems into a unified platform. Built custom connectors and ETL pipelines, and implemented indexing for fast, structured search.',
    tech: ['Java', 'ETL', 'Search & Indexing'],
    company: null,
    liveUrl: '',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background-light dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
        >
          Featured Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-slate-600 dark:text-slate-400 mb-16"
        >
          Architecting solutions for real-world complexity
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full [perspective:1000px]"
            >
              <TiltCard className="h-full" maxTilt={6} scale={1}>
                <article className="group relative overflow-hidden rounded-card-lg glass-card shadow-soft hover:shadow-soft-lg hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 h-full flex flex-col">
              <div className="aspect-[16/10] overflow-hidden bg-slate-300 dark:bg-slate-800/50 relative">
                {project.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent-start/20 to-accent-end/10 group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background-light/90 dark:from-background/80 to-transparent opacity-60" />
                {project.company && (
                  <span className="absolute bottom-2 left-3 text-xs font-medium text-slate-300">
                    {project.company}
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-accent-start tracking-widest uppercase mb-2">
                  Project
                </p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-200/80 dark:bg-white/5 rounded-full text-xs text-slate-600 dark:text-slate-400 border border-slate-300/50 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-accent-start text-sm font-medium transition-colors"
                  >
                    View live site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
