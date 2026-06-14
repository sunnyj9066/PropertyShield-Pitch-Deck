import { motion } from 'framer-motion'
import { ChefHat, Layers, Store } from 'lucide-react'
import {
  fadeUpSmallVariants,
  staggerContainerArchVariants,
} from '../../lib/animations'
import { SlideEyebrow, SlideTitle } from './SlideTypography'

const iconMap = {
  storefront: Store,
  queue: Layers,
  chef: ChefHat,
}

interface ArchitectureSlideProps {
  eyebrow?: string
  title: string
  image: string
  imageAlt: string
  points: { title: string; description: string; icon?: string }[]
}

export function ArchitectureSlide({
  eyebrow,
  title,
  image,
  imageAlt,
  points,
}: ArchitectureSlideProps) {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative h-[32vh] shrink-0 overflow-hidden lg:h-full lg:w-2/5"
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050810]/95" />
      </motion.div>

      <div className="flex flex-1 flex-col justify-center overflow-y-auto px-6 py-6 lg:px-10 lg:py-12 xl:px-14">
        {eyebrow && <SlideEyebrow text={eyebrow} />}
        <SlideTitle>{title}</SlideTitle>

        <motion.div
          variants={staggerContainerArchVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3.5 md:gap-4"
        >
          {points.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap] ?? Layers
            return (
              <motion.div
                key={point.title}
                variants={fadeUpSmallVariants}
                className="glass-strong flex gap-4 rounded-2xl p-5 md:gap-5 md:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-indigo-500/20 ring-1 ring-white/10 md:h-12 md:w-12">
                  <Icon className="h-5 w-5 text-emerald-400 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="mb-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="section-label text-indigo-400">
                      Point {index + 1}:
                    </span>
                    <h3 className="point-title">{point.title}</h3>
                  </div>
                  <p className="body-lg">{point.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
