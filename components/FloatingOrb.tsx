'use client'

import { motion } from 'framer-motion'

interface FloatingOrbProps {
  className?: string
  size?: number
  color?: string
  delay?: number
  duration?: number
  blur?: number
}

export default function FloatingOrb({
  className = '',
  size = 400,
  color = 'rgba(249, 115, 22, 0.15)',
  delay = 0,
  duration = 8,
  blur = 120,
}: FloatingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  )
}
