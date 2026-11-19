import { Briefcase, FlaskConical, Presentation } from 'lucide-react'

const sections = [
  { id: 'research', title: 'Research', icon: FlaskConical },
  { id: 'experience', title: 'Clinical Experience', icon: Briefcase },
  { id: 'presentations', title: 'Presentations', icon: Presentation },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-3xl scroll-mt-24 px-5">
      <h2 id="about-title" className="text-center font-serif text-4xl font-semibold text-primary">
        About Me
      </h2>
      <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
        <p>
          I’m Nandana Praveen, a Year 1 MD student at Gulf Medical University with a strong interest
          in medicine and in the human side of patient care. I am still early in my training, but I
          am eager to learn, to reflect honestly on my experiences, and to grow into a physician who
          is both knowledgeable and compassionate.
        </p>
        <p>
          Outside my studies, I practice classical dance, which has taught me discipline, patience,
          and the value of consistent practice. It also gives me a creative outlet and helps me stay
          balanced during a demanding course like MD.
        </p>
        <p>
          This portfolio brings together my experiences, reflections, and progress across the nine
          competencies. It is a record of where I am now and a guide for where I want to improve.
        </p>
      </div>
    </section>
  )
}

export function ComingSoonSections() {
  return (
    <section id="research" aria-labelledby="portfolio-title" className="mx-auto max-w-6xl scroll-mt-24 px-5">
      <h2 id="portfolio-title" className="text-center font-serif text-4xl font-semibold text-primary">
        Portfolio
      </h2>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
