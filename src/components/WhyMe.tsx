import type { CSSProperties } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const points = [
  {
    title: 'Design & Tech Together',
    description:
      'Most agencies do one or the other. We do both — so your brand and your software always work as one.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    title: 'Built for Indian Small Businesses',
    description:
      'We understand what it actually takes to run a business in India. Our solutions are practical, affordable and built for your reality.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing Always',
    description:
      'No hidden charges. No surprises. We agree on everything upfront before a single thing is built.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'We Stay After Delivery',
    description:
      "We don't disappear after launch. We make sure everything keeps working and improving over time.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
]

export function WhyMe() {
  const { ref, isVisible } = useScrollAnimation()
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 100}ms` }) as CSSProperties

  return (
    <section
      ref={ref}
      id="why-me"
      className="scroll-mt-24 border-t border-stone-200/60 bg-warm-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`scroll-reveal text-2xl font-semibold tracking-tight text-navy sm:text-3xl ${v}`}
          style={stagger()}
        >
          Why businesses choose us
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ title, description, icon }) => (
            <div
              key={title}
              className={`scroll-reveal rounded-xl bg-card p-6 shadow-sm ring-1 ring-stone-200/40 sm:p-8 ${v}`}
              style={stagger()}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-accent/10 text-amber-accent">
                {icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
