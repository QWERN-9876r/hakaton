import env from '../env.json'
export const createFamily = async (email: string) => {
    try {
        const res = await fetch(`${env.SERVER_URL}/create_family`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })

        if (res.ok) return { error: '' }
        else return res.json() as Promise<{ error: string }>
    } catch (error) {
        console.error(error)
        return null
    }
}
