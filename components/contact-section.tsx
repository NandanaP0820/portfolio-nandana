'use client'

import { type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { site } from '@/lib/site'

const inputClass =
  'w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40'

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl scroll-mt-24 px-5">
      <div className="grid gap-10 rounded-[2rem] bg-secondary/60 p-8 md:grid-cols-[1fr_1.3fr] md:p-12">
        <div>
          <h2 id="contact-title" className="font-serif text-4xl font-semibold text-primary">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            For collaborations, opportunities, or just a friendly hello, drop me a message.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
          >
            <Mail className="size-5" aria-hidden="true" />
            {site.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Name
              <input name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="How can I help?"
              className={`${inputClass} resize-none`}
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Send Message
            <Send className="size-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
