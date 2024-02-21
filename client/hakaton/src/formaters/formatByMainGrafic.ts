import { Transaction } from '@/api/transactions/getAllTransactions'
import { BarChartProps } from '@mui/x-charts'
import { mergeTransactionsByDate } from './mergeTransactionsByDate'
import dayjs from 'dayjs'
import { i18n } from '@/data/i18n'

export function formatByMainGrafic(expenditures: Transaction[], income: Transaction[]) {
    const transactions = [...expenditures, ...income]
    const valueFormatter = (value: number) => {
        const time = dayjs(value).toString().split(' ')
        return time[1] + ' ' + i18n[time[2]] + ' ' + dayjs(value).get('year')
    }

    return {
        xAxis: [
            {
                scaleType: 'band',
                data: mergeTransactionsByDate(transactions).map((trans) => Number(dayjs(trans.date))),
                valueFormatter,
            },
        ],
        series: [
            {
                label: i18n.expenditures,
                color: '#f02020',
                data: Array.from(new Set(expenditures.map((trans) => trans.amount))),
            },
            {
                label: i18n.income,
                color: '#398539',
                data: Array.from(new Set(income.map((trans) => trans.amount))),
            },
        ],
    } as BarChartProps
}
