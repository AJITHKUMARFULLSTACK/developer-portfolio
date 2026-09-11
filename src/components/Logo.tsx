import { assets } from '../assets'
import { AGENCY_NAME } from '../constants'

type LogoProps = {
  variant?: 'mark' | 'full'
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={assets.logoMark}
      alt={AGENCY_NAME}
      className={`overflow-visible object-contain object-center ${className}`}
    />
  )
}
