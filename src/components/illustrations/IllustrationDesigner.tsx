/**
 * Pure SVG + CSS — designer: canvas, shapes, animated pen line, floating icons.
 */

export function IllustrationDesigner() {
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
          {/* Artboard */}
          <rect
            x="36"
            y="32"
            width="208"
            height="128"
            rx="8"
            fill="#FAFAF9"
            stroke="#0F172A"
            strokeWidth="1.75"
          />
          <rect x="40" y="36" width="200" height="8" rx="2" fill="#F5F5F4" stroke="#E7E5E4" strokeWidth="1" />

          {/* Layout shapes */}
          <circle cx="88" cy="104" r="22" stroke="#6366F1" strokeWidth="2" fill="#6366F1" fillOpacity="0.12" />
          <rect
            x="124"
            y="78"
            width="44"
            height="52"
            rx="3"
            stroke="#0F172A"
            strokeWidth="1.75"
            fill="#F59E0B"
            fillOpacity="0.15"
          />
          <path d="M196 130l-26-46h52l-26 46z" stroke="#6366F1" strokeWidth="1.75" fill="#6366F1" fillOpacity="0.1" />

          {/* Animated pen stroke across canvas */}
          <path
            className="ill-dsgn-pen-line"
            pathLength={100}
            d="M48 118c28-4 52 8 76 2s48-14 72-6"
            stroke="#F59E0B"
            strokeWidth="2.25"
            strokeLinecap="round"
            fill="none"
          />

          {/* Pencil tip */}
          <path
            d="M188 108l10-6 4 12-10 4-4-10z"
            fill="#0F172A"
            stroke="#0F172A"
            strokeWidth="0.75"
            opacity="0.9"
          />
        </svg>

        {/* Color palette */}
        <div className="ill-dsgn-float-a pointer-events-none absolute -left-1 top-2 sm:left-0">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
            <path
              d="M12 3c-4 2-6 6-4 9 1.5 2.5 5 3 8 1"
              stroke="#0F172A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="8" cy="8" r="2.5" fill="#6366F1" />
            <circle cx="12" cy="6" r="2.5" fill="#F59E0B" />
            <circle cx="16" cy="9" r="2.5" fill="#0F172A" opacity="0.35" />
          </svg>
        </div>

        {/* Play (motion) */}
        <div className="ill-dsgn-float-b pointer-events-none absolute -right-1 bottom-6 sm:right-0">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="#0F172A" strokeWidth="1.5" fill="#FAFAF9" />
            <path d="M10.5 8.5l6 3.5-6 3.5v-7z" fill="#6366F1" stroke="#6366F1" strokeWidth="0.5" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Sparkle */}
        <div className="ill-dsgn-float-c pointer-events-none absolute bottom-1 left-8 sm:left-10">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
            <path
              d="M12 2v4M12 18v4M4 12h4M16 12h4M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M17.66 6.34l-2.83 2.83M9.17 14.83l-2.83 2.83"
              stroke="#F59E0B"
              strokeWidth="1.35"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="2" fill="#F59E0B" opacity="0.45" />
          </svg>
        </div>
      </div>
    </div>
  )
}
