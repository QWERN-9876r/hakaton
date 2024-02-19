import { FunctionComponent } from 'react'
import styles from './page.module.css'
import { formatByMainGrafic } from '@/formaters/formatByMainGrafic'
import { BarChart } from '@mui/x-charts'
import { Data } from '@/api/transactions/getAllTransactions'

interface Props {
    transactions: Data
}

export const MainGrafic: FunctionComponent<Props> = ({ transactions }) => {
    return (
        <div className={styles.grafic}>
            <BarChart height={300} {...formatByMainGrafic(transactions.expenditures, transactions.income)} />
        </div>
    )
}
