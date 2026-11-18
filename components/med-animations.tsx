import { cn } from '@/lib/utils'

export function EcgLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 80"
      fill="none"
      aria-hidden="true"
      className={cn('w-full', className)}
      preserveAspectRatio="none"
    >
      <path
        d="M0 40 H140 L155 40 L165 20 L175 60 L190 5 L205 75 L220 40 H330 L345 40 L355 25 L365 55 L380 8 L395 72 L410 40 H600"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-ecg"
      />
    </svg>
  )
}

export function Pill({ className, rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn('animate-float flex h-6 w-14 overflow-hidden rounded-full shadow-sm', className)}
      style={{ ['--r' as string]: `${rotate}deg` }}
    >
      <span className="h-full w-1/2 bg-primary" />
      <span className="h-full w-1/2 bg-accent" />
    </div>
  )
}

const orbitPath = 'M10 80 a70 26 0 1 0 140 0 a70 26 0 1 0 -140 0'
const orbits = [
  { angle: 0, duration: '3s' },
  { angle: 60, duration: '3.8s' },
  { angle: 120, duration: '4.6s' },
]

export function Atom({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('relative size-44 shrink-0', className)}>
      <span className="animate-glow absolute inset-10 rounded-full bg-accent/30 blur-2xl" />
      <svg viewBox="0 0 160 160" fill="none" className="animate-spin-slow relative size-full">
        {orbits.map(({ angle, duration }) => (
          <g key={angle} transform={`rotate(${angle} 80 80)`}>
            <path d={orbitPath} stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
            <circle r="5" className="fill-accent motion-reduce:hidden">
              <animateMotion dur={duration} repeatCount="indefinite" path={orbitPath} />
            </circle>
          </g>
        ))}
        <circle cx="80" cy="80" r="13" className="animate-nucleus fill-primary-foreground" />
        <circle cx="76" cy="76" r="4" className="fill-accent" />
      </svg>
    </div>
  )
}

export function Cell({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'animate-cell flex items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5',
        className,
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="size-1/3 rounded-full bg-primary/15" />
    </div>
  )
}

export function Plus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('animate-float', className)}>
      <path fill="currentColor" d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />
    </svg>
  )
}
