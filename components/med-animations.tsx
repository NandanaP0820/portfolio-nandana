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

export function Heart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('animate-heartbeat', className)}>
      <path
        fill="currentColor"
        d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.6 4.5c2.1 0 3.6 1.2 4.4 2.5.8-1.3 2.3-2.5 4.4-2.5 3.6 0 5.7 3.8 4.2 7.2C19.5 16.4 12 21 12 21z"
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

export function Dna({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('flex flex-col items-center gap-2', className)}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-helix flex w-16 items-center justify-between"
          style={{ animationDelay: `${i * -0.3}s` }}
        >
          <span className="size-2.5 rounded-full bg-primary" />
          <span className="h-0.5 flex-1 bg-primary/30" />
          <span className="size-2.5 rounded-full bg-accent" />
        </div>
      ))}
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
