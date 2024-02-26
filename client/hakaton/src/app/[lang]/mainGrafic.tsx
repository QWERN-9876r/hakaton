'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import styles from './page.module.css'
import { formatByMainGrafic } from '@/formaters/formatByMainGrafic'
import { BarChart } from '@mui/x-charts'
import { Data } from '@/api/transactions/getAllTransactions'
import { Api } from '@/api/main'
import { Currency } from '@/api/currency/getUserCurrency'

interface Props {
    transactions: Data
    mainCurrency: Currency
    dict: Record<string, string>
}

const api = new Api()

export const MainGrafic: FunctionComponent<Props> = ({ transactions, mainCurrency, dict }) => {
    const params = formatByMainGrafic(transactions.expenditures, transactions.income, mainCurrency, dict)
    const [ok, setOk] = useState(false)

    useEffect(() => {
        ;(async () => {
            await api.getDataAboutCurrency()
            setOk(true)
        })()
    }, [])

    return (
        <div className={styles.grafic}>
            <div>{ok && <BarChart height={300} {...params} />}</div>
        </div>
    )
}
