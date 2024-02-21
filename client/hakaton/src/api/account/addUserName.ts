import env from '../env.json'

export const addUserName: (userName: string, email: string) => Promise<boolean> = async (userName, email) => {
    try {
        const res = await fetch(`${env.SERVER_URL}/addUserName`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, userName }),
        })

        return true
    } catch {
        return false
    }
}
