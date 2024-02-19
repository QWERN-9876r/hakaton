export interface Transaction {
    comment: string
    amount: number
    category: string
    date: string
}
export interface Data {
    expenditures: Transaction[]
    income: Transaction[]
}

export const getAllTransactions: (email: string, period?: string) => Promise<Data> = async (email, period) => {
    const res = await fetch(`http://192.168.1.83:3001/transactions?email=${email}&period=${period || ''}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'force-cache',
        next: {
            revalidate: 120,
        },
    })

    return res.json()
}
