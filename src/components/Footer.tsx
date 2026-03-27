import { DEVELOPER_NAME } from '../constants'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Footer() {
  const { ref, className } = useScrollAnimation()

  return (
    <footer ref={ref} className={`border-t border-stone-200/60 bg-warm-white py-8 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-muted">Design. Technology. Growth. — Chennai, India</p>
        <p className="mt-2 text-xs text-muted">
          © {new Date().getFullYear()} {DEVELOPER_NAME}
        </p>
      </div>
    </footer>
  )
}
