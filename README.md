# BTC Design Studio

A responsive architecture portfolio and WhatsApp enquiry website built with Next.js App Router, React, TypeScript, Tailwind CSS, and Zod.

## Development

Requires Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` before release. `npm start` serves the production build.

## Project structure

```text
src/
  app/
    (site)/           Public pages and shared navigation/footer layout
      projects/       Portfolio index and statically generated project details
      services/       Services index and four service-detail pages
      process/        Four-step design workflow
      faq/            Grouped questions about design and consultations
      consultation/   Dedicated consultation request form
    globals.css       Theme, shared styles, focus states, reduced motion
    layout.tsx        Root HTML and metadata base
    robots.ts         Robots metadata
    sitemap.ts        Page and project URLs
  components/
    common/           Shared buttons, headings, container, service grid
    forms/            Unified enquiry and consultation form
    home/             Homepage sections
    layout/           Header, footer, shared navigation links, mobile menu
    projects/         Project cards and accessible manual gallery
  data/               Projects, services, process, FAQ, testimonials
  lib/                Site details, navigation, metadata, enquiry validation
  types/              Project types
public/projects/      Optimized WebP assets, maximum 1600px on the long edge
```

The `(site)` route group shares the site shell without changing public URLs. Business details are maintained in `src/lib/constants.ts`; shared content lives in `src/data/`.

## SEO and production domain

The temporary domain is `https://btcdesignstudio.example`, a reserved dummy address. Copy `.env.example` to `.env.local` and replace `NEXT_PUBLIC_SITE_URL` with the real public HTTPS origin before deployment. Restart development or rebuild production after changing it.

All pages have unique titles, descriptions, canonical URLs, Open Graph and Twitter metadata. `/opengraph-image` generates a branded 1200×630 share card. Project pages include design imagery, and the sitemap lists every public page with project image URLs.

JSON-LD describes the studio and website using existing business details. Detail pages add breadcrumbs and Service or CreativeWork entities. No ratings, opening hours, street address, or credentials are invented.

The dummy domain and localhost are intentionally `noindex` with crawling blocked. Configuring a real public domain enables indexing and crawling automatically. Before launch, check `/robots.txt`, `/sitemap.xml`, and canonical tags; submit the real sitemap in Google Search Console. Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` if an HTML verification tag is required.

Implementation references: [Next.js metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) and [Google business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## Enquiries

The contact page switches between a project enquiry and a consultation request. Zod validates the form and a user action opens a prefilled WhatsApp message. A manual WhatsApp link remains available if the popup is blocked. Visitors must send the message themselves. A consultation date is a preference, not a confirmed booking.

There is no server-side lead storage, email delivery, or appointment scheduler. Unused API stubs were removed because they previously logged personal data and reported success without delivering anything.

## Content and assets

Update project descriptions, locations, images, and slugs in `src/data/projects.ts`. Each unique WebP is stored once and can be referenced by more than one project. Gallery images keep their original aspect ratio; cover images crop to fit cards.

Before launch, verify the business contact details, portfolio attribution, and existing testimonials with the studio. The site uses a local system font stack and does not require remote font downloads.

The homepage uses a light portfolio theme with a full-width architectural hero, studio introduction, selected projects, services, and process overview. Navigation and the sitemap include the new pages.
