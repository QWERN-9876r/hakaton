import env from '../env.json'

interface Body {
    comment: string
    amount: number
    category: string
    date: string
    userEmail: string
}

export const createTransaction = async (body: Body) => {
    try {
        await fetch(`${env.SERVER_URL}/create_transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}
