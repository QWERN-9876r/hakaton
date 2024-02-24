import env from '../env.json'

export type Currency = 'RUB' | 'EUR' | 'CYN' | 'USD'

export const getUserCurrency: (email: string) => Promise<{ currency: Currency } | null> = async (email) => {
    try {
        const res = await fetch(`${env.SERVER_URL}/currency?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res.json()
    } catch (err) {
        console.error(err)
        return null
    }
}
