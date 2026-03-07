'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TiltCard from './TiltCard'
import FloatingOrb from './FloatingOrb'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-20 px-6 overflow-hidden bg-background-light dark:bg-background">
      {/* 3D floating orbs - depth background */}
      <FloatingOrb className="top-1/4 -left-32" size={380} delay={0} duration={10} />
      <FloatingOrb className="bottom-1/4 -right-24" size={320} color="rgba(253, 186, 116, 0.12)" delay={1} duration={12} />
      <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={280} color="rgba(249, 115, 22, 0.08)" delay={2} duration={9} />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero-name text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              Nirbhay Chauhan
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text"
          >
            Full-Stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg max-w-xl leading-relaxed"
          >
            Backend with <span className="hero-tech text-slate-900 dark:text-white font-medium">Java</span>, <span className="hero-tech text-slate-900 dark:text-white font-medium">PHP</span>, <span className="hero-tech text-slate-900 dark:text-white font-medium">Node.js</span> — and front-end integration. Spring Boot, Microservices, REST APIs, MySQL, Kafka.
          </motion.p>
          {/* Orix-style design tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-slate-500 dark:text-slate-500 text-sm max-w-md italic border-l-2 border-accent-start/40 pl-4"
          >
            Making complex applications simple through clean architecture and meaningful engineering.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-start to-accent-end text-white px-6 py-3.5 rounded-xl font-semibold shadow-soft hover:shadow-glow-orange hover:scale-[1.02] transition-all duration-300"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass-card text-slate-900 dark:text-white px-6 py-3.5 rounded-xl font-semibold border-slate-300 dark:border-white/10 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:scale-[1.02] transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <TiltCard className="w-full max-w-md aspect-square" maxTilt={8} scale={1}>
            <div className="relative w-full h-full rounded-[2rem] glass-card p-4 shadow-soft-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-start/20 to-accent-end/10 blur-3xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
                <Image
                  src="/profile.png"
                  alt="Nirbhay Chauhan"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 28rem"
                />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
