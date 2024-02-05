import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer/footer'
import { Providers } from '@/components/providers/providers'
import styles from './page.module.css'
// import { MetaFooter } from '@/components/footer/metaFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Главная - Family Wallet',
  description: 'Family Wallet',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${inter.className} dark`} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}