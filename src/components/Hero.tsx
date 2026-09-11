import type { CSSProperties } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { assets } from '../assets'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 100}ms` }) as CSSProperties

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <h1
            id="hero-heading"
            className={`scroll-reveal text-[2rem] font-bold uppercase leading-[1.15] tracking-tight text-brand sm:text-4xl lg:text-[2.75rem] ${v}`}
            style={stagger()}
          >
            Loops &amp; Layouts will always leverage.
          </h1>
          <p
            className={`scroll-reveal mt-5 text-base leading-relaxed text-ink sm:text-lg ${v}`}
            style={stagger()}
          >
            Chennai studio for clinics, shops and service businesses. We design the brand,
            build the website or app, and run the content that brings customers in — one team,
            one price conversation, no extra agency layers.
          </p>
          <div
            className={`scroll-reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center ${v}`}
            style={stagger()}
          >
            <a
              href="#services"
              className="btn-primary inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-brand px-6 text-sm font-semibold text-white"
            >
              View our project
              <ArrowOutwardIcon sx={{ fontSize: 18 }} aria-hidden />
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex h-11 items-center justify-center gap-1.5 rounded-full border-2 border-brand bg-white px-6 text-sm font-semibold text-brand"
            >
              <CalendarMonthIcon sx={{ fontSize: 18 }} aria-hidden />
              Schedule a meeting
            </a>
          </div>
        </div>

        <div className={`scroll-reveal flex justify-center lg:justify-end ${v}`} style={stagger()}>
          <div className="hero-device relative w-full max-w-md">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#111] p-3 ring-1 ring-black/10">
              <div className="mb-2 flex items-center gap-1.5 px-1">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-black p-6">
                <img
                  src={assets.logoFull}
                  alt=""
                  className="hero-logo h-full w-full max-h-[85%] object-contain"
                />
              </div>
            </div>
            <div className="mx-auto h-3 w-[72%] rounded-b-xl bg-[#2a2a2a]" aria-hidden="true" />
            <div className="mx-auto h-1.5 w-[38%] rounded-b-md bg-[#3a3a3a]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
