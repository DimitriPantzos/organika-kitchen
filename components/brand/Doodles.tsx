type DoodleProps = { className?: string }

export function Avocado({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M40 8C28 8 16 22 16 40C16 58 28 72 40 72C52 72 64 58 64 40C64 22 52 8 40 8Z" fill="#66BB6A" />
      <path d="M40 20C32 20 24 30 24 42C24 54 32 62 40 62C48 62 56 54 56 42C56 30 48 20 40 20Z" fill="#C8E6C9" />
      <ellipse cx="40" cy="44" rx="9" ry="10" fill="#6D4C41" />
      <ellipse cx="38" cy="42" rx="3" ry="4" fill="#8D6E63" opacity="0.5" />
    </svg>
  )
}

export function Lemon({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <ellipse cx="40" cy="40" rx="24" ry="18" fill="#FDD835" transform="rotate(-15 40 40)" />
      <ellipse cx="40" cy="40" rx="16" ry="12" fill="#FFF9C4" transform="rotate(-15 40 40)" opacity="0.5" />
      <path d="M18 36C14 34 13 30 16 28" stroke="#F9A825" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M60 32L64 26" stroke="#43A047" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="63" cy="24" rx="3" ry="4" fill="#66BB6A" transform="rotate(-30 63 24)" />
    </svg>
  )
}

export function Carrot({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M40 72L24 28C24 28 32 16 40 16C48 16 56 28 56 28L40 72Z" fill="#FF8F00" />
      <path d="M40 72L30 38L40 20L50 38L40 72Z" fill="#FFA726" opacity="0.6" />
      <path d="M34 16C30 8 32 4 36 6" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M40 14C40 4 42 2 44 4" stroke="#43A047" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M46 16C50 8 48 4 44 6" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" fill="none" />
      <line x1="32" y1="40" x2="48" y2="40" stroke="#E65100" strokeWidth="1.5" opacity="0.3" />
      <line x1="34" y1="50" x2="46" y2="50" stroke="#E65100" strokeWidth="1.5" opacity="0.3" />
      <line x1="36" y1="60" x2="44" y2="60" stroke="#E65100" strokeWidth="1.5" opacity="0.3" />
    </svg>
  )
}

export function OrangeSlice({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M12 44A32 32 0 0168 44" fill="#FF8F00" />
      <path d="M16 44A28 28 0 0064 44" fill="#FFB74D" />
      <path d="M40 44L20 44" stroke="white" strokeWidth="2" opacity="0.6" />
      <path d="M40 44L26 20" stroke="white" strokeWidth="2" opacity="0.6" />
      <path d="M40 44L40 14" stroke="white" strokeWidth="2" opacity="0.6" />
      <path d="M40 44L54 20" stroke="white" strokeWidth="2" opacity="0.6" />
      <path d="M40 44L60 44" stroke="white" strokeWidth="2" opacity="0.6" />
      <circle cx="40" cy="44" r="4" fill="#E65100" opacity="0.3" />
    </svg>
  )
}

export function Strawberry({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M40 18C28 18 16 32 16 48C16 64 28 72 40 72C52 72 64 64 64 48C64 32 52 18 40 18Z" fill="#E53935" />
      <path d="M32 12L40 22L48 12" fill="#43A047" />
      <path d="M28 14L36 20" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 14L44 20" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="38" r="2" fill="#FFCDD2" opacity="0.7" />
      <circle cx="44" cy="34" r="2" fill="#FFCDD2" opacity="0.7" />
      <circle cx="36" cy="50" r="2" fill="#FFCDD2" opacity="0.7" />
      <circle cx="48" cy="48" r="2" fill="#FFCDD2" opacity="0.7" />
      <circle cx="40" cy="62" r="2" fill="#FFCDD2" opacity="0.7" />
    </svg>
  )
}

export function Banana({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M20 60C16 48 20 28 36 16C48 8 62 12 64 18C60 16 48 16 38 24C28 34 24 48 26 58C24 60 22 60 20 60Z" fill="#FDD835" />
      <path d="M22 58C20 48 24 32 36 20C44 14 54 12 60 16" stroke="#F9A825" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M18 62C16 62 16 58 20 60" fill="#8D6E63" />
      <path d="M64 18C66 16 66 14 64 14" fill="#8D6E63" />
    </svg>
  )
}

export function Smiley({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="40" r="30" fill="#E53935" />
      <circle cx="40" cy="40" r="30" fill="#FF5722" opacity="0.3" />
      <circle cx="30" cy="34" r="4" fill="white" />
      <circle cx="50" cy="34" r="4" fill="white" />
      <path d="M26 48C30 56 50 56 54 48" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function Beet({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="48" r="22" fill="#880E4F" />
      <circle cx="40" cy="48" r="22" fill="#AD1457" opacity="0.3" />
      <path d="M36 26C32 12 34 4 38 8" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M40 24C40 8 42 4 44 8" stroke="#43A047" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M44 26C48 12 46 4 42 8" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M32 10C28 6 30 2 34 4" stroke="#66BB6A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M48 10C52 6 50 2 46 4" stroke="#66BB6A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function Pineapple({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <ellipse cx="40" cy="50" rx="18" ry="22" fill="#FDD835" />
      <line x1="28" y1="40" x2="52" y2="40" stroke="#F9A825" strokeWidth="1.5" opacity="0.4" />
      <line x1="28" y1="48" x2="52" y2="48" stroke="#F9A825" strokeWidth="1.5" opacity="0.4" />
      <line x1="28" y1="56" x2="52" y2="56" stroke="#F9A825" strokeWidth="1.5" opacity="0.4" />
      <line x1="34" y1="30" x2="34" y2="70" stroke="#F9A825" strokeWidth="1.5" opacity="0.3" />
      <line x1="46" y1="30" x2="46" y2="70" stroke="#F9A825" strokeWidth="1.5" opacity="0.3" />
      <path d="M34 28L28 10" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" />
      <path d="M38 26L36 8" stroke="#43A047" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 26L44 8" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" />
      <path d="M46 28L52 10" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function SmoothieCup({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M22 28L28 68H52L58 28H22Z" fill="#4E342E" />
      <path d="M24 28L28 64H52L56 28H24Z" fill="#E91E63" opacity="0.8" />
      <path d="M24 28L30 64H50L56 28H24Z" fill="#F48FB1" opacity="0.3" />
      <rect x="20" y="24" width="40" height="6" rx="3" fill="#5D4037" />
      <line x1="40" y1="24" x2="40" y2="8" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="6" r="4" fill="#E91E63" />
    </svg>
  )
}

export function Mushroom({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M14 44C14 28 26 16 40 16C54 16 66 28 66 44H14Z" fill="#FFA000" />
      <path d="M20 44C20 32 28 22 40 22C52 22 60 32 60 44" fill="#FFB300" opacity="0.4" />
      <rect x="32" y="44" width="16" height="24" rx="4" fill="#FFF8E1" />
      <circle cx="30" cy="34" r="4" fill="#E65100" opacity="0.3" />
      <circle cx="48" cy="38" r="3" fill="#E65100" opacity="0.3" />
    </svg>
  )
}

export function ChiliPepper({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M44 12C40 8 36 10 38 16C28 20 16 36 18 52C20 64 30 72 38 68C46 64 52 48 48 32C46 24 44 18 44 12Z" fill="#E53935" />
      <path d="M40 14C42 8 46 6 48 10" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M42 16C44 10 48 8 50 12" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function Onion({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <ellipse cx="40" cy="46" rx="22" ry="24" fill="#6A1B9A" />
      <ellipse cx="40" cy="46" rx="14" ry="20" fill="#8E24AA" opacity="0.4" />
      <ellipse cx="40" cy="46" rx="6" ry="16" fill="#AB47BC" opacity="0.3" />
      <path d="M38 22C36 12 38 6 40 8C42 6 44 12 42 22" fill="#66BB6A" />
    </svg>
  )
}

export function Mango({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <ellipse cx="40" cy="42" rx="22" ry="26" fill="#FFB300" transform="rotate(-10 40 42)" />
      <ellipse cx="38" cy="40" rx="14" ry="18" fill="#FDD835" opacity="0.4" transform="rotate(-10 38 40)" />
      <path d="M54 18L60 10" stroke="#388E3C" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="62" cy="8" rx="4" ry="3" fill="#43A047" transform="rotate(-30 62 8)" />
    </svg>
  )
}

export function Plum({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="44" r="24" fill="#6A1B9A" />
      <circle cx="36" cy="40" r="18" fill="#8E24AA" opacity="0.3" />
      <path d="M40 20L44 10" stroke="#388E3C" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="46" cy="8" rx="5" ry="3" fill="#43A047" transform="rotate(20 46 8)" />
    </svg>
  )
}

export const ALL_DOODLES = [
  Avocado, Lemon, Carrot, OrangeSlice, Strawberry, Banana,
  Smiley, Beet, Pineapple, SmoothieCup, Mushroom, ChiliPepper,
  Onion, Mango, Plum,
]
