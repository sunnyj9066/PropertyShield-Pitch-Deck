import { motion } from 'framer-motion'
import { fadeUpVariants } from '../../lib/animations'

interface SlideEyebrowProps {
  text: string
}

export function SlideEyebrow({ text }: SlideEyebrowProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="eyebrow mb-3"
    >
      {text}
    </motion.p>
  )
}

interface SlideTitleProps {
  children: string
  className?: string
}

export function SlideTitle({ children, className = '' }: SlideTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className={`slide-title mb-6 md:mb-8 ${className}`}
    >
      {children}
    </motion.h2>
  )
}

export function HeroTitle({ children }: { children: string }) {
  return (
    <motion.h1 variants={fadeUpVariants} className="hero-title text-gradient mb-5 md:mb-6">
      {children}
    </motion.h1>
  )
}
