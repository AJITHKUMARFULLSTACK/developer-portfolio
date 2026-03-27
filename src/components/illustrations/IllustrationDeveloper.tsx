import { useId } from 'react'

/**
 * Pure SVG + CSS — developer: laptop, animated code lines, cursor, floating icons.
 */

export function IllustrationDeveloper() {
  const glowId = useId().replace(/:/g, '')

  return (
    <div className="w-full max-w-[min(100%,18rem)] rounded-2xl border border-stone-200/90 bg-card p-4 shadow-sm sm:max-w-[20rem] sm:p-5">
      <div className="relative mx-auto aspect-[5/4] w-full">
        <svg
          className="h-full w-full"
          viewBox="0 0 280 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id={`ill-dev-glow-${glowId}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Laptop */}
          <path
            d="M52 38h176a6 6 0 016 6v96a6 6 0 01-6 6H52a6 6 0 01-6-6V44a6 6 0 016-6z"
            stroke="#0F172A"
            strokeWidth={1.75}
            fill="#F5F5F4"
          />
          <rect x="56" y="42" width="168" height="96" rx="3" fill="#FAFAF9" stroke="#E7E5E4" strokeWidth="1" />

          {/* Glowing editor bar */}
          <rect
            x="60"
            y="46"
            width="40"
            height="3"
            rx="1"
            fill="#F59E0B"
            opacity="0.85"
            filter={`url(#ill-dev-glow-${glowId})`}
          />

          {/* Code lines */}
          <rect
            className="ill-dev-code-a"
            x="60"
            y="56"
            width="120"
            height="3"
            rx="1"
            fill="#0F172A"
            opacity="0.85"
          />
          <rect
            className="ill-dev-code-b"
            x="60"
            y="66"
            width="72"
            height="3"
            rx="1"
            fill="#F59E0B"
            opacity="0.9"
          />
          <rect
            className="ill-dev-code-c"
            x="60"
            y="76"
            width="100"
            height="3"
            rx="1"
            fill="#0F172A"
            opacity="0.75"
          />
          <rect
            className="ill-dev-code-d"
            x="60"
            y="86"
            width="88"
            height="3"
            rx="1"
            fill="#F59E0B"
            opacity="0.8"
          />
          <rect
            className="ill-dev-code-a"
            x="60"
            y="96"
            width="56"
            height="3"
            rx="1"
            fill="#0F172A"
            opacity="0.6"
          />

          {/* Blinking cursor */}
          <rect className="ill-dev-cursor" x="184" y="56" width="2" height="12" rx="0.5" fill="#F59E0B" />

          {/* Keyboard base */}
          <path
            d="M38 148h204l-8 12H46l-8-12z"
            fill="#E7E5E4"
            stroke="#0F172A"
            strokeWidth="1.25"
          />
          <rect x="52" y="152" width="176" height="4" rx="1" fill="#D6D3D1" opacity="0.6" />
        </svg>

        {/* Floating gear */}
        <div className="ill-dev-float-1 pointer-events-none absolute -left-1 top-0 sm:left-0">
          <svg
            viewBox="0 0 24 24"
            className="ill-dev-gear h-8 w-8 text-navy"
            fill="none"
            aria-hidden="true"
            style={{ transformOrigin: '12px 12px' }}
          >
            <circle cx="12" cy="12" r="3" fill="#F59E0B" opacity="0.35" />
            <path
              d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
              stroke="#0F172A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
              stroke="#0F172A"
              strokeWidth="1.25"
            />
          </svg>
        </div>

        {/* Floating database */}
        <div className="ill-dev-float-2 pointer-events-none absolute bottom-2 left-0 sm:-left-1">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#F59E0B" strokeWidth="1.25" opacity="0.9" />
            <path d="M4 18c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#0F172A" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Floating browser */}
        <div className="ill-dev-float-3 pointer-events-none absolute -right-1 top-4 sm:right-0">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="#0F172A" strokeWidth="1.5" fill="#FAFAF9" />
            <path d="M3 8h18" stroke="#0F172A" strokeWidth="1.25" />
            <circle cx="6" cy="6" r="0.75" fill="#F59E0B" />
            <circle cx="8.5" cy="6" r="0.75" fill="#D6D3D1" />
            <rect x="6" y="11" width="10" height="2" rx="0.5" fill="#0F172A" opacity="0.35" />
            <rect x="6" y="15" width="7" height="2" rx="0.5" fill="#F59E0B" opacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}
