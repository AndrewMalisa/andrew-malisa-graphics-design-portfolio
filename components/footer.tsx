import { profile } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-foreground"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  )
}
