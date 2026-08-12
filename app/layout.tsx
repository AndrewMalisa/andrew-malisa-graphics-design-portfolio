import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Fraunces } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  title: 'Andrew Malisa — Graphic Designer',
  description:
    'Andrew Malisa is a graphic designer based in Dar es Salaam, Tanzania, creating posters, promotional materials and visual communication for organizations, events and businesses.',
  generator: 'v0.app',
  keywords: [
    'Andrew Malisa',
    'Graphic Designer',
    'Poster Design',
    'Visual Communication',
    'Branding',
    'Dar es Salaam',
    'Tanzania',
  ],
  openGraph: {
    title: 'Andrew Malisa — Graphic Designer',
    description:
      'Selected poster and visual design work created for university organizations, associations and institutions.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1712',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
