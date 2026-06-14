import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Shield,
} from 'lucide-react'
import { slides } from '../data/slides'

interface BottomNavProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
}

export function BottomNav({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onGoTo,
}: BottomNavProps) {
  const canPrev = currentSlide > 0
  const canNext = currentSlide < totalSlides - 1

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-4"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      role="toolbar"
      aria-label="Slide navigation"
    >
      <div className="glass-strong mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-2xl px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Previous slide"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-400" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              PropertyShield
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => onGoTo(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={index === currentSlide ? 'true' : undefined}
                className="group relative flex h-8 w-8 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-gradient-to-r from-emerald-400 to-indigo-400'
                      : index < currentSlide
                        ? 'w-1.5 bg-emerald-500/60'
                        : 'w-1.5 bg-white/20 group-hover:bg-white/40'
                  }`}
                />
              </button>
            ))}
          </div>

          <span className="font-body text-xs text-slate-500">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          aria-label="Next slide"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-indigo-500/40 hover:bg-indigo-500/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  )
}
