import { motion } from 'framer-motion'
import { Lock, ShieldCheck, Trash2, Scale } from 'lucide-react'
import type { SlideSection } from '../../data/slides'
import {
  fadeInRightVariants,
  staggerContainerVariants,
} from '../../lib/animations'
import { SlideEyebrow, SlideTitle } from './SlideTypography'

const icons = [Lock, Trash2, ShieldCheck, Scale]

interface ListSlideProps {
  eyebrow?: string
  title: string
  image: string
  imageAlt: string
  sections: SlideSection[]
}

export function ListSlide({
  eyebrow,
  title,
  image,
  imageAlt,
  sections,
}: ListSlideProps) {
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
          className="flex flex-col gap-3"
        >
          {sections.map((section, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={section.label ?? index}
                variants={fadeInRightVariants}
                className="glass flex gap-4 rounded-xl p-4 md:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="section-label mb-1 text-emerald-400">
                    {section.label}
                  </h3>
                  <p className="body-lg">{section.content}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
