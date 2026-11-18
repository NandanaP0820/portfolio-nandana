import { Briefcase, FlaskConical, GraduationCap, Presentation } from 'lucide-react'

const sections = [
  { id: 'research', title: 'Research', icon: FlaskConical },
  { id: 'experience', title: 'Clinical Experience', icon: Briefcase },
  { id: 'education', title: 'Education', icon: GraduationCap },
  { id: 'presentations', title: 'Presentations', icon: Presentation },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-3xl scroll-mt-24 px-5 text-center">
      <h2 id="about-title" className="font-serif text-4xl font-semibold text-primary">
        About Me
      </h2>
      <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">Coming soon.</p>
    </section>
  )
}

export function ComingSoonSections() {
  return (
    <section id="research" aria-labelledby="portfolio-title" className="mx-auto max-w-6xl scroll-mt-24 px-5">
      <h2 id="portfolio-title" className="text-center font-serif text-4xl font-semibold text-primary">
        Portfolio
      </h2>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map(({ id, title, icon: Icon }) => (
          <li
            key={id}
            id={id === 'research' ? undefined : id}
            className="rounded-3xl border-2 border-dashed border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
          >
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Icon className="size-7" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3>
            <p className="mt-2 inline-block rounded-full bg-accent/40 px-3 py-1 text-sm font-medium text-accent-foreground">
              Coming soon
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
