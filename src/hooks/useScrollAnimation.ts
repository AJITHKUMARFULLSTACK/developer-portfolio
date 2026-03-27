import { useEffect, useRef, useState, type RefObject } from 'react'

const THRESHOLD = 0.15

export type UseScrollAnimationReturn = {
  ref: RefObject<HTMLElement | null>
  className: string
  isVisible: boolean
}

/**
 * Scroll-triggered fade: opacity 0→1, translateY 30px→0 when entering viewport;
 * reverses when leaving. Uses IntersectionObserver with threshold 0.15.
 */
export function useScrollAnimation(): UseScrollAnimationReturn {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: THRESHOLD, rootMargin: '0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const className = `scroll-reveal${isVisible ? ' scroll-reveal--visible' : ''}`

  return { ref, className, isVisible }
}
