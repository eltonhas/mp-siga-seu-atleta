import './globals.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Darker_Grotesque } from 'next/font/google'

import { Header } from './components/header'

const darkerGrostesque = Darker_Grotesque({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Siga seu atleta',
  description: 'Conheça os atletas dos jogos olimpicos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${darkerGrostesque.className} flex h-screen w-full flex-col items-center bg-bg-color text-neutral-900 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
