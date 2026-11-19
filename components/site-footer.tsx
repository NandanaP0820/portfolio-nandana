import { site } from '@/lib/site'
import { EcgLine } from '@/components/med-animations'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <EcgLine className="h-8 text-primary/40" />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {'© '}
          {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
