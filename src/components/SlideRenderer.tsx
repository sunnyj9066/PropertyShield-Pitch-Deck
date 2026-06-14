import { AnimatePresence, motion } from 'framer-motion'
import type { Slide } from '../data/slides'
import { HeroSlide } from './slides/HeroSlide'
import { SplitSlide } from './slides/SplitSlide'
import { ArchitectureSlide } from './slides/ArchitectureSlide'
import { ListSlide } from './slides/ListSlide'
import { EconomicsSlide } from './slides/EconomicsSlide'

interface SlideRendererProps {
  slide: Slide
  direction: number
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

export function SlideRenderer({ slide, direction }: SlideRendererProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slide.id}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 35 },
          opacity: { duration: 0.3 },
        }}
        className="absolute inset-0 pb-28 pt-3"
      >
        {slide.type === 'hero' && <HeroSlide slide={slide} />}

        {slide.type === 'split' && slide.sections && (
          <SplitSlide
            eyebrow={slide.eyebrow}
            title={slide.title}
            image={slide.image}
            imageAlt={slide.imageAlt}
            sections={slide.sections}
          />
        )}

        {slide.type === 'architecture' && slide.points && (
          <ArchitectureSlide
            eyebrow={slide.eyebrow}
            title={slide.title}
            image={slide.image}
            imageAlt={slide.imageAlt}
            points={slide.points}
          />
        )}

        {slide.type === 'list' && slide.sections && (
          <ListSlide
            eyebrow={slide.eyebrow}
            title={slide.title}
            image={slide.image}
            imageAlt={slide.imageAlt}
            sections={slide.sections}
          />
        )}

        {slide.type === 'economics' && slide.sections && (
          <EconomicsSlide
            eyebrow={slide.eyebrow}
            title={slide.title}
            image={slide.image}
            imageAlt={slide.imageAlt}
            sections={slide.sections}
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
