import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react'
import { ChoosingPeriod, Period } from './choosingPeriod'
import { PieChart } from '@mui/x-charts'
import { ListOfExpenses } from '@/components/listOfExpenses/listOfExpenses'
import { mergeTransactionsByCategory } from '@/formaters/mergeTransactionsByCategory'
import { Transaction } from '@/api/transactions/getAllTransactions'
import styles from './page.module.css'
import { Api } from '@/api/main'
import { convertAll } from '@/formaters/convertAll'
import { useSession } from 'next-auth/react'
import { Currency } from '@/api/account/getUserCurrency'

interface Props {
    transactions: Transaction[]
    earliestTransaction: string
    setPeriod: Dispatch<SetStateAction<Period | ''>>
    title: string
    period: Period | ''
    isIncome: boolean
}

const api = new Api()

export const MainComponent: FunctionComponent<Props> = ({
    transactions,
    setPeriod,
    earliestTransaction,
    title,
    period,
    isIncome,
}) => {
    const graficWidth = Math.min(globalThis.innerWidth, 500)
    const [ok, setOk] = useState(false)
    const [mainCurrency, setMainCurrency] = useState<Currency | ''>('')
    const session = useSession()

    useEffect(() => {
        if (session.status === 'authenticated') {
            ;(async () => {
                // @ts-ignore
                setMainCurrency((await api.getUserCurrency(session.data?.email))?.currency)
                await api.getDataAboutCurrency()
                setOk(true)
            })()
        }
    }, [session.status === 'authenticated'])

    return (
        <>
            <div style={{ marginBottom: 30 }}>
                <ChoosingPeriod
                    period={period}
                    title={title}
                    earliestTransaction={earliestTransaction}
                    onChange={(newValue) => setPeriod(newValue as Period)}
                />
            </div>
            <div className={styles.chart}>
                {ok && mainCurrency && (
                    <PieChart
                        series={[
                            {
                                data: mergeTransactionsByCategory(convertAll(transactions, mainCurrency)),
                            },
                        ]}
                        width={graficWidth - 50}
                        height={window.innerWidth >= 900 ? graficWidth - 200 : 250}
                    />
                )}
            </div>
            <ListOfExpenses isIncome={isIncome} expenses={transactions} />
        </>
    )
}
