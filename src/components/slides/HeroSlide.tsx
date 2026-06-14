import { motion } from 'framer-motion'
import type { Slide } from '../../data/slides'
import {
  fadeUpVariants,
  staggerContainerSlowVariants,
} from '../../lib/animations'
import { HeroTitle } from './SlideTypography'

interface HeroSlideProps {
  slide: Slide
}

export function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={slide.image}
          alt={slide.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/85 to-[#050810]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/70 via-transparent to-[#050810]/70" />
      </motion.div>

      <motion.div
        variants={staggerContainerSlowVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-8 text-center md:px-16"
      >
        <HeroTitle>{slide.title}</HeroTitle>

        <motion.p
          variants={fadeUpVariants}
          className="hero-subtitle mx-auto mb-5 max-w-3xl md:mb-6"
        >
          {slide.subtitle}
        </motion.p>

        <motion.p variants={fadeUpVariants} className="hero-tagline mx-auto max-w-2xl">
          {slide.tagline}
        </motion.p>

        <motion.div variants={fadeUpVariants} className="mt-10 flex justify-center md:mt-12">
          <div className="glass rounded-xl px-5 py-2.5">
            <span className="font-body text-sm text-slate-500">Use </span>
            <kbd className="font-display rounded-md bg-white/10 px-2 py-0.5 text-sm font-semibold text-emerald-400">
              →
            </kbd>
            <span className="font-body text-sm text-slate-500"> to navigate</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
