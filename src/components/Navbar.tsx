import { useEffect, useId, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import { Logo } from './Logo'

const navLinkClass =
  'inline-flex h-11 items-center text-[15px] font-medium text-ink link-underline hover:text-brand'

const serviceLinks = [
  { href: '#service-design', label: 'Design' },
  { href: '#service-development', label: 'Development' },
  { href: '#service-content', label: 'Content' },
  { href: '#service-brand', label: 'Branding' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => {
    setOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur-md">
      <nav
        className="relative mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <a href="#home" className="flex shrink-0 items-center overflow-visible" onClick={close}>
          <Logo className="h-10 w-auto max-w-[9rem] sm:h-11" />
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <li>
            <a href="#home" className={navLinkClass}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={navLinkClass}>
              About us
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="#services"
              className={`${navLinkClass} gap-0.5`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Our services
              <KeyboardArrowDownIcon
                sx={{ fontSize: 20 }}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden
              />
            </a>
            {servicesOpen && (
              <ul className="nav-dropdown absolute left-1/2 top-full z-20 min-w-44 -translate-x-1/2 pt-2">
                <li className="rounded-2xl bg-white p-2 shadow-lg ring-1 ring-brand/10">
                  <ul>
                    {serviceLinks.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-lilac hover:text-brand"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="flex h-11 items-center justify-end gap-2">
          <a
            href="#contact"
            className="btn-primary hidden h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white md:inline-flex"
          >
            Contact us
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon aria-hidden /> : <MenuIcon aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id={menuId} className="border-t border-brand/10 bg-page px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#home" className="block rounded-xl px-3 py-3 text-base font-medium" onClick={close}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block rounded-xl px-3 py-3 text-base font-medium" onClick={close}>
                About us
              </a>
            </li>
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block rounded-xl px-3 py-3 text-base font-medium" onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-primary mt-2 flex h-11 items-center justify-center rounded-full bg-brand px-5 text-base font-semibold text-white"
                onClick={close}
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
