// ---------------------------------------------------------------------------
// Centralized portfolio data.
//
// To add a poster: drop the image into /public/posters/<slug>/ and add an
// entry to the matching organization's `posters` array below. Nothing else
// needs to change — every component reads from this file.
// ---------------------------------------------------------------------------

export type Orientation = 'portrait' | 'landscape' | 'square'

export interface Poster {
  /** Local image path, e.g. /posters/coict/poster-01.png */
  image: string
  /** Poster / event title. Use a neutral label like "Poster Design" if unknown. */
  title: string
  /** Year, if known. Leave empty otherwise. */
  year?: string
  /** Optional short description shown in the lightbox. */
  description?: string
  /** Helps the grid lay out mixed dimensions cleanly. */
  orientation?: Orientation
}

export interface Organization {
  /** Short code shown in filters, e.g. "CoICT" */
  name: string
  /** Full organization name */
  fullName: string
  /** URL-safe slug, also the image folder name */
  slug: string
  posters: Poster[]
}

/** Flattened poster with its parent organization attached. */
export interface PosterWithOrg extends Poster {
  organization: string
  organizationFull: string
  slug: string
}

export const profile = {
  name: 'Andrew Malisa',
  title: 'Graphic Designer',
  specialties: ['Poster Design', 'Visual Communication', 'Branding', 'Digital Design'],
  location: 'Dar es Salaam, Tanzania',
  email: 'andrewasson95@gmail.com',
  phone: '+255 767 561 957',
  phoneHref: '+255767561957',
  whatsapp: '255767561957',
  linkedin: 'https://www.linkedin.com/',
  cvUrl: '/andrew-malisa-cv.pdf',
  heroDescription:
    'Graphic designer focused on creating engaging posters, promotional materials and visual communication for organizations, events and businesses.',
  heroSupporting:
    'Selected visual work created for university organizations, associations and institutions.',
  aboutText:
    "I'm a graphic designer based in Dar es Salaam, Tanzania, with experience creating posters, promotional materials and visual communication for organizations, events and businesses. My approach combines strong visual hierarchy, clear communication and attention to detail.",
}

export const skills: string[] = [
  'Poster Design',
  'Social Media Graphics',
  'Event Graphics',
  'Visual Communication',
  'Branding',
  'Typography',
  'Layout Design',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
]

export const organizations: Organization[] = [
  {
    name: 'CoICT',
    fullName: 'College of Information and Communication Technologies',
    slug: 'coict',
    posters: [
      { image: '/posters/coict/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/coict/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/coict/poster-03.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
  {
    name: 'SoE',
    fullName: 'School of Economics',
    slug: 'soe',
    posters: [
      { image: '/posters/soe/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/soe/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
  {
    name: 'DUEA',
    fullName: 'Dar es Salaam University Economics Association',
    slug: 'duea',
    posters: [
      { image: '/posters/duea/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/duea/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/duea/poster-03.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
  {
    name: 'DARUSO',
    fullName: 'Dar es Salaam University Students Organisation',
    slug: 'daruso',
    posters: [
      { image: '/posters/daruso/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/daruso/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
  {
    name: 'UDIAA',
    fullName: 'UDIAA',
    slug: 'udiaa',
    posters: [
      { image: '/posters/udiaa/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/udiaa/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
  {
    name: 'DUFA',
    fullName: 'DUFA',
    slug: 'dufa',
    posters: [
      { image: '/posters/dufa/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/dufa/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
  {
    name: 'SoED',
    fullName: 'School of Education',
    slug: 'soed',
    posters: [
      { image: '/posters/soed/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/soed/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
  {
    name: 'CoHU',
    fullName: 'College of Humanities',
    slug: 'cohu',
    posters: [
      { image: '/posters/cohu/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/cohu/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
  {
    name: 'IFMSO',
    fullName: 'IFMSO',
    slug: 'ifmso',
    posters: [
      { image: '/posters/ifmso/poster-01.png', title: 'Poster Design', orientation: 'portrait' },
      { image: '/posters/ifmso/poster-02.png', title: 'Poster Design', orientation: 'portrait' },
    ],
  },
]

/** All posters flattened, each carrying its organization metadata. */
export const allPosters: PosterWithOrg[] = organizations.flatMap((org) =>
  org.posters.map((poster) => ({
    ...poster,
    organization: org.name,
    organizationFull: org.fullName,
    slug: org.slug,
  })),
)

/** A curated subset used for the "Selected Work" hero grid. */
export const featuredPosters: PosterWithOrg[] = [
  allPosters.find((p) => p.slug === 'coict' && p.image.endsWith('poster-01.png')),
  allPosters.find((p) => p.slug === 'duea' && p.image.endsWith('poster-01.png')),
  allPosters.find((p) => p.slug === 'daruso' && p.image.endsWith('poster-01.png')),
  allPosters.find((p) => p.slug === 'dufa' && p.image.endsWith('poster-01.png')),
  allPosters.find((p) => p.slug === 'cohu' && p.image.endsWith('poster-01.png')),
  allPosters.find((p) => p.slug === 'soe' && p.image.endsWith('poster-01.png')),
].filter(Boolean) as PosterWithOrg[]
