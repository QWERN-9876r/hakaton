import env from '../env.json'
import { isValidEmail, sha256 } from './helpers'
import { AuthFunction } from './registration'

export const authorization: AuthFunction = async (data) => {
    if (data.password.length < 8) {
        return { ok: false, error: 'Password must be at least 8 characters long' }
    }
    if (!isValidEmail(data.email)) {
        return { ok: false, error: 'Invalid email' }
    }
    const key = sha256(JSON.stringify(data))

    try {
        const resInJson = await fetch(`${env.SERVER_URL}/signIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key }),
        })
        const res = await resInJson.json()

        return { ...res, key }
    } catch (err) {
        console.error(err)
        return { ok: false, error: 'Ivalid response' }
    }
}
