import env from '../env.json'

export const changeUserCurrency = async (email: string, currency: string) => {
    try {
        const res = await fetch(`${env.SERVER_URL}/changeUserCurrency`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, currency }),
        })

        return res.ok
    } catch (err) {
        console.error(err)
        return false
    }
}
