import type { CSSProperties } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { IllustrationDesigner } from './illustrations/IllustrationDesigner'
import { IllustrationDeveloper } from './illustrations/IllustrationDeveloper'

const paragraphs = [
  'We are a small, serious agency from Chennai — combining technology and creative design to help small businesses grow.',
  'We started because we kept seeing the same thing: clinics, shops, restaurants and small businesses struggling with problems that the right software or the right design could solve in days.',
  'So we built an agency that handles both sides — the technology that makes your business run better, and the design that makes your brand impossible to ignore.',
  'No big overhead. No unnecessary complexity. Just honest work, delivered well, at a price that makes sense for your business.',
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 100}ms` }) as CSSProperties

  return (
    <section
      ref={ref}
      id="about"
      className="scroll-mt-24 border-t border-stone-200/60 bg-warm-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`scroll-reveal text-2xl font-semibold tracking-tight text-navy sm:text-3xl ${v}`}
          style={stagger()}
        >
          About Us
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="space-y-5 text-[17px] leading-relaxed text-body">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`scroll-reveal ${v}`}
                style={stagger()}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
            <div className={`scroll-reveal flex justify-center sm:justify-end lg:justify-end ${v}`} style={stagger()}>
              <IllustrationDeveloper />
            </div>
            <div className={`scroll-reveal flex justify-center sm:justify-start lg:justify-end ${v}`} style={stagger()}>
              <IllustrationDesigner />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
