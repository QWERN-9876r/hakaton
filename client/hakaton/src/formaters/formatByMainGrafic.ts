import { Transaction } from '@/api/transactions/getAllTransactions'
import { BarChartProps } from '@mui/x-charts'
import { mergeTransactionsByDate } from './mergeTransactionsByDate'
import dayjs from 'dayjs'

export function formatByMainGrafic(expenditures: Transaction[], income: Transaction[]) {
    const transactions = [...expenditures, ...income]
    const valueFormatter = (value: number) => dayjs(value).toString().split(' ')[2] + ' ' + dayjs(value).get('year')

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
                label: 'expenditures',
                color: '#f02020',
                data: Array.from(new Set(expenditures.map((trans) => trans.amount))),
            },
            {
                label: 'income',
                color: '#398539',
                data: Array.from(new Set(income.map((trans) => trans.amount))),
            },
        ],
    } as BarChartProps
}
