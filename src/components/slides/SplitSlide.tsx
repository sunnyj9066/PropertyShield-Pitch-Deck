import { motion } from 'framer-motion'
import type { SlideSection } from '../../data/slides'
import {
  fadeInRightVariants,
  staggerContainerVariants,
} from '../../lib/animations'
import { SlideEyebrow, SlideTitle } from './SlideTypography'

function SectionCard({ section }: { section: SlideSection }) {
  const variantStyles = {
    default: 'border-white/10 bg-white/[0.03]',
    danger: 'border-red-500/25 bg-red-950/20 glow-danger',
    solution: 'border-emerald-500/25 bg-emerald-950/15',
    highlight: 'border-indigo-500/25 bg-indigo-950/15',
  }

  const labelStyles = {
    default: 'text-slate-400',
    danger: 'text-red-400',
    solution: 'text-emerald-400',
    highlight: 'text-indigo-400',
  }

  const variant = section.variant ?? 'default'
  const hasLabel = Boolean(section.label)

  return (
    <motion.div
      variants={fadeInRightVariants}
      className={`glass rounded-2xl border p-5 md:p-6 ${variantStyles[variant]}`}
    >
      {hasLabel && (
        <h3 className={`section-label mb-2.5 ${labelStyles[variant]}`}>
          {section.label}
        </h3>
      )}
      <p className="body-lg text-slate-200">{section.content}</p>
    </motion.div>
  )
}

interface SplitSlideProps {
  eyebrow?: string
  title: string
  image: string
  imageAlt: string
  sections: SlideSection[]
}

export function SplitSlide({
  eyebrow,
  title,
  image,
  imageAlt,
  sections,
}: SplitSlideProps) {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[38vh] shrink-0 overflow-hidden lg:h-full lg:w-1/2"
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050810]/92 lg:bg-gradient-to-r lg:from-transparent lg:to-[#050810]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent lg:hidden" />
      </motion.div>

      <div className="flex flex-1 flex-col justify-center overflow-y-auto px-6 py-6 lg:w-1/2 lg:px-10 lg:py-12 xl:px-14">
        {eyebrow && <SlideEyebrow text={eyebrow} />}
        <SlideTitle>{title}</SlideTitle>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3.5 md:gap-4"
        >
          {sections.map((section, i) => (
            <SectionCard
              key={section.label ?? `section-${i}`}
              section={section}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
