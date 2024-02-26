'use server'

import env from '../env.json'
import { cookies } from 'next/headers'

export const getUserLanguage: (email: string) => Promise<null | { lang: 'ru' | 'en' }> = async (email) => {
    try {
        const cookiesStore = cookies()
        if (cookiesStore.has('lang')) return { lang: cookiesStore.get('lang')?.value }
        if (!email) return null
        const res = await fetch(`${env.SERVER_URL}/language`)

        const obj = await res.json()

        cookiesStore.set('lang', obj.lang)

        return obj
    } catch (err) {
        console.error(err)
        return null
    }
}
