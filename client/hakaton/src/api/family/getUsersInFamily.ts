import env from '../env.json'

export const getUsersInFamily: (email: string) => Promise<string[] | { error: string } | null> = async (email) => {
    try {
        const res = await fetch(`${env.SERVER_URL}/users_in_family?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res.json()
    } catch (error) {
        console.error(error)
        return null
    }
}
