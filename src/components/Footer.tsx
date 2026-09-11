import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import InstagramIcon from '@mui/icons-material/Instagram'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import { AGENCY_NAME, EMAIL, LOCATION, SOCIALS } from '../constants'
import { Logo } from './Logo'

const serviceLinks = [
  { href: '#blog-design', label: 'UI/UX' },
  { href: '#blog-development', label: 'Development' },
  { href: '#blog-content', label: 'Content' },
  { href: '#blog-brand', label: 'Digital Marketing' },
  { href: '#blog-brand', label: 'SEO' },
] as const

const companyLinks = [
  { href: '#about', label: 'About us' },
  { href: '#services', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: `mailto:${EMAIL}?subject=Careers`, label: 'Careers' },
  { href: '#blogs', label: 'Blogs' },
] as const

function socialIcon(label: string) {
  if (label === 'Instagram') return <InstagramIcon fontSize="small" aria-hidden />
  if (label === 'Dribbble') return <SportsBasketballIcon fontSize="small" aria-hidden />
  return <CollectionsBookmarkIcon fontSize="small" aria-hidden />
}

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-footer text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:items-start lg:px-8 lg:py-20">
        <div>
          <a href="#home" className="inline-flex items-center gap-3 overflow-visible">
            <Logo className="h-12 w-auto max-w-[7.5rem] shrink-0 sm:h-14" />
            <span className="text-lg font-bold uppercase tracking-wide text-[#E0D8EB]">
              {AGENCY_NAME}
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Design, software and growth for small businesses in Chennai. One studio from
            first sketch to a site people can actually use.
          </p>
          <ul className="mt-6 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                  aria-label={social.label}
                >
                  {socialIcon(social.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">Services</h2>
          <ul className="mt-4 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">Company</h2>
          <ul className="mt-4 space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h2>
          <ul className="mt-4 space-y-4 text-sm text-white/70">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-start gap-2 transition hover:text-white"
              >
                <AlternateEmailIcon sx={{ fontSize: 18, mt: '2px' }} aria-hidden />
                {EMAIL}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <PlaceOutlinedIcon sx={{ fontSize: 18, mt: '2px' }} aria-hidden />
              {LOCATION}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {AGENCY_NAME}
      </div>
    </footer>
  )
}
