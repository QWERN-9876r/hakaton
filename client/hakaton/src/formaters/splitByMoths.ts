import { Transaction } from '@/api/transactions/getAllTransactions'
import { Period } from '@/app/statistic/choosingPeriod'
import { i18n } from '@/data/i18n'
import dayjs from 'dayjs'

export function splitByMoths(transactions: Transaction[]) {
    const ans = [
        {
            label:
                i18n[dayjs(transactions[0].date).toString().split(' ')[2] as Period] +
                ' ' +
                dayjs(transactions[0].date).get('year'),
            transactions: [transactions[0]],
        },
    ]

    for (let i = 1; i < transactions.length; i++) {
        const date =
            i18n[dayjs(transactions[i].date).toString().split(' ')[2] as Period] +
            ' ' +
            dayjs(transactions[i].date).get('year')

        if (date === ans[ans.length - 1].label) {
            ans[ans.length - 1].transactions.push(transactions[i])
        } else {
            ans.push({
                label: date,
                transactions: [transactions[i]],
            })
        }
    }

    return ans
}
