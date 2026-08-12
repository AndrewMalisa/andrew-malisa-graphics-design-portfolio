'use client'

import { useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { PosterWithOrg } from '@/lib/portfolio-data'

interface LightboxProps {
  posters: PosterWithOrg[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ posters, index, onClose, onNavigate }: LightboxProps) {
  const poster = posters[index]

  const goNext = useCallback(() => {
    onNavigate((index + 1) % posters.length)
  }, [index, posters.length, onNavigate])

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + posters.length) % posters.length)
  }, [index, posters.length, onNavigate])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, goNext, goPrev])

  if (!poster) return null

  return (
    <div
      className="fixed inset-0 z-100 flex flex-col bg-background/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${poster.organization} poster viewer`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="min-w-0">
          <p className="text-sm font-medium tracking-wide text-primary">{poster.organization}</p>
          <p className="truncate text-xs text-muted-foreground">{poster.organizationFull}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Image stage */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 sm:px-16">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous poster"
          className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-secondary sm:left-4"
        >
          <ChevronLeft className="size-5" />
        </button>

        <img
          key={poster.image}
          src={poster.image || '/placeholder.svg'}
          alt={`${poster.title} — poster designed for ${poster.organizationFull}`}
          className="max-h-full max-w-full object-contain shadow-2xl duration-300 animate-in fade-in"
        />

        <button
          type="button"
          onClick={goNext}
          aria-label="Next poster"
          className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-secondary sm:right-4"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* Caption */}
      <div className="px-4 pb-6 text-center sm:px-6">
        <h3 className="font-serif text-lg text-foreground">
          {poster.title}
          {poster.year ? <span className="text-muted-foreground"> · {poster.year}</span> : null}
        </h3>
        {poster.description ? (
          <p className="mx-auto mt-1 max-w-xl text-sm text-muted-foreground text-pretty">
            {poster.description}
          </p>
        ) : null}
        <p className="mt-2 text-xs text-muted-foreground">
          {index + 1} / {posters.length}
        </p>
      </div>
    </div>
  )
}
