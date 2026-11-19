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
  'On 15 October 2026, I helped organize a stall at World Anatomy Day at my university, an event to help students explore the beauty of anatomy through displays and activities. Alongside my batchmates, I helped run a plank competition where participants held a plank for as long as they could while we explained the anatomy behind it all. I helped set up the whiteboard leaderboard for recording times, welcomed participants, and explained the activity and the anatomical model.',
  'Since it was my first university event, I felt excited but anxious. I worried about if people would come and if we would be ready. Preparing with my batchmates was fun, and it definitely helped us grow closer. It took a while to get going, but once we found our flow, plenty of people joined in and started competing against each other, and my nerves turned into relief. Explaining the activity and the anatomical model to strangers felt awkward at first, but with each person I gradually grew clearer and more confident. By the end, I felt happy and was glad that our effort had paid off.',
  'The best part of the whole was seeing participants enjoy the competition and the fact that more people participated than we expected. However, we did not set proper roles, so everyone was doing everything, and coordinating contributions during activities was difficult. We also began preparing only a few days beforehand, so everything felt rushed, and we had to run around gathering materials and making our poster.',
  'The event went well mostly because the team got along and everyone was willing to help. Preparing together was enjoyable and brought us closer, so even without set roles, people stepped in wherever something had to be done. The lack of defined roles happened because nobody was designated to coordinate, and we all assumed we shared the same understanding. None of us checked, including me. We moved straight into performing without properly agreeing on roles and expectations. Starting late made this worse, since we only had a few days to prepare, there was no time to plan properly or discuss who would do what.',
  'This experience showed me that teamwork depends on clear communication, listening, and shared responsibility, and that good organization needs planning and follow-up. I could have suggested defining roles and starting earlier and checking progress rather than assuming we all understood the plan.',
  'At my next event, I will start preparing at least one week ahead, list each task, and assign a named person and deadline. We will hold a planning meeting and rehearse explanations. On the day, I will use a checklist and conduct brief progress checks. Furthermore, after the event I will try to ask participants and teammates for feedback, hold a debrief, and record at least 3 changes for next time.',
]

const eventPhotos = [
  {
    src: '/world-anatomy-day/team-discussion.jpg',
    alt: 'Nandana working with classmates during a World Anatomy Day activity',
    title: 'Working as a team',
    caption: 'Collaborating with classmates while preparing and running the activity.',
    width: 2048,
    height: 1301,
  },
  {
    src: '/world-anatomy-day/event-team.jpg',
    alt: 'Students and faculty gathered for World Anatomy Day at Gulf Medical University',
    title: 'The World Anatomy Day team',
    caption: 'A group photograph with the students and faculty involved in the event.',
    width: 2048,
    height: 1366,
  },
  {
    src: '/world-anatomy-day/anatomy-model.jpg',
    alt: 'Nandana and classmates presenting an anatomical model',
    title: 'Explaining the anatomical model',
    caption: 'Using the anatomical model to help participants understand the activity.',
    width: 2048,
    height: 1364,
  },
  {
    src: '/world-anatomy-day/whiteboard-activity.jpg',
    alt: 'Nandana writing on the activity whiteboard during World Anatomy Day',
    title: 'The activity leaderboard',
    caption: 'Setting up and writing on the whiteboard used to record participants’ plank times.',
    width: 2048,
    height: 1365,
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
                        className={photoIndex === 1 ? 'mx-auto h-auto max-h-[640px] w-auto max-w-full rounded-2xl object-contain' : 'h-auto w-full rounded-2xl object-contain'}
                        quality={95}
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
                <div className="mt-7 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-sm">
                  <iframe
                    src="/world-anatomy-day/certificate.pdf"
                    title="Certificate of Appreciation awarded to Nandana Praveen for organising World Anatomy Day"
                    className="h-[72vh] min-h-[520px] w-full rounded-2xl bg-white"
                  />
                  <a
                    href="/world-anatomy-day/certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-4 text-sm font-semibold text-primary hover:underline"
                  >
                    <FileBadge className="size-4" aria-hidden="true" />
                    Open original certificate PDF
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
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
