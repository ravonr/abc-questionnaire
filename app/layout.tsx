import type { Metadata } from 'next'
import localFont from '@next/font/local'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${editorial.variable} ${mondwest.variable} ${montreal.variable} ${andale.variable} bg-purple p-8`}
      >
        {children}
      </body>
    </html>
  )
}
