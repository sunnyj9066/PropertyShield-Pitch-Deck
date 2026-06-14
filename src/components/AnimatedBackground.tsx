import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050810]" />

      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[70vh] w-[70vh] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }}
        animate={{
          x: [0, 80, 40, 0],
          y: [0, 60, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[80vh] w-[80vh] rounded-full opacity-25 blur-[140px]"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
        animate={{
          x: [0, -60, -30, 0],
          y: [0, -40, -80, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #10b981 0%, #6366f1 50%, transparent 70%)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
