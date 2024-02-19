import { Transaction } from '@/api/transactions/getAllTransactions'

export function mergeTransactionsByCategory(transactions: Transaction[]) {
    const categories: Record<string, { id: string; value: number; label: string }> = {}

    for (const { amount, category } of transactions) {
        if (category in categories) {
            categories[category].value += amount
        } else {
            categories[category] = {
                id: category,
                value: amount,
                label: category,
            }
        }
    }

    return Object.values(categories)
}
