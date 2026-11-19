import type { Metadata } from 'next'
import Image from 'next/image'
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

const reflectionParagraphs = [
  'On 15 October 2026, I helped organise World Anatomy Day at Gulf Medical University’s College of Medicine. The event invited students to explore anatomy through displays and interactive activities. I worked with classmates, contributed to the whiteboard activity and took part in presenting an anatomical model. I also supported the team as we prepared activities and welcomed participants.',
  'I felt excited to be involved, but I also understood that organising an event required responsibility and coordination. I wanted participants to feel included and to understand the activities. Speaking and contributing in front of others pushed me to be more confident, prepared and clear in how I communicated.',
  'One of the most rewarding parts was seeing anatomy explained through visuals, discussion and a physical model. Sharing tasks meant we could help one another and make the activity more engaging. The photographs show me working with the group, writing on the whiteboard and presenting the model. A challenge was keeping everyone’s contributions coordinated while activities were taking place.',
  'This experience showed me that leadership is more than giving instructions. It involves noticing what needs to be done, listening, communicating clearly and taking responsibility for a shared outcome. Collaboration allowed us to use different strengths, while the whiteboard and anatomical model made learning more interactive. I saw how a simple creative approach can help participants connect with anatomical concepts.',
  'I learned that I can contribute through initiative and teamwork, but that good organisation also needs clear planning and follow-up. I should make responsibilities clear early and check progress rather than assume everyone has the same understanding. Receiving a Certificate of Appreciation for organising the event was encouraging and recognised the effort behind the activity.',
  'For my next event, I will prepare a written run sheet at least one week ahead, list each task, and assign a named person and deadline. I will hold a planning meeting, confirm that models, display materials and stationery are ready, and rehearse the explanations with the team. On the day, I will use a checklist and brief progress checks. Afterwards, I will ask at least three participants and my teammates for feedback, hold a short debrief, and record three changes to apply next time.',
]

const eventPhotos = [
  {
    src: '/world-anatomy-day/team-discussion.webp',
    alt: 'Nandana working with classmates during a World Anatomy Day activity',
    title: 'Working as a team',
    caption: 'Collaborating with classmates and contributing ideas during the activity.',
    width: 850,
    height: 540,
  },
  {
    src: '/world-anatomy-day/event-team.webp',
    alt: 'Students and faculty gathered for World Anatomy Day at Gulf Medical University',
    title: 'The World Anatomy Day team',
    caption: 'A group photograph with the students and faculty involved in the event.',
    width: 850,
    height: 567,
  },
  {
    src: '/world-anatomy-day/anatomy-model.webp',
    alt: 'Nandana and classmates presenting an anatomical model',
    title: 'Interactive anatomy learning',
    caption: 'Taking part in presenting an anatomical model as a visual learning resource.',
    width: 850,
    height: 566,
  },
  {
    src: '/world-anatomy-day/whiteboard-activity.webp',
    alt: 'Nandana writing on the activity whiteboard during World Anatomy Day',
    title: 'Contributing to the activity',
    caption: 'Using the whiteboard to help communicate and organise information.',
    width: 850,
    height: 567,
  },
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
          {isComplete ? (
            <>
              <section id="reflection" aria-labelledby="reflection-heading">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Personal reflection
                  </p>
                  <h2 id="reflection-heading" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                    Learning through collaboration
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Reflecting on my role in organising World Anatomy Day at Gulf Medical University.
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

              <section aria-labelledby="event-photos-heading">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Event gallery
                  </p>
                  <h2 id="event-photos-heading" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                    World Anatomy Day
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Moments from the event, showing teamwork, interactive anatomy learning and my contribution to the activities.
                  </p>
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {eventPhotos.map((photo, photoIndex) => (
                    <figure
                      key={photo.src}
                      className={photoIndex === 1 ? 'overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-sm sm:col-span-2' : 'overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-sm'}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes={photoIndex === 1 ? '(max-width: 640px) 100vw, 90vw' : '(max-width: 640px) 100vw, 45vw'}
                        className={photoIndex === 1 ? 'h-auto max-h-[560px] w-full rounded-2xl object-cover' : 'h-auto w-full rounded-2xl object-cover'}
                      />
                      <figcaption className="px-2 pb-2 pt-4">
                        <h3 className="font-serif text-xl font-semibold">{photo.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{photo.caption}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section aria-labelledby="certificate-heading">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Recognition
                  </p>
                  <h2 id="certificate-heading" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                    Certificate of Appreciation
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Awarded to Nandana Praveen by Gulf Medical University’s College of Medicine for organising World Anatomy Day.
                  </p>
                </div>
                <a
                  href="/world-anatomy-day/certificate.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Open the World Anatomy Day Certificate of Appreciation"
                >
                  <Image
                    src="/world-anatomy-day/certificate.webp"
                    alt="Certificate of Appreciation awarded to Nandana Praveen for organising World Anatomy Day by Gulf Medical University College of Medicine"
                    width={1049}
                    height={742}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="h-auto w-full rounded-2xl"
                  />
                  <span className="flex items-center justify-center gap-2 px-3 py-4 text-sm font-semibold text-primary">
                    <FileBadge className="size-4" aria-hidden="true" />
                    View certificate image
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </a>
              </section>
            </>
          ) : (
            <>
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

              <section aria-labelledby="evidence-heading">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Evidence portfolio
                  </p>
                  <h2 id="evidence-heading" className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                    Supporting evidence
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Add relevant photographs, certificates or other supporting material as you develop this competency.
                  </p>
                </div>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl border border-dashed border-border bg-card p-5">
                    <div className="flex aspect-[16/9] flex-col items-center justify-center rounded-2xl bg-secondary/65 text-center">
                      <Camera className="size-8 text-primary/70" aria-hidden="true" />
                      <span className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Photo placeholder</span>
                      <span className="mt-1 text-sm text-muted-foreground">Add your photographs here</span>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-dashed border-border bg-card p-5">
                    <div className="flex aspect-[16/9] flex-col items-center justify-center rounded-2xl bg-secondary/65 text-center">
                      <FileBadge className="size-8 text-primary/70" aria-hidden="true" />
                      <span className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Document placeholder</span>
                      <span className="mt-1 text-sm text-muted-foreground">Add certificate or evidence</span>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

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
