import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { MainLayout } from '@/standartLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Профиль - Family Wallet',
  description: 'Family Wallet',
}

export default MainLayout