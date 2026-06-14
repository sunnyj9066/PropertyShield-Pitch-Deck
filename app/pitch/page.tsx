'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  Scale,
  Landmark,
  Building2,
  Handshake,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Shield,
  Check,
  CreditCard,
  Sparkles,
  Layers,
  Brain,
  Workflow,
  Activity,
  Globe,
  TrendingUp,
  Target,
  Rocket,
  Mic,
  MessageSquare,
  Database,
} from 'lucide-react'

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const useCases = [
  {
    id: 'agricultural',
    label: 'Agricultural Land',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
    trap: 'The Double-Mortgage Trap',
    description:
      'Vision AI detects regional, handwritten cooperative bank loan stamps on older deeds that completely bypassed digital government EC registries.',
  },
  {
    id: 'urban',
    label: 'Urban Flats',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    trap: 'The Missing Title Link',
    description:
      'The chronological tracking engine maps apartment ownership linkages, instantly flagging a missing historical builder-to-buyer sale deed block.',
  },
  {
    id: 'commercial',
    label: 'Commercial Properties',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    trap: 'The Buried Clause',
    description:
      'The text parsing engine isolates an unescaped, restrictive 99-year commercial lease clause hidden deep within a 200-page historical corporate allocation packet.',
  },
]

const productionStack = [
  {
    icon: Layers,
    title: 'Next.js 15',
    role: 'Edge Frontend',
    description:
      'Driving an ultra-fast, server-driven edge frontend with zero-latency route optimization.',
  },
  {
    icon: Brain,
    title: 'Google Gemini 1.5 Pro',
    role: 'Deterministic Legal AI',
    description:
      'Executing deterministic, multi-document cross-referencing and extraction with a zero-hallucination guardrail configuration.',
  },
  {
    icon: Database,
    title: 'Supabase (PostgreSQL)',
    role: 'Secure Data Layer',
    description:
      'Securing core transactional storage layers strictly governed by Row-Level Security (RLS) data isolation rules.',
  },
  {
    icon: Workflow,
    title: 'Upstash QStash',
    role: 'Async Task Queue',
    description:
      'Managing background task routing queues to isolate heavy AI analysis from the primary HTTP thread, entirely eliminating Vercel timeout errors.',
  },
  {
    icon: Activity,
    title: 'Sentry',
    role: 'Observability',
    description:
      'Providing real-time pipeline performance telemetry and enterprise error monitoring to catch visual and background exceptions instantly.',
  },
  {
    icon: Globe,
    title: 'Vercel',
    role: 'Edge Infrastructure',
    description:
      'Serving globally distributed serverless hosting configurations with sub-second API endpoint deployments.',
  },
]

const fraudSegments = [
  { label: 'Title & Chain Defects', pct: 40, color: '#10b981' },
  { label: 'Fabricated / Forged Deeds', pct: 35, color: '#f59e0b' },
  { label: 'Undisclosed Liens / Mortgages', pct: 25, color: '#ef4444' },
] as const

const marketBars = [
  {
    label: 'TAM',
    value: '₹20,700 Cr',
    subtitle: 'Indian LegalTech market addressable wave by 2030',
    heightPct: 100,
  },
  {
    label: 'SAM',
    value: '₹4,200 Cr',
    subtitle: 'Property title verification & forensic due diligence',
    heightPct: 42,
  },
  {
    label: 'SOM',
    value: '₹100 Cr ARR',
    subtitle: 'Milestone target within 36–60 months',
    heightPct: 18,
  },
] as const

const ecosystem = [
  {
    icon: Users,
    title: 'Buyers & Farmers',
    headline: 'Complete asset security.',
    detail:
      'Protects generational life savings by trapping hidden liabilities and toxic ownership liens prior to disbursing any financial advance.',
  },
  {
    icon: Scale,
    title: 'Title Lawyers & Advocates',
    headline: '10x capacity optimization.',
    detail:
      'Compresses grueling document review cycles from 3 weeks down to a 3-minute preliminary triage matrix, expanding billable client throughput.',
  },
  {
    icon: Building2,
    title: 'Banks & NBFCs',
    headline: 'Drop NPA rates to near-zero.',
    detail:
      'Instantly auditing property collateral safety parameters before initiating lengthy credit underwriting workflows.',
  },
  {
    icon: Handshake,
    title: 'Real Estate Brokers',
    headline: 'Accelerate closing velocity.',
    detail:
      'Builds absolute operational trust with nervous buyers by offering objective, crystal-clear title validation on demand.',
  },
  {
    icon: Landmark,
    title: 'Government Registries',
    headline: 'Streamline historical verification.',
    detail:
      'Automating incoming document consistency reviews prior to final digital ledger archival.',
  },
]

const roadmapPhases = [
  {
    phase: 'Phase 1',
    label: 'Current',
    icon: Target,
    title: 'Core B2C Retail',
    description:
      'Core B2C Retail (₹1,200 single report) and Pro Packs (₹4,000 for 5 runs) processing directly on optimized serverless architecture.',
  },
  {
    phase: 'Phase 2',
    label: 'Enterprise SaaS',
    icon: TrendingUp,
    title: 'Enterprise SaaS',
    description:
      'Exposing high-throughput API endpoints to allow direct programmatic batch testing for corporate banking and micro-lending portals.',
  },
  {
    phase: 'Phase 3',
    label: 'Cognitive Layering',
    icon: Rocket,
    title: 'Cognitive Layering',
    description:
      'Integrating the ElevenLabs API for voice-synthesized automated legal audio briefs, and Twilio/MSG91 for secure mobile telecommunication authentications.',
  },
]

const pricingTiers = [
  {
    name: 'Freemium',
    price: 'Free',
    priceInr: '₹0',
    period: 'on sign-up',
    highlight: '1 Free Credit',
    features: [
      'Email OTP secured sign-up',
      'Full forensic title report',
      'No credit card required',
    ],
    cta: 'Claim Free Credit',
    featured: false,
  },
  {
    name: 'Single Run',
    price: '$15',
    priceInr: '₹1,200',
    period: 'per report',
    highlight: 'One-off forensic report',
    features: [
      'Complete title analysis',
      'Lien & encumbrance map',
      'PDF export · 3-minute turnaround',
    ],
    cta: 'Buy Single Report',
    featured: false,
  },
  {
    name: 'Pro Pack',
    price: '$49',
    priceInr: '₹4,000',
    period: '5 reports',
    highlight: 'Best for professionals',
    features: [
      '5 forensic reports',
      'Priority processing',
      'Bulk upload · Team sharing',
    ],
    cta: 'Get Pro Pack',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceInr: 'Bulk License',
    period: 'annual contract',
    highlight: 'Enterprise bulk license models',
    features: [
      'Unlimited API throughput',
      'Dedicated SLA & support',
      'Stripe transaction gateways',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.14em] text-emerald-400">
      {children}
    </p>
  )
}

function GlassStackTile({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative overflow-hidden rounded-[16px] border border-emerald-500/20 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-emerald-950/20 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),inset_0_-1px_0_0_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[16px] transition-colors hover:border-emerald-500/35"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-slate-950/40" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

function pieSlice(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = {
    x: cx + r * Math.cos((startAngle * Math.PI) / 180),
    y: cy + r * Math.sin((startAngle * Math.PI) / 180),
  }
  const end = {
    x: cx + r * Math.cos((endAngle * Math.PI) / 180),
    y: cy + r * Math.sin((endAngle * Math.PI) / 180),
  }
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`
}

function FraudPieChart() {
  let angle = -90
  const slices = fraudSegments.map((seg) => {
    const sweep = (seg.pct / 100) * 360
    const path = pieSlice(100, 100, 80, angle, angle + sweep)
    const slice = { ...seg, path }
    angle += sweep
    return slice
  })

  return (
    <div className="overflow-hidden rounded-[16px] border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-slate-950/60 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-[16px]">
      <h3 className="mb-1 font-display text-lg font-bold tracking-tight text-white">
        Anatomy of Real Estate Disputes in India
      </h3>
      <p className="mb-6 font-body text-sm leading-relaxed text-slate-500">
        Verified dispute category breakdown across Indian property markets
      </p>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <svg viewBox="0 0 200 200" className="h-48 w-48 shrink-0" role="img" aria-label="Real estate disputes pie chart">
          {slices.map((slice) => (
            <path key={slice.label} d={slice.path} fill={slice.color} stroke="rgb(2, 6, 23)" strokeWidth="2" />
          ))}
          <circle cx="100" cy="100" r="42" fill="rgb(2, 6, 23)" />
          <text x="100" y="96" textAnchor="middle" className="fill-white font-display text-[11px] font-bold">
            Dispute
          </text>
          <text x="100" y="110" textAnchor="middle" className="fill-slate-400 font-body text-[9px]">
            Mix
          </text>
        </svg>
        <ul className="flex-1 space-y-3">
          {fraudSegments.map((seg) => (
            <li key={seg.label} className="flex items-start gap-3">
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: seg.color }} />
              <div>
                <p className="font-display text-sm font-semibold tracking-tight text-slate-200">{seg.label}</p>
                <p className="font-body text-sm text-emerald-400">{seg.pct}%</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function TamSamSomChart() {
  const maxBarH = 160
  const chartW = 360
  const barW = 72
  const gap = 48
  const baseline = 200

  return (
    <div className="overflow-hidden rounded-[16px] border border-emerald-500/15 bg-gradient-to-br from-white/[0.04] to-slate-950/60 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-[16px]">
      <h3 className="mb-1 font-display text-lg font-bold tracking-tight text-white">
        TAM → SAM → SOM Progression
      </h3>
      <p className="mb-6 font-body text-sm leading-relaxed text-slate-500">
        Explicit milestone progression toward ₹100 Crore ARR within 36–60 months
      </p>
      <svg viewBox={`0 0 ${chartW} 240`} className="h-auto w-full" role="img" aria-label="TAM SAM SOM bar chart">
        <line x1="24" y1={baseline} x2={chartW - 24} y2={baseline} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        {marketBars.map((bar, i) => {
          const x = 48 + i * (barW + gap)
          const barH = (bar.heightPct / 100) * maxBarH
          const y = baseline - barH
          return (
            <g key={bar.label}>
              <defs>
                <linearGradient id={`barGrad${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              <rect x={x} y={y} width={barW} height={barH} rx="6" fill={`url(#barGrad${i})`} />
              <text x={x + barW / 2} y={y - 8} textAnchor="middle" className="fill-emerald-300 font-display text-[10px] font-bold">
                {bar.value}
              </text>
              <text x={x + barW / 2} y={baseline + 18} textAnchor="middle" className="fill-white font-display text-[12px] font-bold">
                {bar.label}
              </text>
            </g>
          )
        })}
      </svg>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {marketBars.map((bar) => (
          <div key={bar.label} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
            <p className="font-display text-xs font-bold text-emerald-400">{bar.label}</p>
            <p className="font-body text-xs leading-relaxed text-slate-500">{bar.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PitchPage() {
  const [activeCase, setActiveCase] = useState(0)

  const nextCase = () => setActiveCase((i) => (i + 1) % useCases.length)
  const prevCase = () => setActiveCase((i) => (i - 1 + useCases.length) % useCases.length)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased">
      {/* ── 1. HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
            alt="Expanding Indian metro cityscape and luxury real estate"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center md:px-12"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md">
            <Shield className="h-4 w-4 text-emerald-400" />
            <span className="font-body text-sm font-medium text-emerald-300">PropertyShield</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-br from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
              Eradicating Real Estate Fraud
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
              with Legal AI.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-body text-base leading-relaxed text-slate-300 sm:text-lg md:mt-8 md:text-xl">
            PropertyShield is the enterprise-grade forensic engine that analyzes, cross-references,
            and secures property titles in 3 minutes. Zero human error. Absolute truth.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-display text-base font-semibold tracking-tight text-slate-950 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-emerald-400 md:mt-12"
          >
            <Sparkles className="h-5 w-5" />
            View Interactive Demo
          </motion.button>
        </motion.div>
      </section>

      {/* ── 2. THE NIGHTMARE ── */}
      <section className="relative border-t border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 md:mb-16">
            <SectionLabel>The Nightmare</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              The crushing reality of Indian real estate verification
            </h2>
          </motion.div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"
                alt="Heavy stack of chaotic, unreadable historical documents"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-body text-base leading-relaxed text-slate-300 md:text-lg">
                A standard property transaction in India forces a buyer to dig through{' '}
                <span className="font-semibold text-white">150+ pages</span> of legacy, unstructured
                paper trails—with heavy regional language barriers across Kannada, Telugu, and
                English stitched together across decades of ownership transfers.
              </p>
              <p className="font-body text-base leading-relaxed text-slate-300 md:text-lg">
                Human fatigue is the silent killer. A lawyer reviewing this mountain of documents
                for three weeks will inevitably miss a single line, a faded stamp, or a handwritten
                margin note buried on page 42.
              </p>
              <div className="rounded-xl border border-red-500/15 bg-red-500/5 p-5 backdrop-blur-sm">
                <div className="flex gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <p className="font-body text-sm leading-relaxed text-slate-300 md:text-base">
                    That one missed encumbrance means a family unknowingly inherits a{' '}
                    <span className="font-semibold text-red-300">multi-lakh active liability</span>
                    —instantly erasing their life savings before the first EMI is ever paid.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. REAL-WORLD USE CASES (Direct Proof) ── */}
      <section className="relative border-t border-white/5 bg-slate-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 md:mb-16">
            <SectionLabel>Real-World Use Cases</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              The direct proof
            </h2>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-slate-400">
              Three failure modes PropertyShield eliminates before a single rupee changes hands.
            </p>
          </motion.div>

          <motion.div {...reveal}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <div className="relative h-72 w-full shrink-0 overflow-hidden md:h-80">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={useCases[activeCase].id}
                    src={useCases[activeCase].image}
                    alt={useCases[activeCase].label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Scenario {String.fromCharCode(65 + activeCase)}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {useCases[activeCase].label}
                  </h3>
                  <div className="mt-3 inline-flex rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 backdrop-blur-sm">
                    <span className="font-display text-sm font-semibold text-amber-300">
                      {useCases[activeCase].trap}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-[120px] shrink-0 overflow-hidden border-t border-white/10 p-6 md:h-[100px] md:p-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={useCases[activeCase].id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="font-body text-base leading-relaxed text-slate-300"
                  >
                    {useCases[activeCase].description}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
                <div className="flex gap-2">
                  {useCases.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCase(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeCase ? 'w-8 bg-emerald-400' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`View ${c.label}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevCase}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-colors hover:bg-white/10"
                    aria-label="Previous scenario"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextCase}
                    className="rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-sm transition-colors hover:bg-white/10"
                    aria-label="Next scenario"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. MODERN SaaS PRODUCTION STACK ── */}
      <section className="relative border-t border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 text-center md:mb-16">
            <SectionLabel>The Modern SaaS Production Stack</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              How we solve it
            </h2>
            <p className="mx-auto mt-4 max-w-3xl font-body text-base leading-relaxed text-slate-400">
              Six production-grade tools orchestrated into a zero-fail forensic pipeline—engineered
              to scale seamlessly from first report to enterprise API throughput.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {productionStack.map((item, i) => (
              <GlassStackTile key={item.title} delay={i * 0.08}>
                <div className="mb-5 inline-flex rounded-xl bg-emerald-500/10 p-3 ring-1 ring-emerald-500/20">
                  <item.icon className="h-7 w-7 text-emerald-400" />
                </div>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {item.role}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </GlassStackTile>
            ))}
          </div>

          <motion.div
            {...reveal}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 rounded-[16px] border border-emerald-500/10 bg-emerald-500/[0.03] px-6 py-4 backdrop-blur-[16px]"
          >
            {productionStack.map((item, i) => (
              <span key={item.title} className="font-display text-xs font-semibold text-emerald-400/80">
                {item.title}
                {i < productionStack.length - 1 && <span className="mx-2 text-slate-600">→</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. FINANCIAL MATRIX & MARKET ECONOMICS ── */}
      <section className="relative border-t border-white/5 bg-slate-950 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.05)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 text-center md:mb-16">
            <SectionLabel>The 100Cr Valuation Play</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Financial matrix &amp; market economics
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <FraudPieChart />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TamSamSomChart />
            </motion.div>
          </div>

          <motion.div
            {...reveal}
            className="mt-8 rounded-[16px] border border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.06] via-white/[0.02] to-slate-950/60 p-8 backdrop-blur-[16px]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <TrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  Indian LegalTech Macroeconomic Boom
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-slate-300">
                  India&apos;s LegalTech sector is growing at an aggressive{' '}
                  <span className="font-semibold text-emerald-300">16.2% CAGR</span>, tracking a{' '}
                  <span className="font-semibold text-emerald-300">₹20,700+ Crore</span> domestic
                  market addressable wave by 2030. Property title verification sits at the
                  highest-friction, highest-value intersection of real estate, banking collateral
                  risk, and judicial backlog.
                </p>
                <p className="mt-4 font-body text-base leading-relaxed text-slate-400">
                  PropertyShield is positioned to capture the SAM layer—forensic property due
                  diligence—on a direct, numbers-backed path from ₹1,200 retail reports to{' '}
                  <span className="font-semibold text-emerald-400">₹100 Crore ARR</span> within
                  36–60 months through B2B API contracts with banks, NBFCs, and enterprise
                  lending portals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. THE ECOSYSTEM ── */}
      <section className="relative border-t border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 text-center md:mb-16">
            <SectionLabel>The Ecosystem</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Who benefits
            </h2>
          </motion.div>

          <div className="relative mx-auto max-w-3xl">
            <div
              aria-hidden
              className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:left-[9px]"
            />

            <ul className="space-y-12 md:space-y-16">
              {ecosystem.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10 md:pl-12"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.4rem] flex h-[18px] w-[18px] items-center justify-center md:top-[0.45rem]"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  </span>

                  <div className="flex items-start gap-3 md:gap-4">
                    <item.icon className="mt-1 h-4 w-4 shrink-0 text-emerald-500/80 md:h-5 md:w-5" />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold tracking-tight text-white md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-body text-base leading-relaxed text-slate-400 md:text-lg md:leading-relaxed">
                        <span className="font-semibold text-emerald-300">{item.headline}</span>{' '}
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 7. FUTURE SCALING ROADMAP ── */}
      <section className="relative border-t border-white/5 bg-slate-950 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(16,185,129,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 text-center md:mb-16">
            <SectionLabel>Future Scaling Roadmap</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Strategic growth horizons
            </h2>
          </motion.div>

          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent md:block" />

            {roadmapPhases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col rounded-[16px] border border-emerald-500/15 bg-gradient-to-br from-white/[0.05] to-slate-950/40 p-7 backdrop-blur-[16px] md:p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-display text-xs font-bold tracking-tight text-emerald-300">
                    {phase.phase}
                  </span>
                  <span className="font-body text-xs font-medium uppercase tracking-wider text-slate-500">
                    {phase.label}
                  </span>
                </div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                  <phase.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h4 className="font-display text-lg font-bold tracking-tight text-white">
                  {phase.title}
                </h4>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-slate-400">
                  {phase.description}
                </p>
                {phase.phase === 'Phase 3' && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1.5">
                      <Mic className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="font-body text-[10px] text-slate-500">ElevenLabs API</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="font-body text-[10px] text-slate-500">Twilio / MSG91</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. ECONOMICS & MONETIZATION ── */}
      <section className="relative border-t border-white/5 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 text-center md:mb-16">
            <SectionLabel>Economics &amp; Monetization</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Transparent conversion funnel
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-slate-400">
              Free Credit sign-up via secure Email OTP, Stripe transaction gateways, and Enterprise
              bulk license models.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-2xl border p-7 backdrop-blur-xl md:p-8 ${
                  tier.featured
                    ? 'border-emerald-500/40 bg-emerald-500/[0.06] shadow-lg shadow-emerald-500/10'
                    : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 font-display text-xs font-bold tracking-tight text-slate-950">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold tracking-tight text-white">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold tracking-tight text-white lg:text-4xl">
                    {tier.price}
                  </span>
                  <span className="font-body text-sm text-slate-400">{tier.period}</span>
                </div>
                <p className="mt-1 font-body text-sm text-emerald-400">{tier.priceInr}</p>
                <p className="mt-3 font-display text-sm font-semibold text-slate-300">
                  {tier.highlight}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="font-body text-sm leading-relaxed text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-semibold tracking-tight transition-colors ${
                    tier.featured
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.p {...reveal} className="mt-8 text-center font-body text-sm text-slate-500">
            Secure payments powered by{' '}
            <span className="font-semibold text-slate-400">Stripe</span>
          </motion.p>
        </div>
      </section>

      {/* ── 9. TRANSPARENCY ── */}
      <section className="relative border-t border-white/5 bg-slate-900/80 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-10 text-center md:mb-12">
            <SectionLabel>Transparency</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-200 md:text-4xl">
              Drawbacks &amp; Disclaimers
            </h2>
          </motion.div>

          <motion.div {...reveal} className="space-y-6">
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 backdrop-blur-sm md:p-8">
              <h3 className="font-display text-lg font-bold tracking-tight text-slate-200">
                Edge-case illegibility
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-500 md:text-base">
                Physically degraded historical documents—water-damaged, torn, or dissolved beyond
                machine readability—will flag a manual user prompt fallback. PropertyShield never
                guesses; it surfaces the gap and routes it to a qualified human reviewer.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur-sm md:p-8">
              <div className="flex gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500/70" />
                <p className="font-body text-sm leading-relaxed text-slate-400 md:text-base">
                  <span className="font-semibold text-slate-300">Disclaimer: </span>
                  PropertyShield is an advanced risk-triage tool. Final financial execution should
                  always be rubber-stamped by a registered legal practitioner.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-400" />
            <span className="font-display text-sm font-semibold tracking-tight text-slate-300">
              PropertyShield
            </span>
          </div>
          <p className="font-body text-xs text-slate-600">
            © {new Date().getFullYear()} PropertyShield. AI-powered legal forensics for real estate.
          </p>
        </div>
      </footer>
    </div>
  )
}
