import type { CSSProperties, FormEvent } from 'react'
import { EMAIL, WHATSAPP_URL } from '../constants'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HELP_OPTIONS = [
  'Website',
  'Software',
  'Branding & Design',
  'Social Media',
  'Video Editing',
  'All of the above',
  'Not sure yet',
] as const

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const v = isVisible ? 'scroll-reveal--visible' : ''
  let s = 0
  const stagger = () =>
    ({ '--stagger-delay': `${(s++) * 100}ms` }) as CSSProperties

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const topic = String(fd.get('helpWith') ?? '')
    const message = String(fd.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Inquiry: ${topic}`)
    const body = encodeURIComponent(
      message ? `I need help with: ${topic}\n\n${message}` : `I need help with: ${topic}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section ref={ref} id="contact" className="scroll-mt-24 bg-navy py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={`scroll-reveal text-2xl font-semibold tracking-tight text-white sm:text-3xl ${v}`}
          style={stagger()}
        >
          Ready to grow your business?
        </h2>
        <p
          className={`scroll-reveal mx-auto mt-4 max-w-xl text-lg leading-relaxed text-stone-300 ${v}`}
          style={stagger()}
        >
          Tell us what you need. We&apos;ll come back with an honest plan and a clear price.
        </p>

        <form
          className="mx-auto mt-10 max-w-md text-left"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div className={`scroll-reveal ${v}`} style={stagger()}>
            <label htmlFor="helpWith" className="block text-sm font-medium text-stone-300">
              I need help with
            </label>
            <select
              id="helpWith"
              name="helpWith"
              required
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-base text-white outline-none ring-amber-accent/0 transition focus:border-amber-accent/80 focus:ring-2 focus:ring-amber-accent/40"
              defaultValue=""
            >
              <option value="" disabled className="text-navy">
                Select an option
              </option>
              {HELP_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="text-navy">
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className={`scroll-reveal mt-4 ${v}`} style={stagger()}>
            <label htmlFor="message" className="block text-sm font-medium text-stone-300">
              Your message <span className="font-normal text-stone-500">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full resize-y rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-stone-500 outline-none ring-amber-accent/0 transition focus:border-amber-accent/80 focus:ring-2 focus:ring-amber-accent/40"
              placeholder="Briefly describe your project or question…"
            />
          </div>
          <div className={`scroll-reveal mt-6 ${v}`} style={stagger()}>
            <button
              type="submit"
              className="w-full rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Send this by email
            </button>
          </div>
        </form>

        <div
          className={`scroll-reveal mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 ${v}`}
          style={stagger()}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-amber-accent px-8 py-3.5 text-base font-semibold text-navy shadow-sm transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-accent"
          >
            WhatsApp Me
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Send an Email
          </a>
        </div>
        <div
          className={`scroll-reveal mt-10 space-y-2 text-stone-300 ${v}`}
          style={stagger()}
        >
          <p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-white underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
          </p>
          <p className="text-[15px] text-stone-400">Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </section>
  )
}
