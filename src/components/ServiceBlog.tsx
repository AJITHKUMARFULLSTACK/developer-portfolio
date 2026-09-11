import { useEffect, useId, useRef, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CloseIcon from '@mui/icons-material/Close'
import ScheduleIcon from '@mui/icons-material/Schedule'
import { BLOGS, getBlog, type BlogSlug } from '../content/blogs'
import { EMAIL } from '../constants'

function slugFromHash(): BlogSlug | 'index' | null {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'blogs') return 'index'
  if (hash.startsWith('blog-')) {
    const slug = hash.slice(5) as BlogSlug
    if (BLOGS.some((post) => post.slug === slug)) return slug
  }
  return null
}

export function closeBlog() {
  const { pathname, search } = window.location
  window.history.pushState(null, '', `${pathname}${search}#services`)
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export function ServiceBlog() {
  const [view, setView] = useState<BlogSlug | 'index' | null>(() =>
    typeof window === 'undefined' ? null : slugFromHash(),
  )
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const post = view && view !== 'index' ? getBlog(view) : undefined

  useEffect(() => {
    const sync = () => setView(slugFromHash())
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  useEffect(() => {
    if (!view) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeBlog()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [view])

  if (!view) return null

  return (
    <div
      className="blog-overlay fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/50 px-4 py-8 sm:py-12"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeBlog()
      }}
    >
      <article className="blog-panel relative mb-8 w-full max-w-3xl rounded-[2rem] bg-page p-6 shadow-2xl sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <button
            ref={closeRef}
            type="button"
            className="btn-ghost inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-semibold text-brand"
            onClick={closeBlog}
          >
            <ArrowBackIcon fontSize="small" aria-hidden />
            Back
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-lilac"
            aria-label="Close article"
            onClick={closeBlog}
          >
            <CloseIcon aria-hidden />
          </button>
        </div>

        {post ? (
          <>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">{post.kicker}</p>
            <h2 id={titleId} className="mt-2 text-2xl font-bold leading-snug text-ink sm:text-3xl">
              {post.title}
            </h2>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
              <ScheduleIcon sx={{ fontSize: 18 }} aria-hidden />
              {post.readTime}
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink sm:text-lg">{post.summary}</p>
            {post.sections.map((section) => (
              <section key={section.heading} className="mt-8">
                <h3 className="text-lg font-bold text-ink">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-3 text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="btn-primary inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white"
              >
                Talk to us about this
              </a>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Inquiry: ${post.kicker}`)}`}
                className="btn-secondary inline-flex h-11 items-center justify-center rounded-full border-2 border-brand bg-white px-6 text-sm font-semibold text-brand"
              >
                Email this brief
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 id={titleId} className="mt-6 text-2xl font-bold text-ink sm:text-3xl">
              Studio notes
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Short, practical writing on how we design, build and grow small businesses from Chennai.
            </p>
            <ul className="mt-8 space-y-4">
              {BLOGS.map((item) => (
                <li key={item.slug}>
                  <a href={`#blog-${item.slug}`} className="card-lift block rounded-2xl bg-lilac p-5">
                    <p className="text-sm font-semibold text-brand">{item.kicker}</p>
                    <p className="mt-1 font-bold text-ink">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </article>
    </div>
  )
}
