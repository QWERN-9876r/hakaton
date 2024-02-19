import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react'
import { ChoosingPeriod } from './choosingPeriod'
import { PieChart } from '@mui/x-charts'
import { ListOfExpenses } from '@/components/listOfExpenses/listOfExpenses'
import { mergeTransactionsByCategory } from '@/formaters/mergeTransactionsByCategory'
import { Transaction } from '@/api/transactions/getAllTransactions'
import styles from './page.module.css'

interface Props {
    transactions: Transaction[]
    earliestTransaction: string
    setPeriod: Dispatch<SetStateAction<string>>
    title: string
    period: string
}

export const MainComponent: FunctionComponent<Props> = ({
    transactions,
    setPeriod,
    earliestTransaction,
    title,
    period,
}) => {
    const graficWidth = Math.min(globalThis.innerWidth, 500)

    return (
        <>
            <div style={{ marginBottom: 30 }}>
                <ChoosingPeriod
                    period={period}
                    title={title}
                    earliestTransaction={earliestTransaction}
                    onChange={(newValue) => setPeriod(newValue)}
                />
            </div>
            <PieChart
                series={[
                    {
                        data: mergeTransactionsByCategory(transactions),
                    },
                ]}
                width={graficWidth - 50}
                height={200}
            />
            <ListOfExpenses expenses={transactions} />
        </>
    )
}
