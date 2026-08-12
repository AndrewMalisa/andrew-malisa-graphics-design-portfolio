'use client'

import { useMemo, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { organizations, allPosters, type PosterWithOrg } from '@/lib/portfolio-data'
import { Lightbox } from '@/components/lightbox'

type Filter = 'all' | string

export function WorkGallery() {
  const [filter, setFilter] = useState<Filter>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const visiblePosters = useMemo<PosterWithOrg[]>(
    () => (filter === 'all' ? allPosters : allPosters.filter((p) => p.slug === filter)),
    [filter],
  )

  const selectFilter = (next: Filter, scroll = false) => {
    setFilter(next)
    if (scroll && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* SELECTED WORK ---------------------------------------------------- */}
      <section id="work" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={galleryRef} className="max-w-2xl">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Selected Work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              A selection of posters and visual designs created across different organizations,
              events and initiatives.
            </p>
          </div>

          {/* Filter bar */}
          <div className="no-scrollbar -mx-4 mt-8 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="flex w-max gap-2 sm:flex-wrap">
              <FilterChip active={filter === 'all'} onClick={() => selectFilter('all')}>
                All
              </FilterChip>
              {organizations.map((org) => (
                <FilterChip
                  key={org.slug}
                  active={filter === org.slug}
                  onClick={() => selectFilter(org.slug)}
                >
                  {org.name}
                </FilterChip>
              ))}
            </div>
          </div>

          {/* Masonry grid */}
          <div className="masonry mt-10 columns-1 sm:columns-2 lg:columns-3">
            {visiblePosters.map((poster, i) => {
              const globalIndex = visiblePosters.indexOf(poster)
              return (
                <button
                  key={`${poster.image}-${i}`}
                  type="button"
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="group relative block w-full overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:border-primary/50"
                >
                  <img
                    src={poster.image || '/placeholder.svg'}
                    alt={`${poster.title} — poster designed for ${poster.organizationFull}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex w-full items-end justify-between gap-3 p-4">
                      <div>
                        <p className="text-sm font-medium text-primary">{poster.organization}</p>
                        <p className="text-sm text-foreground">
                          {poster.title}
                          {poster.year ? (
                            <span className="text-muted-foreground"> · {poster.year}</span>
                          ) : null}
                        </p>
                      </div>
                      <ArrowUpRight className="size-5 shrink-0 text-foreground" />
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONS ---------------------------------------------------- */}
      <section id="organizations" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Organizations I&apos;ve Designed For
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Selected design work created for university organizations, associations, schools and
              student initiatives.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {organizations.map((org) => {
              const cover = org.posters[0]
              return (
                <button
                  key={org.slug}
                  type="button"
                  onClick={() => selectFilter(org.slug, true)}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-primary/50"
                >
                  <div className="size-16 shrink-0 overflow-hidden rounded-md border border-border">
                    {cover ? (
                      <img
                        src={cover.image || '/placeholder.svg'}
                        alt=""
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{org.name}</p>
                    <p className="truncate text-sm text-muted-foreground">{org.fullName}</p>
                    <p className="mt-1 text-xs text-muted-foreground/80">
                      {org.posters.length} {org.posters.length === 1 ? 'poster' : 'posters'}
                    </p>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {lightboxIndex !== null ? (
        <Lightbox
          posters={visiblePosters}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
      }`}
    >
      {children}
    </button>
  )
}
