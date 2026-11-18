import { Camera } from 'lucide-react'
import { site } from '@/lib/site'
import { Cell, EcgLine, Pill, Plus } from '@/components/med-animations'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Cell className="absolute -left-10 top-10 size-40" />
      <Cell className="absolute right-[-3rem] bottom-0 size-56" delay={-5} />
      <Pill className="absolute right-[12%] top-12 hidden md:flex" rotate={-30} />
      <Pill className="absolute left-[8%] bottom-16 hidden md:flex [animation-delay:-2s]" rotate={25} />
      <Plus className="absolute left-[45%] top-8 size-5 text-accent [animation-delay:-3s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_auto] md:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            Medicine Portfolio
          </p>
          <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-tight text-primary md:text-7xl">
            Hello, I&apos;m {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {site.title} with a heart for patients, a curious mind for science, and a portfolio
            built around the nine EmiratesMEDs competencies.
          </p>
          <EcgLine className="mt-8 h-14 max-w-md text-primary" />
        </div>

        <div className="relative mx-auto">
          <div className="absolute -inset-3 rotate-6 rounded-[2rem] bg-accent/40" aria-hidden="true" />
          <div
            role="img"
            aria-label={`Photo of ${site.name}`}
            className="relative flex size-60 flex-col items-center justify-center gap-2 rounded-[2rem] border-4 border-card bg-secondary text-secondary-foreground shadow-xl md:size-72"
          >
            <Camera className="size-10 opacity-60" aria-hidden="true" />
            <span className="text-sm font-medium opacity-70">Your photo here</span>
          </div>
        </div>
      </div>
    </section>
  )
}
