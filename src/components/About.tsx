import type { CSSProperties } from 'react'
import { assets } from '../assets'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const rows = [
  {
    image: assets.aboutTeam,
    alt: 'Two people collaborating over a digital tablet',
    text: "We're a two-sided studio in Chennai: design and technology in the same briefing. Clinics, retail and service businesses come to us when a logo shop cannot ship software, and a software vendor cannot make the brand hold together.",
  },
  {
    image: assets.aboutDesk,
    alt: 'Person working at a laptop surrounded by communication icons',
    text: 'We started after watching owners lose weeks to agencies that over-scope, and to freelancers who vanish after the files are sent. The work we take on is the work we can stand behind in person.',
  },
  {
    image: assets.aboutAnalytics,
    alt: 'Person reviewing a data dashboard',
    text: 'You get a site or app that matches the desk, a brand that matches the shopfront, and content that matches both. One conversation for look, build and growth — so nothing is “someone else’s module.”',
  },
  {
    image: assets.serviceContent,
    alt: 'Creator producing content at a desk',
    text: 'No retainer theatre. No 18-person deck for a five-page site. Scope and price are written first. After launch we stay on for fixes and small improvements, on a monthly or hourly basis if you want us.',
  },
] as const

export function About() {
  const { ref, isVisible } = useScrollAnimation()
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 80}ms` }) as CSSProperties

  return (
    <section
      ref={ref}
      id="about"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className={`scroll-reveal text-3xl font-bold tracking-tight text-ink sm:text-4xl ${v}`}
          style={stagger()}
        >
          About us
        </h2>

        <div className="mt-12 space-y-14 lg:space-y-20">
          {rows.map((row, i) => {
            const reverse = i % 2 === 1
            return (
              <div
                key={row.text}
                className={`scroll-reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${v}`}
                style={stagger()}
              >
                <div className={reverse ? 'lg:order-2' : ''}>
                  <img
                    src={row.image}
                    alt={row.alt}
                    className="mx-auto h-auto w-full max-w-md object-contain"
                  />
                </div>
                <p
                  className={`max-w-md text-base leading-relaxed text-ink sm:text-lg ${reverse ? 'lg:order-1 lg:justify-self-end' : ''}`}
                >
                  {row.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
