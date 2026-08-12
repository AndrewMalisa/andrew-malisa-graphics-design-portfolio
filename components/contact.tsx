import { Mail, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const items = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: 'WhatsApp',
      value: profile.phone,
      href: `https://wa.me/${profile.whatsapp}`,
      icon: MessageCircle,
    },
    {
      label: 'Location',
      value: profile.location,
      href: undefined,
      icon: MapPin,
    },
  ]

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Available for freelance and full-time graphic design opportunities. Reach out by
            email or WhatsApp, or send a message directly.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="truncate font-medium text-foreground">{item.value}</p>
                </div>
              </>
            )

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  {content}
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              )
            }

            return (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
