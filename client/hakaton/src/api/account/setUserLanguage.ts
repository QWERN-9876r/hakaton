'use server'

import env from '../env.json'
import { cookies } from 'next/headers'

export const setUserLanguage: (email: string, lang: 'ru' | 'en') => Promise<boolean> = async (email, lang) => {
    try {
        const cookiesStore = cookies()
        const res = await fetch(`${env.SERVER_URL}/setLanguage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, lang }),
        })

        if (res.ok) {
            cookiesStore.set('lang', lang)
        }

        return res.ok
    } catch (err) {
        console.error(err)
        return false
    }
}
