import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-indigo-500"
        initial={false}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }}
      />
    </div>
  )
}
