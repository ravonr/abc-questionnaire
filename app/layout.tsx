import type { Metadata } from 'next'
import localFont from '@next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
        className={`${editorial.variable} ${mondwest.variable} ${montreal.variable} bg-purple p-8`}
      >
        {children}
      </body>
    </html>
  )
}
