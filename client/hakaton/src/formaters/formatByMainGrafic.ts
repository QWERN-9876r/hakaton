import { Transaction } from '@/api/transactions/getAllTransactions'
import { BarChartProps } from '@mui/x-charts'
import { mergeTransactionsByDate } from './mergeTransactionsByDate'
import dayjs from 'dayjs'
import { i18n } from '@/data/i18n'
import { Api } from '@/api/main'
import { Currency } from '@/api/account/getUserCurrency'

type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

const api = new Api()

export function formatByMainGrafic(expenditures: Transaction[], income: Transaction[], mainCurrency: Currency) {
    const transactions = [...expenditures, ...income]
    const valueFormatter = (value: number) => {
        const time = dayjs(value).toString().split(' ')
        return time[1] + ' ' + i18n[time[2] as Month] + ' ' + dayjs(value).get('year')
    }

    console.log(
        Array.from(
            new Set(expenditures.map((trans) => api.convert(-trans.amount, trans.currency || 'RUB', mainCurrency))),
        ),
    )

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
                data: Array.from(
                    new Set(
                        expenditures.map((trans) => api.convert(-trans.amount, trans.currency || 'RUB', mainCurrency)),
                    ),
                ),
            },
            {
                label: i18n.income,
                color: '#398539',
                data: Array.from(
                    new Set(income.map((trans) => api.convert(trans.amount, trans.currency || 'RUB', mainCurrency))),
                ),
            },
        ],
    } as BarChartProps
}
