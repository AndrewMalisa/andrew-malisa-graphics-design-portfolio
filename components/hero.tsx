import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile, featuredPosters } from '@/lib/portfolio-data'

export function Hero() {
  const [posterA, posterB] = featuredPosters

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Text */}
        <div className="lg:col-span-7">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {profile.location}
          </p>

          <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-2xl font-medium text-primary sm:text-3xl">{profile.title}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
            {profile.heroDescription}
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground/80 text-pretty">
            {profile.heroSupporting}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work
              <ArrowRight className="size-4" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            {profile.specialties.join('  ·  ')}
          </p>
        </div>

        {/* Poster visual treatment */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto grid max-w-md grid-cols-5 gap-4">
            {posterA ? (
              <div className="col-span-3 overflow-hidden rounded-lg border border-border shadow-2xl">
                <img
                  src={posterA.image || '/placeholder.svg'}
                  alt={`Poster designed for ${posterA.organizationFull}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
            {posterB ? (
              <div className="col-span-2 mt-10 overflow-hidden rounded-lg border border-border shadow-2xl">
                <img
                  src={posterB.image || '/placeholder.svg'}
                  alt={`Poster designed for ${posterB.organizationFull}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
