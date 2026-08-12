import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { WorkGallery } from '@/components/work-gallery'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <WorkGallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
