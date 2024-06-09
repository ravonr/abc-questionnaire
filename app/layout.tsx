import localFont from '@next/font/local'
import type { Metadata } from 'next'

import './globals.css'

const andale = localFont({
  src: [
    {
      path: '../public/fonts/andale-mono.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-andale',
})

const editorial = localFont({
  src: [
    {
      path: '../public/fonts/editorial-new-regular.woff',
      style: 'normal',
    },
  ],
  variable: '--font-editorial',
})

const mondwest = localFont({
  src: [
    {
      path: '../public/fonts/mondwest-regular.woff',
      style: 'normal',
    },
  ],
  variable: '--font-mondwest',
})

const montreal = localFont({
  src: [
    {
      path: '../public/fonts/neue-montreal-mono-regular.woff',
      style: 'normal',
    },
  ],
  variable: '--font-montreal',
})

export const metadata: Metadata = {
  title: 'ABC Questionnaire',
  description:
    'A glossary for an anti-colonial Black feminist critical media ecology.',
  metadataBase: new URL('https://abcglossary.xyz'),
  icons: {
    icon: `${process.env.NEXT_ENV === 'development' ? 'http://localhost:3000/' : 'https://abcglossary.xyz/'}/favicon-meta-share.png`,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  category: 'technology',
  keywords: ['glossary', 'anti-colonial', 'Black feminist', 'media ecology'],
  openGraph: {
    title: 'ABC Questionnaire',
    description:
      'A glossary for an anti-colonial Black feminist critical media ecology.',
    url: 'https://abcglossary.xyz',
    siteName: 'ABC Questionnaire',
    images: [
      {
        url: `${process.env.NEXT_ENV === 'development' ? 'http://localhost:3000/' : 'https://abcglossary.xyz/'}/favicon-meta-share.png`,
        width: 800,
        height: 600,
        alt: 'ABC Questionnaire',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABC Questionnaire',
    description:
      'A glossary for an anti-colonial Black feminist critical media ecology.',
    siteId: '',
    creator: '',
    creatorId: '',
    images: [''], // Must be an absolute URL
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="en" className="bg-purple">
    <body
      className={`${editorial.variable} ${mondwest.variable} ${montreal.variable} ${andale.variable}`}
    >
      {children}
    </body>
  </html>
)
export default RootLayout
