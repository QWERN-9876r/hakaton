import { Currency } from '@/api/account/getUserCurrency'
import { Api } from '@/api/main'
import { Transaction } from '@/api/transactions/getAllTransactions'

const api = new Api()

export function convertAll(transactions: Transaction[], mainCurrency: Currency) {
    return structuredClone(transactions).map((transaction) => {
        transaction.amount = api.convert(transaction.amount, transaction.currency || 'RUB', mainCurrency)
        return transaction
    })
}
