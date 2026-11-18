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

const HELIX_PAIRS = 16
const HELIX_DURATION = 3.6

export function DnaHelix({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('relative flex h-64 w-44 shrink-0 items-center justify-center', className)}>
      <span className="animate-glow absolute inset-6 rounded-full bg-accent/30 blur-3xl" />
      <div className="relative flex -rotate-[24deg] flex-col gap-[7px]">
        {Array.from({ length: HELIX_PAIRS }, (_, i) => {
          const delay = `${(-i * HELIX_DURATION) / HELIX_PAIRS}s`
          return (
            <div key={i} className="relative flex h-2 w-28 items-center justify-center">
              <span
                className="helix-rung absolute h-[2px] w-[92px] rounded-full bg-gradient-to-r from-accent/70 via-primary-foreground/40 to-primary-foreground/70"
                style={{ animationDelay: delay }}
              />
              <span
                className="helix-dot absolute size-2.5 rounded-full bg-accent shadow-[0_0_10px_2px] shadow-accent/70"
                style={{ animationDelay: delay }}
              />
              <span
                className="helix-dot absolute size-2.5 rounded-full bg-primary-foreground shadow-[0_0_10px_2px] shadow-primary-foreground/60"
                style={{ animationDelay: `calc(${delay} - ${HELIX_DURATION / 2}s)` }}
              />
            </div>
          )
        })}
      </div>
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
