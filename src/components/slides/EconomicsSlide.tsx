import { motion } from 'framer-motion'
import { TrendingUp, Building2, Headphones } from 'lucide-react'
import type { SlideSection } from '../../data/slides'
import {
  fadeUpSmallVariants,
  staggerContainerVariants,
} from '../../lib/animations'
import { SlideEyebrow, SlideTitle } from './SlideTypography'

const sectionIcons = {
  'Current State': TrendingUp,
  'Future Scale': Building2,
  'Next-Gen Feature': Headphones,
}

interface EconomicsSlideProps {
  eyebrow?: string
  title: string
  image: string
  imageAlt: string
  sections: SlideSection[]
}

export function EconomicsSlide({
  eyebrow,
  title,
  image,
  imageAlt,
  sections,
}: EconomicsSlideProps) {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative h-[32vh] shrink-0 overflow-hidden lg:h-full lg:w-1/2"
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050810]/90" />
      </motion.div>

      <div className="flex flex-1 flex-col justify-center overflow-y-auto px-6 py-6 lg:px-10 lg:py-12 xl:px-14">
        {eyebrow && <SlideEyebrow text={eyebrow} />}
        <SlideTitle>{title}</SlideTitle>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3.5 md:gap-4"
        >
          {sections.map((section) => {
            const Icon =
              sectionIcons[section.label as keyof typeof sectionIcons] ?? TrendingUp
            const isHighlight = section.variant === 'highlight'
            const isSolution = section.variant === 'solution'

            return (
              <motion.div
                key={section.label}
                variants={fadeUpSmallVariants}
                className={`glass-strong rounded-2xl p-5 md:p-6 ${
                  isHighlight
                    ? 'border-indigo-500/25 bg-indigo-950/15'
                    : isSolution
                      ? 'border-emerald-500/25 bg-emerald-950/15'
                      : ''
                }`}
              >
                <div className="mb-2.5 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/10 ${
                      isHighlight
                        ? 'bg-indigo-500/20'
                        : isSolution
                          ? 'bg-emerald-500/20'
                          : 'bg-white/5'
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isHighlight
                          ? 'text-indigo-400'
                          : isSolution
                            ? 'text-emerald-400'
                            : 'text-slate-400'
                      }`}
                    />
                  </div>
                  <h3
                    className={`point-title ${
                      isHighlight
                        ? 'text-indigo-300'
                        : isSolution
                          ? 'text-emerald-300'
                          : 'text-white'
                    }`}
                  >
                    {section.label}
                  </h3>
                </div>
                <p className="body-lg">{section.content}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
