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
  description: '',
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
