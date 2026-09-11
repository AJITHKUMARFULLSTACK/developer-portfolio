import type { CSSProperties } from 'react'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import MovieFilterIcon from '@mui/icons-material/MovieFilter'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const cards = [
  {
    number: '01',
    title: 'Design',
    href: '#blog-design',
    Icon: DesignServicesIcon,
    body: 'Logos, UI and brand systems so your clinic, shop or product looks as serious as the work behind it.',
  },
  {
    number: '02',
    title: 'Development',
    href: '#blog-development',
    Icon: CodeIcon,
    body: 'Websites, hybrid apps and workflow tools built around how you already operate — then kept after launch.',
  },
  {
    number: '03',
    title: 'Content',
    href: '#blog-content',
    Icon: MovieFilterIcon,
    body: 'Creatives, reels and campaigns that get the right people to WhatsApp, Maps or a booking — not empty likes.',
  },
] as const

export function WhoWeAre() {
  const { ref, isVisible } = useScrollAnimation()
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 80}ms` }) as CSSProperties

  return (
    <section
      ref={ref}
      id="who-we-are"
      className="scroll-mt-24 py-8 sm:py-12"
      aria-labelledby="who-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <h2
            id="who-heading"
            className={`scroll-reveal text-3xl font-bold tracking-tight text-ink sm:text-4xl ${v}`}
            style={stagger()}
          >
            Who we are
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((card) => (
              <a
                key={card.number}
                href={card.href}
                className={`card-lift scroll-reveal block rounded-2xl bg-lilac p-5 sm:p-6 ${v}`}
                style={stagger()}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-brand">{card.number}</p>
                  <card.Icon sx={{ fontSize: 22 }} className="text-brand" aria-hidden />
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
