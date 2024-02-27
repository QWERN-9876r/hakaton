import { Currency } from '../currency/getUserCurrency'
import env from '../env.json'

export interface Transaction {
    _id: string
    comment: string
    amount: number
    currency?: Currency
    category: string
    date: string
}
export interface Data {
    expenditures: Transaction[]
    income: Transaction[]
}

export const getAllTransactions: (email: string, period?: string) => Promise<Data> = async (email, period) => {
    const res = await fetch(`${env.SERVER_URL}/transactions?email=${email}&period=${period || ''}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // cache: 'force-cache',
        // next: {
        //     revalidate: 120,
        // },
    })

    return res.json()
}
