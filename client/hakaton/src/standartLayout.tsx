import { Inter } from 'next/font/google'
import { Providers } from './components/providers/providers'
import { Footer } from './components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </head>
            <body className={`${inter.className} dark`}>
                <Providers>
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
