import { useCallback, useEffect, useId, useState } from 'react'
import { IllustrationDesigner } from './illustrations/IllustrationDesigner'
import { IllustrationDeveloper } from './illustrations/IllustrationDeveloper'

const AUTO_MS = 5500

/** Minimal team silhouette — suggests real people; motion via CSS only */
function HeroHumanAccent({ active }: { active: 'dev' | 'design' }) {
  return (
    <div
      className="hero-human-wrap mt-4 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <svg
        className="hero-human-svg h-9 w-[7.5rem] text-navy sm:h-10 sm:w-[8.5rem]"
        viewBox="0 0 120 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="hero-human-figure-a">
          <circle cx="18" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" fill="#FAFAF9" />
          <path
            d="M10 34c0-6 3.5-10 8-10s8 4 8 10"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <g className={active === 'dev' ? 'hero-human-wave' : ''}>
            <path
              d="M12 22l-2 4"
              stroke="#F59E0B"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g className="hero-human-figure-b">
          <circle cx="60" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" fill="#FAFAF9" />
          <path
            d="M52 34c0-6 3.5-10 8-10s8 4 8 10"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <g className={active === 'design' ? 'hero-human-wave' : ''}>
            <path
              d="M68 22l2 4"
              stroke="#6366F1"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g className="hero-human-figure-c">
          <circle cx="102" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" fill="#FAFAF9" />
          <path
            d="M94 34c0-6 3.5-10 8-10s8 4 8 10"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M24 18 Q60 6 96 18"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="3 3"
        />
      </svg>
      <p className="max-w-[14rem] text-center text-[11px] font-medium uppercase tracking-wide text-muted sm:text-xs">
        {active === 'dev' ? 'Hands-on build & delivery' : 'People-first creative craft'}
      </p>
    </div>
  )
}

export function HeroIllustrationSlideshow() {
  const uid = useId()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    const t = window.setInterval(() => {
      setActive((i) => (i + 1) % 2)
    }, AUTO_MS)
    return () => window.clearInterval(t)
  }, [])

  const go = useCallback((index: number) => {
    setActive(index)
  }, [])

  const mode = active === 0 ? 'dev' : 'design'

  return (
    <div className="flex w-full max-w-[min(100%,20rem)] flex-col items-center">
      <div
        className="relative w-full min-h-[min(72vw,280px)] sm:min-h-[300px]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Highlighting design and development capabilities"
      >
        <div
          id={`${uid}-panel-0`}
          role="tabpanel"
          className={`hero-slide absolute inset-0 flex justify-center transition-opacity duration-700 ease-in-out ${
            active === 0 ? 'z-[1] opacity-100' : 'pointer-events-none z-0 opacity-0'
          }`}
          aria-hidden={active !== 0}
        >
          <IllustrationDeveloper />
        </div>
        <div
          id={`${uid}-panel-1`}
          role="tabpanel"
          className={`hero-slide absolute inset-0 flex justify-center transition-opacity duration-700 ease-in-out ${
            active === 1 ? 'z-[1] opacity-100' : 'pointer-events-none z-0 opacity-0'
          }`}
          aria-hidden={active !== 1}
        >
          <IllustrationDesigner />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3" role="tablist" aria-label="Choose illustration">
        <button
          type="button"
          role="tab"
          id={`${uid}-tab-0`}
          aria-selected={active === 0}
          aria-controls={`${uid}-panel-0`}
          tabIndex={active === 0 ? 0 : -1}
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-accent ${
            active === 0 ? 'scale-125 bg-amber-accent' : 'bg-stone-300 hover:bg-stone-400'
          }`}
          onClick={() => go(0)}
        />
        <button
          type="button"
          role="tab"
          id={`${uid}-tab-1`}
          aria-selected={active === 1}
          aria-controls={`${uid}-panel-1`}
          tabIndex={active === 1 ? 0 : -1}
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-accent ${
            active === 1 ? 'scale-125 bg-amber-accent' : 'bg-stone-300 hover:bg-stone-400'
          }`}
          onClick={() => go(1)}
        />
      </div>

      <p className="mt-2 text-center text-xs font-medium text-navy sm:text-sm" aria-live="polite">
        {active === 0 ? 'Development & systems' : 'Design & brand'}
      </p>

      <HeroHumanAccent active={mode} />
    </div>
  )
}
