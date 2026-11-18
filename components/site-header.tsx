import Link from 'next/link'
import { site } from '@/lib/site'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/competencies', label: 'Competencies' },
  { href: '/#research', label: 'Research' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
      >
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
          {site.name}
        </Link>
        <ul className="flex items-center gap-1 text-sm sm:gap-2">
          {links.map((link) => (
            <li key={link.href} className={link.label === 'Competencies' ? '' : 'hidden sm:block'}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
