export type SlideType = 'hero' | 'split' | 'architecture' | 'list' | 'economics'

export interface SlideSection {
  label?: string
  content: string
  variant?: 'default' | 'danger' | 'solution' | 'highlight'
}

export interface Slide {
  id: number
  type: SlideType
  image: string
  imageAlt: string
  eyebrow?: string
  title: string
  subtitle?: string
  tagline?: string
  sections?: SlideSection[]
  points?: { title: string; description: string; icon?: string }[]
}

export const slides: Slide[] = [
  {
    id: 1,
    type: 'hero',
    image:
      'https://images.unsplash.com/photo-1618005198919-d4804609d9f0?q=80&w=1920&auto=format&fit=crop',
    imageAlt: 'High-end futuristic abstract architecture',
    title: 'PropertyShield',
    subtitle: 'The AI Forensics Engine for Real Estate Transactions.',
    tagline:
      'Automating title verification, legal compliance, and risk mapping.',
  },
  {
    id: 2,
    type: 'split',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557d663d?q=80&w=1920&auto=format&fit=crop',
    imageAlt: 'Mountain of old, messy legal paper documents',
    eyebrow: 'The Problem Statement (The Nightmare)',
    title: 'The 15-Year Nightmare',
    sections: [
      {
        content:
          'A family saves for 15 years to buy a home. They are handed 150 pages of mixed-language documents (Sale Deeds, ECs, Bank Copies). Traditional lawyers take 3 weeks and ₹20,000 to read them.',
        variant: 'default',
      },
      {
        label: 'The Danger',
        content:
          'Human error. Missing a single line about an active ₹50 Lakh loan means the buyer inherits the debt and loses their life savings.',
        variant: 'danger',
      },
    ],
  },
  {
    id: 3,
    type: 'split',
    image:
      'https://images.unsplash.com/photo-1574943329900-755743794b53?q=80&w=1920&auto=format&fit=crop',
    imageAlt: 'Beautiful aerial view of green agricultural land',
    eyebrow: 'Real-World Use Case 1 — Agricultural Land',
    title: 'The Double-Mortgage Trap (Agri Land)',
    sections: [
      {
        label: 'Scenario',
        content:
          'Farmer selling 5 acres with a "clean" digital Encumbrance Certificate.',
        variant: 'default',
      },
      {
        label: 'Hidden Risk',
        content:
          'A 5-year-old physical bank lien stamped in regional language, never updated online.',
        variant: 'danger',
      },
      {
        label: 'PropertyShield Solution',
        content:
          'Regional OCR (Vision AI) reads the blurry stamp, cross-references the digital EC, and flags "High Risk: Active Undisclosed Lien".',
        variant: 'solution',
      },
    ],
  },
  {
    id: 4,
    type: 'split',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920&auto=format&fit=crop',
    imageAlt: 'Modern luxury high-rise apartments at dusk',
    eyebrow: 'Real-World Use Case 2 — Urban Flats',
    title: 'The Missing Title Link (Urban Flats)',
    sections: [
      {
        label: 'Scenario',
        content:
          'Buyer purchasing a resale flat in a 20-story building.',
        variant: 'default',
      },
      {
        label: 'Hidden Risk',
        content:
          'The chain of title is broken. The document showing how Person A sold it to Person B in 2010 is missing from the 150-page bundle.',
        variant: 'danger',
      },
      {
        label: 'PropertyShield Solution',
        content:
          'AI builds a chronological Title Chain, detects the timeline gap, and alerts: "Missing Link: Require Sale Deed executing transfer from Person A to Person B."',
        variant: 'solution',
      },
    ],
  },
  {
    id: 5,
    type: 'split',
    image:
      'https://images.unsplash.com/photo-1486325212027-80845596457?q=80&w=1920&auto=format&fit=crop',
    imageAlt: 'High-end modern glass commercial building',
    eyebrow: 'Real-World Use Case 3 — Commercial Real Estate',
    title: 'The Buried Clause (Commercial)',
    sections: [
      {
        label: 'Scenario',
        content: 'Business buying a multi-crore warehouse.',
        variant: 'default',
      },
      {
        label: 'Hidden Risk',
        content:
          'A 99-year commercial lease attached to the property, buried on page 142 of a historical deed.',
        variant: 'danger',
      },
      {
        label: 'PropertyShield Solution',
        content:
          'Deterministic AI Extraction scans 200 pages in seconds, hunting for "Lease" and "Tenant," extracting the clause and citing the Transfer of Property Act, 1882.',
        variant: 'solution',
      },
    ],
  },
  {
    id: 6,
    type: 'architecture',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1920&auto=format&fit=crop',
    imageAlt: 'Futuristic server room with glowing fiber optics',
    eyebrow: 'System Architecture (The Michelin Kitchen)',
    title: 'Asynchronous AI Architecture',
    points: [
      {
        title: 'The Storefront (Next.js)',
        description:
          'Frictionless UI, zero-password OTP auth via Supabase.',
        icon: 'storefront',
      },
      {
        title: 'The Kitchen Rail (Upstash QStash)',
        description:
          'Serverless message queues prevent browser timeouts, handling thousands of concurrent 3-minute AI reads with zero downtime.',
        icon: 'queue',
      },
      {
        title: 'The Master Chef (Gemini 1.5 Pro + OCR)',
        description:
          'Deterministic extraction rules prevent math hallucinations. JSON-enforced output.',
        icon: 'chef',
      },
    ],
  },
  {
    id: 7,
    type: 'list',
    image:
      'https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1920&auto=format&fit=crop',
    imageAlt: 'Cyber security lock and abstract vault',
    eyebrow: 'Security, Privacy & Compliance',
    title: 'Enterprise-Grade Shield',
    sections: [
      {
        label: 'Zero-Training Privacy',
        content:
          'Google Enterprise APIs guarantee user property documents are NEVER used to train public models.',
        variant: 'default',
      },
      {
        label: 'Auto-Delete Lifecycle',
        content:
          '24-Hour automatic document wiping from Supabase Storage.',
        variant: 'default',
      },
      {
        label: 'Row Level Security (RLS)',
        content: 'Cryptographic separation of user data.',
        variant: 'default',
      },
      {
        label: 'Legal Disclaimers',
        content:
          'Automated triage warnings explicitly stating the tool does not replace binding legal counsel.',
        variant: 'default',
      },
    ],
  },
  {
    id: 8,
    type: 'economics',
    image:
      'https://images.unsplash.com/photo-1642799859038-daf2554794e8?q=80&w=1920&auto=format&fit=crop',
    imageAlt: 'Abstract glowing chart moving upward',
    eyebrow: 'Economics, Scaling & The Future',
    title: 'Unit Economics & The Future',
    sections: [
      {
        label: 'Current State',
        content:
          'Highly profitable serverless free-tiers (Vercel, Supabase, QStash). Pay-as-you-go Gemini API. ~2% Stripe transaction fee. Freemium entry model.',
        variant: 'default',
      },
      {
        label: 'Future Scale',
        content:
          'B2B Enterprise Portals ($500/mo) for Banks/NBFCs to process 1000s of loans.',
        variant: 'highlight',
      },
      {
        label: 'Next-Gen Feature',
        content:
          'ElevenLabs Audio Reports—Generating hyper-realistic 2-minute audio podcasts of the final legal verdict for executives on the go.',
        variant: 'solution',
      },
    ],
  },
]
