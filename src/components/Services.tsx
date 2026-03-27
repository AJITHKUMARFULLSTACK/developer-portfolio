import type { CSSProperties, ReactNode } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type ServiceItem = { title: string; description: string; icon: ReactNode }

const iconClass = 'h-8 w-8'

const groups: { label: string; items: ServiceItem[] }[] = [
  {
    label: 'Design & Creative',
    items: [
      {
        title: 'Logo & Brand Identity',
        description: 'Build a brand that looks professional and stays memorable.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        ),
      },
      {
        title: 'Social Media Creatives',
        description: 'Scroll-stopping posts, stories and ads designed for your audience.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        title: 'Motion Graphics & Animation',
        description: 'Bring your brand to life with smooth, modern animations.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        title: 'Video Editing & Reels',
        description: 'Short-form content edited for Instagram, YouTube and beyond.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        title: 'Ad Creatives',
        description: 'High-converting visuals for Meta and Google ad campaigns.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
        ),
      },
      {
        title: 'Pitch Deck Design',
        description: 'Professional presentations that win clients and investors.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
      },
      {
        title: 'UI/UX Design',
        description: 'Clean, intuitive interfaces your users will love.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Technology & Growth',
    items: [
      {
        title: 'Business Websites & Landing Pages',
        description: 'Fast, mobile-ready websites that convert visitors into customers.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        ),
      },
      {
        title: 'Web App & Software Development',
        description: 'Custom software built around your business workflow.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
      },
      {
        title: 'Mobile App Development',
        description:
          'Hybrid mobile apps for iOS and Android, built for long-term support on contract, monthly maintenance or hourly basis.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        title: 'Clinic & Business Automation',
        description: 'Cut manual work with smart, affordable automation tools.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        ),
      },
      {
        title: 'AI Automation',
        description:
          'Automate repetitive business tasks using AI — smarter workflows, less manual effort, more time for what matters.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ),
      },
      {
        title: 'SEO & Google Ranking',
        description: 'Get found on Google by the customers already searching for you.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        ),
      },
      {
        title: 'Social Media Management',
        description: 'Consistent posting, engagement and growth across your platforms.',
        icon: (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
      },
    ],
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 100}ms` }) as CSSProperties

  return (
    <section
      ref={ref}
      id="services"
      className="scroll-mt-24 bg-warm-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`scroll-reveal text-2xl font-semibold tracking-tight text-navy sm:text-3xl ${v}`}
          style={stagger()}
        >
          What We Do
        </h2>
        <p
          className={`scroll-reveal mt-4 max-w-2xl text-[17px] leading-relaxed text-muted ${v}`}
          style={stagger()}
        >
          Everything your business needs — design, technology and growth, handled together.
        </p>

        {groups.map((group) => (
          <div key={group.label} className="mt-12 first:mt-10">
            <p
              className={`scroll-reveal text-sm font-semibold uppercase tracking-wide text-amber-accent ${v}`}
              style={stagger()}
            >
              {group.label}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map(({ title, description, icon }) => (
                <article
                  key={title}
                  className={`scroll-reveal overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-stone-200/80 transition hover:ring-stone-300/80 ${v}`}
                  style={stagger()}
                >
                  <div className="h-1 bg-amber-accent" aria-hidden="true" />
                  <div className="p-6 sm:p-8">
                    <div className="text-navy">{icon}</div>
                    <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
