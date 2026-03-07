'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  perspective?: number
  maxTilt?: number
  scale?: number
}

export default function TiltCard({
  children,
  className = '',
  perspective = 1000,
  maxTilt = 12,
  scale = 1,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useTransform(y, [0, 1], [maxTilt, -maxTilt])
  const rotateY = useTransform(x, [0, 1], [-maxTilt, maxTilt])
  const smoothRotateX = useSpring(rotateX, { stiffness: 250, damping: 25 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 250, damping: 25 })

  const handleMove = (e: React.PointerEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const centerX = rect.left + width / 2
    const centerY = rect.top + height / 2
    const posX = (e.clientX - centerX) / width + 0.5
    const posY = (e.clientY - centerY) / height + 0.5
    x.set(posX)
    y.set(posY)
  }

  const handleLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <motion.div
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          scale,
          transformStyle: 'preserve-3d',
          transformPerspective: perspective,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
