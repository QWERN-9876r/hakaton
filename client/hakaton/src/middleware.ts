export { default } from 'next-auth/middleware'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'
import { Api } from './api/main'

let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en', 'ru']
let defaultLocale = 'en'

async function getLeng(languages: string[], locales: string[], defaultLocale: string) {
    const api = new Api()
    const res = await api.getUserLanguage('')

    return res ? res.lang : match(languages, locales, defaultLocale)
}

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.includes('api')) return
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    if (pathnameHasLocale) return

    const locale = await getLeng(languages, locales, defaultLocale)

    request.nextUrl.pathname = `/${locale}${pathname}`

    return Response.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/profile',
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}
