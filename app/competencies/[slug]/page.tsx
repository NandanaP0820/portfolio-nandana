import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  FileBadge,
  Lightbulb,
  Plus,
} from 'lucide-react'
import { competencies } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const focusAreas: Record<number, string[]> = {
  1: [
    'Build a sound foundation in biomedical and clinical knowledge.',
    'Use structured reasoning to understand problems and consider appropriate next steps.',
    'Apply knowledge carefully, recognising limits and seeking supervision when needed.',
  ],
  2: [
    'Find and interpret reliable scientific and clinical information.',
    'Assess evidence critically instead of relying on the first available answer.',
    'Use reflection and ongoing learning to improve future decisions.',
  ],
  3: [
    'Approach people with empathy, respect and attention to their individual needs.',
    'Consider health beyond the immediate clinical problem, including prevention and wellbeing.',
    'Recognise opportunities to advocate for patients and their communities.',
  ],
  4: [
    'Listen actively and communicate ideas in clear, accessible language.',
    'Adapt communication to the needs, concerns and backgrounds of others.',
    'Share information respectfully with peers and members of a healthcare team.',
  ],
  5: [
    'Contribute reliably to a shared goal and recognise the strengths of different team members.',
    'Use creative, evidence-informed thinking to identify practical improvements.',
    'Lead through initiative, clear communication, accountability and support for others.',
  ],
  6: [
    'Act with honesty, integrity and respect in academic and professional settings.',
    'Protect confidentiality and understand the importance of trust.',
    'Take responsibility for decisions, commitments and areas that need improvement.',
  ],
  7: [
    'Understand how people, services and resources connect across a health system.',
    'Recognise how teamwork, safety and efficient processes influence quality of care.',
    'Consider how system-level improvements can make care more accessible and effective.',
  ],
  8: [
    'Set meaningful learning goals and respond constructively to feedback.',
    'Maintain personal wellbeing and recognise when support is needed.',
    'Contribute to a learning culture and the ongoing development of the profession.',
  ],
  9: [
    'Respect the needs and experiences of people from different backgrounds.',
    'Consider health inequalities and the wider factors that influence health.',
    'Support prevention, community wellbeing and socially responsible practice.',
  ],
}

const reflectionParagraphs = [
  'During a group-based academic task, I worked with classmates to research a health-related topic and prepare a shared presentation. We needed to combine information from different sources, agree on the most relevant points and deliver one clear explanation. I helped clarify the shared objective, divide the work according to strengths and bring the separate contributions together.',
  'I felt motivated by the opportunity to work with others, but I was also aware that different working styles could make coordination difficult. I wanted the final work to be cohesive without overlooking anyone’s ideas. At times, I felt responsible for keeping the task moving, and I had to remind myself that collaboration meant listening as much as taking initiative.',
  'A strength of the experience was that sharing responsibilities allowed us to approach the topic from different perspectives. Agreeing on the main message helped the presentation become clearer. However, communication was not always consistent, and some parts needed extra time to combine. I could have clarified expectations and checked progress earlier rather than waiting until the final stages.',
  'This showed me that leadership is not simply assigning tasks or making decisions. It involves creating an environment in which people understand the goal, feel comfortable contributing and can rely on one another. Collaboration also creates room for innovation: when different viewpoints are considered, the group can identify a more useful way to explain a topic or solve a problem. Clear roles, realistic deadlines and regular communication make that creativity achievable.',
  'I learned that I can contribute by taking initiative while remaining open to feedback. I also recognised that a good outcome depends on the process, not only the final presentation. I need to be more deliberate about following up, addressing uncertainty early and making sure quieter team members have an opportunity to contribute.',
  'For my next group task, I will arrange a brief planning discussion, agree on one written objective and assign each task to a named person based on their strengths. I will set internal deadlines at least 48 hours before submission, keep a shared progress checklist and organise a midpoint check-in. I will invite each member to raise concerns, ask a peer or tutor for feedback afterwards and record two changes for the next project. I will also test any new idea against the available evidence, time and resources before recommending it.',
]

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return competencies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const competency = competencies.find((item) => item.slug === slug)

  if (!competency) {
    return { title: 'Competency not found' }
  }

  return {
    title: competency.title,
    description: competency.description,
  }
}

export default async function CompetencyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const index = competencies.findIndex((item) => item.slug === slug)

  if (index === -1) {
    notFound()
  }

  const competency = competencies[index]
  const Icon = competency.icon
  const isComplete = competency.number === 5
  const previous = competencies[index - 1]
  const next = competencies[index + 1]

  return (
    <>
      <SiteHeader />
      <main className="pb-24">
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-secondary/55 to-background">
          <div className="mx-auto max-w-5xl px-5 pb-14 pt-10 md:pb-20 md:pt-14">
            <Link
              href="/competencies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All competencies
            </Link>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-lg shadow-primary/15">
                <Icon className="size-8" aria-hidden="true" />
              </span>
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Competency {competency.number} of 9
                  </p>
                  {isComplete && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                      <CheckCircle2 className="size-3.5" aria-hidden="true" />
                      Complete
                    </span>
                  )}
                </div>
                <h1 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight text-primary md:text-6xl">
                  {competency.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {competency.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-14 px-5 pt-12 md:pt-16">
          <section aria-labelledby="domain-heading" className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Competency domain
              </p>
              <h2 id="domain-heading" className="mt-3 font-serif text-3xl font-semibold">
                What this competency means
              </h2>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <p className="leading-relaxed text-muted-foreground">
                {competency.number === 5
                  ? 'Working effectively with others, recognising opportunities to improve the way things are done, and taking responsibility for helping a team move towards a shared goal. In medicine, collaboration and thoughtful leadership support safer, more coordinated and more responsive care.'
                  : competency.description}
              </p>
              <ul className="mt-6 space-y-3">
                {focusAreas[competency.number].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {isComplete ? (
            <section id="reflection" aria-labelledby="reflection-heading">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Personal reflection
                </p>
                <h2 id="reflection-heading" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                  Learning through collaboration
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  A reflective account structured around Gibbs’ reflective cycle.
                </p>
              </div>
              <div className="mt-7 max-w-3xl space-y-5">
                {reflectionParagraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-base leading-8 text-foreground/85">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ) : (
            <section aria-labelledby="reflection-heading" className="rounded-3xl border border-dashed border-border bg-card/70 p-7 md:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Personal reflection
              </p>
              <h2 id="reflection-heading" className="mt-3 font-serif text-3xl font-semibold">
                Your reflection will go here
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                Use this space to document an experience, what you learned from it and how it
                shaped your development in this competency.
              </p>
            </section>
          )}

          <section aria-labelledby="evidence-heading">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Evidence portfolio
              </p>
              <h2 id="evidence-heading" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                Supporting evidence
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {isComplete
                  ? 'Photographs and certificates can be added here to support this reflection and document the experience.'
                  : 'Add relevant photographs, certificates or other supporting material as you develop this competency.'}
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-dashed border-border bg-card p-5">
                <div className="flex aspect-[16/9] flex-col items-center justify-center rounded-2xl bg-secondary/65 text-center">
                  <Camera className="size-8 text-primary/70" aria-hidden="true" />
                  <span className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Photo placeholder
                  </span>
                  <span className="mt-1 text-sm text-muted-foreground">Add your photographs here</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold">Activity photographs</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Space for images of the activity, teamwork, planning or presentation.
                </p>
              </div>

              <div className="rounded-3xl border border-dashed border-border bg-card p-5">
                <div className="flex aspect-[16/9] flex-col items-center justify-center rounded-2xl bg-secondary/65 text-center">
                  <FileBadge className="size-8 text-primary/70" aria-hidden="true" />
                  <span className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Document placeholder
                  </span>
                  <span className="mt-1 text-sm text-muted-foreground">Add certificate or evidence</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold">Certificates & documents</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Space for certificates, letters, presentation slides or feedback.
                </p>
              </div>
            </div>
          </section>

          <nav aria-label="Competency navigation" className="flex flex-col justify-between gap-4 border-t border-border pt-7 sm:flex-row">
            {previous ? (
              <Link
                href={`/competencies/${previous.slug}`}
                className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 hover:bg-secondary/40"
              >
                <ArrowLeft className="size-4 text-primary transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-muted-foreground">Previous competency</span>
                  <span className="font-medium">{previous.title}</span>
                </span>
              </Link>
            ) : <span />}
            {next ? (
              <Link
                href={`/competencies/${next.slug}`}
                className="group inline-flex items-center justify-end gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-right transition-colors hover:border-primary/40 hover:bg-secondary/40"
              >
                <span>
                  <span className="block text-xs text-muted-foreground">Next competency</span>
                  <span className="font-medium">{next.title}</span>
                </span>
                <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ) : <span />}
          </nav>

          <div className="rounded-3xl bg-secondary/60 p-6 text-center md:p-8">
            <Lightbulb className="mx-auto size-7 text-primary" aria-hidden="true" />
            <p className="mt-3 font-serif text-xl font-semibold">Building competency through practice</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Each experience is an opportunity to learn, reflect and keep developing as a future
              healthcare professional.
            </p>
            <Link
              href="/competencies"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:underline-offset-4"
            >
              Explore all competencies
              <Plus className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
