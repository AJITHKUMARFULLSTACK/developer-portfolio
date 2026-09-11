import { useState, type CSSProperties, type ReactNode } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { assets } from '../assets'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import type { BlogSlug } from '../content/blogs'

type Service = {
  id: string
  blog: BlogSlug
  image: string
  alt: string
  title: ReactNode
}

const services: Service[] = [
  {
    id: 'service-design',
    blog: 'design',
    image: assets.serviceDesign,
    alt: 'Designer working on a digital canvas',
    title: (
      <>
        We create Clean, Intuitive, and Impactful{' '}
        <span className="text-brand">designs.</span>
      </>
    ),
  },
  {
    id: 'service-development',
    blog: 'development',
    image: assets.serviceDev,
    alt: 'Developer at a workstation with code windows',
    title: (
      <>
        We <span className="text-brand">Develop</span> modern apps and software for
        growing businesses.
      </>
    ),
  },
  {
    id: 'service-content',
    blog: 'content',
    image: assets.serviceContent,
    alt: 'Content creator streaming at a desk',
    title: (
      <>
        We create <span className="text-brand">Content</span> that engages and converts.
      </>
    ),
  },
  {
    id: 'service-brand',
    blog: 'brand',
    image: assets.serviceBrand,
    alt: 'Marketing, ads, SEO and automation illustrations',
    title: (
      <>
        We build <span className="text-brand">Brands</span> and{' '}
        <span className="text-brand">Market</span> them to reach the right people.
      </>
    ),
  },
]

const moreItems = [
  'Logo & brand identity',
  'Social media creatives',
  'Motion graphics & reels',
  'Business websites',
  'Mobile apps',
  'SEO & Google ranking',
  'AI automation',
  'Social media management',
] as const

export function Services() {
  const { ref, isVisible } = useScrollAnimation()
  const [showMore, setShowMore] = useState(false)
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 80}ms` }) as CSSProperties

  return (
    <section
      ref={ref}
      id="services"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2
            id="services-heading"
            className={`scroll-reveal text-3xl font-bold tracking-tight text-ink sm:text-4xl ${v}`}
            style={stagger()}
          >
            Our Services
          </h2>
          <button
            type="button"
            className={`scroll-reveal min-h-11 text-sm font-semibold text-brand underline-offset-4 hover:underline ${v}`}
            style={stagger()}
            onClick={() => setShowMore((open) => !open)}
            aria-expanded={showMore}
          >
            {showMore ? 'View less' : 'View more'}
          </button>
        </div>

        <div className="mt-10 space-y-8">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className={`card-lift scroll-reveal scroll-mt-28 overflow-hidden rounded-[2rem] bg-lilac px-4 py-8 sm:px-8 sm:py-12 ${v}`}
              style={stagger()}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="mx-auto h-auto w-full max-w-xl object-contain"
                loading="lazy"
              />
              <h3 className="mx-auto mt-8 max-w-2xl text-center text-2xl font-bold leading-snug text-ink sm:text-3xl">
                {service.title}
              </h3>
              <div className="mt-8 flex justify-center">
                <a
                  href={`#blog-${service.blog}`}
                  className="btn-primary inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-brand px-8 text-sm font-semibold text-white"
                >
                  Explore
                  <ArrowOutwardIcon sx={{ fontSize: 18 }} aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>

        {showMore && (
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {moreItems.map((item) => (
              <li
                key={item}
                className="card-lift rounded-2xl bg-white px-4 py-4 text-sm font-medium text-ink ring-1 ring-brand/10"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
