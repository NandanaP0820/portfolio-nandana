import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { competencies } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Cell, EcgLine, Pill } from '@/components/med-animations'

export const metadata: Metadata = {
  title: 'Competencies',
  description: 'The nine EmiratesMEDs competencies of medical education in the UAE.',
}

export default function CompetenciesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24">
        <section className="relative overflow-hidden">
          <Cell className="absolute -right-12 -top-8 size-48" />
          <Pill className="absolute left-[10%] top-14 hidden md:flex" rotate={-20} />
          <div className="relative mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back home
            </Link>
            <h1 className="mt-6 text-balance font-serif text-5xl font-semibold text-primary md:text-6xl">
              The 9 Competencies
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              The thematic roles of the EmiratesMEDs national competency framework for medical
              graduates in the UAE.
            </p>
            <EcgLine className="mx-auto mt-8 h-12 max-w-sm text-primary" />
          </div>
        </section>

        <ol className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map(({ number, title, description, icon: Icon }) => (
            <li
              key={number}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-4 font-serif text-8xl font-bold text-secondary transition-colors group-hover:text-accent/40"
              >
                {number}
              </span>
              <span className="relative flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:rotate-6">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h2 className="relative mt-5 font-serif text-2xl font-semibold leading-snug">
                <span className="sr-only">{`Competency ${number}: `}</span>
                {title}
              </h2>
              <p className="relative mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-3xl px-5 text-center text-sm text-muted-foreground">
          Source:{' '}
          <a
            href="https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2026.1803817/full"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            EmiratesMEDs: a national competency framework for UAE medical graduates
          </a>{' '}
          (Frontiers in Medicine, 2026)
        </p>
      </main>
      <SiteFooter />
    </>
  )
}
