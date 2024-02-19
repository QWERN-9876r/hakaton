'use server'

import { cookies } from 'next/headers'
import { isValidEmail } from './helpers'

export interface Data {
    email: string
    password: string
}
export type AuthFunction = (
    data: Data,
) => Promise<{ ok: true; email: string; id: string; key: string } | { ok: false; error: string }>

export const registration: AuthFunction = async (data) => {
    if (data.password.length < 8) {
        return { ok: false, error: 'Password must be at least 8 characters long' }
    }
    if (!isValidEmail(data.email)) {
        return { ok: false, error: 'Invalid email' }
    }
    try {
        const resInJson = await fetch('http://192.168.1.83:3001/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const res = await resInJson.json()
        cookies().set('id', res.id)

        return res
    } catch (err) {
        console.error(err)
        return { ok: false, error: 'Ivalid response' }
    }
}
