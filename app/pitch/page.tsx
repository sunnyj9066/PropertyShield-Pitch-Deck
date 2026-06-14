'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ScanText,
  Brain,
  Workflow,
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
  BookOpen,
  Timer,
  Database,
  ShieldOff,
  Lock,
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
      'Vision AI catches physical, regional-stamped liens from cooperative banks that are missing from digital government portals. A second mortgage filed in Kannada on a revenue stamp—never digitized, never indexed—surfaces before your client wires the advance.',
  },
  {
    id: 'urban',
    label: 'Urban Flats',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    trap: 'The Missing Title Link',
    description:
      'The AI builds a perfect chronological chain of title for 20-story apartments, instantly flagging missing sale deeds between past owners. One broken link in forty years of society resolutions can void an entire floor—PropertyShield finds it in 3 minutes.',
  },
  {
    id: 'commercial',
    label: 'Commercial Real Estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    trap: 'The Buried Clause',
    description:
      'The deterministic engine instantly extracts hidden 99-year leases buried deep within 200-page historical deeds. Restrictions on page 187 that cap resale value forever—flagged with statutory citations, not buried in footnote fourteen.',
  },
]

const securityHighlights = [
  {
    icon: BookOpen,
    title: 'Statutory Anchoring',
    description:
      'The AI does not invent legal opinions. Every observation is strictly anchored to governing laws: Transfer of Property Act (1882), Registration Act (1908), and SARFAESI Act (2002).',
  },
  {
    icon: Timer,
    title: 'Data Ephemerality',
    description:
      'We employ a strict 24-Hour Auto-Delete Lifecycle. PDFs are processed in memory and permanently wiped from our storage vaults post-analysis.',
  },
  {
    icon: Database,
    title: 'Row-Level Security (RLS)',
    description:
      'Built on PostgreSQL, our database physically isolates user data. Mathematically, no user can ever query or access another user\'s documents.',
  },
  {
    icon: ShieldOff,
    title: 'Zero AI Training',
    description:
      'We use enterprise APIs. Your highly sensitive property documents are strictly walled off and NEVER used to train public LLM models.',
  },
]

const ecosystem = [
  {
    id: 'buyers',
    icon: Users,
    title: 'Buyers & Farmers',
    benefit: 'Complete peace of mind. Eliminating the risk of inheriting hidden debts on life-savings investments.',
    detail:
      'Whether purchasing a Bengaluru flat or an ancestral agricultural plot, know exactly what encumbrances exist before a single rupee changes hands. PropertyShield eliminates the silent debt trap.',
  },
  {
    id: 'lawyers',
    icon: Scale,
    title: 'Lawyers & Advocates',
    benefit: '10× faster caseloads. Shift from manual data entry and reading 200 pages to verifying a mathematically precise 2-page summary matrix.',
    detail:
      'Your billable expertise moves from document drudgery to legal judgment. Review AI-extracted chains, flag edge cases, and close significantly more matters per quarter.',
  },
  {
    id: 'banks',
    icon: Building2,
    title: 'Banks & NBFCs',
    benefit: 'Instant risk triage. Run 1,000 automated collateral checks before approving home loans, dropping NPA risks to near zero.',
    detail:
      'Underwriters receive structured risk scores and lien maps in minutes—not weeks. Title defects caught at origination, not at recovery.',
  },
  {
    id: 'government',
    icon: Landmark,
    title: 'Government / Registries',
    benefit: 'Automated auditing of document submissions prior to digital archiving, cleaning up historical land records.',
    detail:
      'Catch forged stamps, mismatched survey numbers, and duplicate filings at the point of submission—before they enter the permanent public record.',
  },
  {
    id: 'brokers',
    icon: Handshake,
    title: 'Real Estate Brokers',
    benefit: 'Faster closing times and higher trust with clients due to instant, transparent title clarity.',
    detail:
      'Present verified forensic reports on day one. Deals close faster when uncertainty is removed from the negotiation table—and your reputation compounds.',
  },
]

const pricingTiers = [
  {
    name: 'Freemium',
    price: 'Free',
    priceInr: '₹0',
    period: 'on sign-up',
    highlight: '1 Free Credit',
    features: ['Email OTP secured', 'Full forensic report', 'No credit card required'],
    cta: 'Claim Free Credit',
    featured: false,
  },
  {
    name: 'Single Run',
    price: '$15',
    priceInr: '₹1,200',
    period: 'per report',
    highlight: 'One-off forensic report',
    features: ['Complete title analysis', 'Lien & encumbrance map', 'PDF export', '3-minute turnaround'],
    cta: 'Buy Single Report',
    featured: false,
  },
  {
    name: 'Pro Pack',
    price: '$49',
    priceInr: '₹4,000',
    period: '5 reports',
    highlight: 'Best for professionals',
    features: ['5 forensic reports', 'Priority processing', 'Bulk upload support', 'Team sharing'],
    cta: 'Get Pro Pack',
    featured: true,
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.14em] text-emerald-400">
      {children}
    </p>
  )
}

export default function PitchPage() {
  const [activeCase, setActiveCase] = useState(0)
  const [activeTab, setActiveTab] = useState(0)

  const nextCase = () => setActiveCase((i) => (i + 1) % useCases.length)
  const prevCase = () => setActiveCase((i) => (i - 1 + useCases.length) % useCases.length)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased">
      {/* ── 1. HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
            alt="Futuristic Indian cityscape and high-end real estate"
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
              150+ pages. 3 weeks. One lien on page 42.
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
                alt="Mountain of confusing legal paperwork"
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
                The average property transaction in India involves 150+ pages of unstructured,
                multi-language documents—Kannada revenue stamps beside Telugu encumbrance certificates,
                English sale deeds cross-referenced against Hindi affidavits. No single human can
                fluently parse all three.
              </p>
              <p className="font-body text-base leading-relaxed text-slate-300 md:text-lg">
                A lawyer spending three weeks reading this mountain of paper faces an unavoidable
                enemy: human fatigue. By page 60, attention fragments. Critical details hide in
                footnotes, annexures, and handwritten registrar margin notes.
              </p>
              <div className="space-y-4">
                {[
                  'The friction of translating between Kannada, Telugu, and English—three scripts, three legal lexicons, one transaction.',
                  'Three weeks of waiting while folders pass between lawyers, clerks, and dusty registry shelves.',
                  'A single missed lien on page 42—a cooperative bank mortgage never digitized—destroys a family\'s life savings and leaves them holding a hidden debt they never knew existed.',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 rounded-xl border border-red-500/10 bg-red-500/5 p-4 backdrop-blur-sm"
                  >
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <p className="font-body text-sm leading-relaxed text-slate-300 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. THE ARCHITECTURE ── */}
      <section className="relative border-t border-white/5 bg-slate-950 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 text-center md:mb-16">
            <SectionLabel>The Architecture</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              How we solve it
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-slate-400">
              Three precision-engineered layers that transform chaotic paper trails into
              court-ready forensic intelligence—in 3 minutes, not 3 weeks.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: ScanText,
                title: 'Regional Vision AI',
                subtitle: 'Multi-Script OCR',
                description:
                  'We don\'t just read English; we digitize and translate blurry, physical bank stamps and handwritten registrar notes in Kannada and Telugu into structured data. Faded revenue seals, cooperative society stamps, and margin annotations—decoded with sub-pixel accuracy.',
              },
              {
                icon: Brain,
                title: 'Deterministic Legal AI',
                subtitle: 'Gemini 1.5 Pro',
                description:
                  'We enforce "Zero-Math Extraction." The AI acts as a mirror, not a generator—preventing hallucinations and extracting facts exactly as written. Every clause mapped to governing statutes with cited sources, never invented opinions.',
              },
              {
                icon: Workflow,
                title: 'Asynchronous Pipeline',
                subtitle: 'QStash',
                description:
                  'We eliminated the "Loading Screen Timeout." Our serverless queueing architecture ensures zero downtime, allowing 10,000 concurrent users to run 3-minute deep forensic scans simultaneously without crashing the system.',
              },
            ].map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-colors hover:border-emerald-500/30 hover:bg-white/[0.06]"
              >
                <div className="mb-6 inline-flex rounded-xl bg-emerald-500/10 p-3 ring-1 ring-emerald-500/20">
                  <col.icon className="h-7 w-7 text-emerald-400" />
                </div>
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {col.subtitle}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-white">
                  {col.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-slate-400">
                  {col.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. REAL-WORLD USE CASES ── */}
      <section className="relative border-t border-white/5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 md:mb-16">
            <SectionLabel>Real-World Use Cases</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              The proof, in the field
            </h2>
          </motion.div>

          <motion.div {...reveal}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              {/* Fixed-height image container — prevents layout shift on navigation */}
              <div className="relative h-72 w-full overflow-hidden md:h-80">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={useCases[activeCase].id}
                    src={useCases[activeCase].image}
                    alt={useCases[activeCase].label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 h-full w-full object-cover"
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

              {/* Fixed min-height content panel — prevents vertical jump */}
              <div className="min-h-[180px] border-t border-white/10 p-6 md:min-h-[160px] md:p-8">
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

      {/* ── 5. BANK-GRADE SECURITY & STATUTORY COMPLIANCE ── */}
      <section className="relative border-t border-white/5 bg-slate-950 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(16,185,129,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 backdrop-blur-md">
              <Lock className="h-4 w-4 text-emerald-400" />
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Bank-Grade Security
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Statutory Compliance &amp; Trust
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-slate-400">
              Property documents are among the most sensitive data a person owns. We built a
              vault—not a cloud folder.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {securityHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl transition-colors hover:border-emerald-500/25 md:p-8"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl transition-colors group-hover:bg-emerald-500/10" />
                <div className="relative flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                    <item.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...reveal}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5 backdrop-blur-sm md:mt-12"
          >
            {['Transfer of Property Act, 1882', 'Registration Act, 1908', 'SARFAESI Act, 2002'].map(
              (act) => (
                <span
                  key={act}
                  className="flex items-center gap-2 font-body text-xs font-medium text-slate-500"
                >
                  <Shield className="h-3.5 w-3.5 text-emerald-500/60" />
                  {act}
                </span>
              ),
            )}
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
            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-slate-400">
              PropertyShield creates measurable ROI across every stakeholder in the
              real estate value chain.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <div className="flex flex-wrap gap-1 border-b border-white/10 p-2 md:gap-0 md:p-0">
              {ecosystem.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-2 py-3 font-display text-[11px] font-semibold tracking-tight transition-colors sm:text-xs md:rounded-none md:px-3 md:py-4 md:text-sm ${
                    i === activeTab
                      ? 'bg-emerald-500/15 text-emerald-300'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  <item.icon className="hidden h-4 w-4 sm:block" />
                  <span className="truncate">{item.title}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={ecosystem[activeTab].id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid items-center gap-8 p-8 md:grid-cols-[auto_1fr] md:p-12"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                  {(() => {
                    const Icon = ecosystem[activeTab].icon
                    return <Icon className="h-10 w-10 text-emerald-400" />
                  })()}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    {ecosystem[activeTab].title}
                  </h3>
                  <p className="mt-2 font-display text-lg font-medium leading-snug text-emerald-300">
                    {ecosystem[activeTab].benefit}
                  </p>
                  <p className="mt-4 font-body text-base leading-relaxed text-slate-400">
                    {ecosystem[activeTab].detail}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 7. ECONOMICS & MONETIZATION ── */}
      <section className="relative border-t border-white/5 bg-slate-950 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.06)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-12 text-center md:mb-16">
            <SectionLabel>Economics & Monetization</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-slate-400">
              Start free. Scale as you close deals. Enterprise-ready payments via Stripe.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur-xl ${
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
                  <span className="font-display text-4xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                  <span className="font-body text-sm text-slate-400">{tier.period}</span>
                </div>
                <p className="mt-1 font-body text-sm text-emerald-400">{tier.priceInr}</p>
                <p className="mt-3 font-display text-sm font-semibold text-slate-300">
                  {tier.highlight}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="font-body text-sm leading-relaxed text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-display text-sm font-semibold tracking-tight transition-colors ${
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

          <motion.p
            {...reveal}
            className="mt-8 text-center font-body text-sm text-slate-500"
          >
            Enterprise-ready payments powered by{' '}
            <span className="font-semibold text-slate-400">Stripe</span>
          </motion.p>
        </div>
      </section>

      {/* ── 8. TRANSPARENCY ── */}
      <section className="relative border-t border-white/5 bg-slate-900/80 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <motion.div {...reveal} className="mb-10 text-center md:mb-12">
            <SectionLabel>Transparency</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-200 md:text-4xl">
              Drawbacks &amp; Disclaimers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-slate-500">
              We build trust by being honest about what PropertyShield can—and cannot—do.
            </p>
          </motion.div>

          <motion.div {...reveal} className="space-y-6">
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 backdrop-blur-sm md:p-8">
              <h3 className="font-display text-lg font-bold tracking-tight text-slate-200">
                Edge-case illegibility
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-slate-500 md:text-base">
                If an 80-year-old document is physically destroyed or dissolved—water-damaged,
                torn, or reduced to fragments—Vision AI will flag it for manual human input. We
                never guess. We surface the gap and route it to a qualified reviewer.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur-sm md:p-8">
              <div className="flex gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500/70" />
                <p className="font-body text-sm leading-relaxed text-slate-400 md:text-base">
                  <span className="font-semibold text-slate-300">Disclaimer: </span>
                  PropertyShield is an AI-powered risk assessment and triage tool. It does not
                  constitute binding legal advice. Final execution should always be verified by a
                  registered legal practitioner.
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
