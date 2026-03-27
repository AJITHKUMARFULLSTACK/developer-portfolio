import type { CSSProperties } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { HeroIllustrationSlideshow } from './HeroIllustrationSlideshow'

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 100}ms` }) as CSSProperties

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-xl text-center lg:text-left">
          <h1
            id="hero-heading"
            className={`scroll-reveal text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15] ${v}`}
            style={stagger()}
          >
            We Design. We Build. We Grow Your Business.
          </h1>
          <p
            className={`scroll-reveal mt-5 text-lg leading-relaxed text-muted sm:text-xl ${v}`}
            style={stagger()}
          >
            A Chennai-based creative &amp; technology agency helping small businesses across
            India with design, software and digital growth — all under one roof.
          </p>
          <div
            className={`scroll-reveal mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start ${v}`}
            style={stagger()}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-amber-accent px-6 py-3.5 text-base font-semibold text-navy shadow-sm transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-accent"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-navy bg-transparent px-6 py-3.5 text-base font-semibold text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              See Our Services
            </a>
          </div>
        </div>

        <div
          className={`scroll-reveal flex justify-center lg:justify-end ${v}`}
          style={stagger()}
        >
          <HeroIllustrationSlideshow />
        </div>
      </div>
    </section>
  )
}
