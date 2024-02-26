import { Transaction } from '@/api/transactions/getAllTransactions'
import { BarChartProps } from '@mui/x-charts'
import { mergeTransactionsByDate } from './mergeTransactionsByDate'
import dayjs from 'dayjs'
import { Api } from '@/api/main'
import { Currency } from '@/api/currency/getUserCurrency'

type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

const api = new Api()

export function formatByMainGrafic(
    expenditures: Transaction[],
    income: Transaction[],
    mainCurrency: Currency,
    dict: Record<string, string>,
) {
    const transactions = [...expenditures, ...income]
    const valueFormatter = (value: number) => {
        const time = dayjs(value).toString().split(' ')
        return time[1] + ' ' + dict[time[2] as Month] + ' ' + dayjs(value).get('year')
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
                label: dict['expenditures'],
                color: '#f02020',
                data: Array.from(
                    new Set(
                        expenditures.map((trans) => api.convert(-trans.amount, trans.currency || 'RUB', mainCurrency)),
                    ),
                ),
            },
            {
                label: dict['income'],
                color: '#398539',
                data: Array.from(
                    new Set(income.map((trans) => api.convert(trans.amount, trans.currency || 'RUB', mainCurrency))),
                ),
            },
        ],
    } as BarChartProps
}
