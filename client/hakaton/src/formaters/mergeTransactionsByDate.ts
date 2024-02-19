import { Transaction } from '@/api/transactions/getAllTransactions'

export function mergeTransactionsByDate(transactions: Transaction[]) {
    const del = new Array()

    for (let i = 0; i < transactions.length - 1; i++) {
        if (transactions[i].date === transactions[i + 1].date) {
            transactions[i].amount += transactions[i + 1].amount
            del.push(i + 1)
            i++
        }
    }
    return transactions.filter((transaction, index) => !del.includes(index))
}
