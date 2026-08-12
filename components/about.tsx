import { profile, skills } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              About
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              {profile.aboutText}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
