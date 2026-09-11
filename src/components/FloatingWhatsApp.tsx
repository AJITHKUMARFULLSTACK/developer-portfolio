import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { WHATSAPP_URL } from '../constants'

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg hover:bg-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon aria-hidden />
    </a>
  )
}
