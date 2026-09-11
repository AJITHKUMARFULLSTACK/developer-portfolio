export type BlogSlug = 'design' | 'development' | 'content' | 'brand'

export type BlogPost = {
  slug: BlogSlug
  serviceId: string
  kicker: string
  title: string
  readTime: string
  summary: string
  sections: { heading: string; paragraphs: string[] }[]
}

export const BLOGS: BlogPost[] = [
  {
    slug: 'design',
    serviceId: 'service-design',
    kicker: 'Design',
    title: 'Design that makes a small business look ready for bigger rooms',
    readTime: '6 min read',
    summary:
      'How Loops & Layouts builds logos, interfaces and brand systems for clinics, shops and service businesses in Chennai — without the agency theatre.',
    sections: [
      {
        heading: 'The problem we keep seeing',
        paragraphs: [
          'Most small businesses in India already know they “need a better look.” What they actually need is a system: a logo that holds up on a signboard and a WhatsApp status, a colour set that does not fight their photos, and screens that a first-time customer can use without help.',
          'We treat design as a business tool, not a moodboard. If a layout does not help someone trust you, book you, or pay you, it is decoration. We cut decoration.',
        ],
      },
      {
        heading: 'What you actually get',
        paragraphs: [
          'Brand identity: wordmark, colour, type and a short usage guide your printer and intern can follow. UI/UX for websites and apps: clear hierarchy, mobile-first layouts, and forms that do not leak leads. Pitch decks and ad creatives when you need to sell the room, not just occupy it.',
          'We work in tight loops. You see options early, we lock a direction, then we polish. You are never waiting six weeks for a “big reveal.”',
        ],
      },
      {
        heading: 'Who this is for',
        paragraphs: [
          'Clinics that need to look as careful as their care. Retail and restaurants that want menus, boards and Instagram to feel like one brand. Founders who need a product that does not look like a template with their name pasted on it.',
        ],
      },
      {
        heading: 'How we price the work',
        paragraphs: [
          'Fixed scope, written up front. Logo and identity as a package. Website UI as screens, not endless hours. Revisions are counted so neither side is guessing. If the job grows, we say so before we bill it.',
        ],
      },
    ],
  },
  {
    slug: 'development',
    serviceId: 'service-development',
    kicker: 'Development',
    title: 'Software that matches how your business already runs',
    readTime: '7 min read',
    summary:
      'Websites, hybrid apps and workflow tools built in Chennai for owners who cannot afford a six-month IT project — or a product that dies after launch.',
    sections: [
      {
        heading: 'Build around the workflow, not the trend',
        paragraphs: [
          'A clinic does not need a “platform.” It needs appointments that do not double-book, records that staff can find, and a site that loads on a mid-range Android. A shop needs inventory and billing that match how they already count stock. We start there.',
          'Loops & Layouts builds business websites, landing pages, web apps and hybrid mobile apps for iOS and Android. We also automate the boring bits: reminders, lead capture, internal dashboards, and AI-assisted tasks where they save real hours — not where they make a demo look clever.',
        ],
      },
      {
        heading: 'What “modern” means here',
        paragraphs: [
          'Fast on cheap phones. Easy for you to update later. Hosted in a way you can actually pay for. Written so another developer can take over if they must. We do not lock you into a mystery stack you cannot hire for in India.',
          'Engagements can be a fixed project, monthly maintenance, or hourly support after launch. We stay after delivery. That is the point of a small studio: you still have a person to call.',
        ],
      },
      {
        heading: 'Typical projects',
        paragraphs: [
          'A service business site that ranks for local searches and converts WhatsApp chats. A booking or billing tool that replaces three spreadsheets. A hybrid app your field team can use offline-first where the network drops. Clinic and operations automation that cuts front-desk phone tag.',
        ],
      },
      {
        heading: 'How we work with you',
        paragraphs: [
          'We agree the outcome, the screens, and the price before a line of production code. You get staging to click through. We launch, we watch the first week, we fix what real users break. Then we put a maintenance rhythm in writing if you want it.',
        ],
      },
    ],
  },
  {
    slug: 'content',
    serviceId: 'service-content',
    kicker: 'Content',
    title: 'Content that a busy owner can post — and a customer will finish',
    readTime: '5 min read',
    summary:
      'Social creatives, reels, motion and copy for Indian small businesses that need a steady presence without hiring a full in-house team.',
    sections: [
      {
        heading: 'Presence is not posting every day for the sake of it',
        paragraphs: [
          'If your feed looks expensive but nobody enquires, it is art. If it looks rushed and nobody trusts you, it is noise. We aim for the middle: work that looks intentional, speaks Tamil Nadu and English audiences without cringe, and points to a booking, a map pin, or a WhatsApp chat.',
        ],
      },
      {
        heading: 'What we produce',
        paragraphs: [
          'Social creatives and carousels. Short-form video editing and reels cut for Instagram, YouTube Shorts and ads. Motion graphics for offers, openings and product drops. Ad creatives for Meta when you are ready to spend. Copy that sounds like a person who knows the trade, not a slogan generator.',
          'We can run a monthly content desk — planning, design, edit, captions — or deliver a one-off campaign when you have a launch date. You approve in batches. You are not sitting in a 40-message feedback thread for every frame.',
        ],
      },
      {
        heading: 'Built for how Indian businesses actually sell',
        paragraphs: [
          'Festivals, local offers, before-and-after, staff faces, and “this week’s slot” beat generic lifestyle stock. We shoot-ready templates when you have a phone; we finish studio-style motion when the offer needs weight. The goal is conversion and recall, not follower vanity.',
        ],
      },
      {
        heading: 'How it sits next to design and code',
        paragraphs: [
          'The same studio that draws your brand also ships the site it points to. Colours, type and tone stay consistent from a reel to a landing page. That is why we exist as one roof: you do not brief three vendors who never speak.',
        ],
      },
    ],
  },
  {
    slug: 'brand',
    serviceId: 'service-brand',
    kicker: 'Brands & marketing',
    title: 'A brand people remember — and a path for the right people to find it',
    readTime: '6 min read',
    summary:
      'Positioning, identity, digital marketing and local SEO for businesses that need to be found in Chennai and across India, not just “have a logo.”',
    sections: [
      {
        heading: 'Brand is the promise. Marketing is the proof.',
        paragraphs: [
          'We name, position and dress the business so a stranger can tell what you do in three seconds. Then we put that promise where buyers already look: Google Maps and Search, Instagram, and ads when the unit economics make sense.',
          'Digital marketing here is not a 40-slide “funnel.” It is listings that are complete, pages that rank for the services you actually sell, creatives that match the landing page, and tracking so you know which rupee came back.',
        ],
      },
      {
        heading: 'SEO and local growth, spoken plainly',
        paragraphs: [
          'If someone in Chennai searches “clinic near me,” “custom software,” or your trade plus an area name, you should appear. That means technical hygiene on the site, honest service pages, Google Business Profile care, and content that answers real questions — not keyword stuffing.',
          'We do not promise #1 in 30 days. We do promise a plan you can read, work you can see, and reports that show queries, calls and form fills — not vanity traffic.',
        ],
      },
      {
        heading: 'What a typical engagement includes',
        paragraphs: [
          'Brand foundation (if you do not have one that holds). Campaign creatives and landing pages. Social management where you need consistency. Search and Maps work for local demand. Optional paid ads once organic and creative are not the bottleneck.',
        ],
      },
      {
        heading: 'Why a small studio can do this without the overhead',
        paragraphs: [
          'Large agencies spread a junior team across twenty accounts. We take fewer clients so design, build and marketing stay in one conversation. You get fewer meetings and a clearer price. If we are not the right fit, we will say so in the first call.',
        ],
      },
    ],
  },
]

export function getBlog(slug: string | null): BlogPost | undefined {
  if (!slug) return undefined
  return BLOGS.find((post) => post.slug === slug)
}
