'use server'

import env from '../env.json'
import { isValidEmail, sha256 } from './helpers'

export interface Data {
    email: string
    password: string
}

export type ErrorMessage =
    | 'Password must be at least 8 characters long'
    | 'Invalid email'
    | 'Ivalid response'
    | 'Email already in use'
    | 'falsche email oder password'

export type AuthFunction = (
    data: Data,
) => Promise<{ ok: true; email: string; id: string; key: string; name?: string } | { ok: false; error: ErrorMessage }>

export const registration: AuthFunction = async (data) => {
    if (data.password.length < 8) {
        return { ok: false, error: 'Password must be at least 8 characters long' }
    }
    if (!isValidEmail(data.email)) {
        return { ok: false, error: 'Invalid email' }
    }
    try {
        const resInJson = await fetch(`${env.SERVER_URL}/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const res = await resInJson.json()
        const key = sha256(JSON.stringify(data))

        return { ...res, key }
    } catch (err) {
        console.error(err)
        return { ok: false, error: 'Ivalid response' }
    }
}
