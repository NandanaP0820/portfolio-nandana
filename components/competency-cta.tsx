import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { competencies } from '@/lib/site'
import { Atom } from '@/components/med-animations'

export function CompetencyCta() {
  return (
    <section aria-labelledby="competency-cta" className="mx-auto max-w-6xl px-5">
      <Link
        href="/competencies"
        className="group relative flex flex-col gap-8 overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-2xl shadow-primary/30 transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 md:flex-row md:items-center md:p-12"
      >
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">EmiratesMEDs Framework</p>
          <h2 id="competency-cta" className="mt-3 text-balance font-serif text-4xl font-semibold md:text-5xl">
            Explore my 9 Competencies
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2" aria-hidden="true">
            {competencies.map(({ number, icon: Icon }) => (
              <li
                key={number}
                className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors group-hover:bg-primary-foreground/20"
              >
                <Icon className="size-5" />
              </li>
            ))}
          </ul>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-semibold text-primary">
            View Competencies
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
        <Atom className="hidden md:block" />
      </Link>
    </section>
  )
}
