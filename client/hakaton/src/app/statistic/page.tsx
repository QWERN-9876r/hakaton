'use client'

import { getAllTransactions, Transaction } from '@/api/transactions/getAllTransactions'
import { useSession } from 'next-auth/react'
import { FunctionComponent, useEffect, useState } from 'react'
import styles from './page.module.css'
import { ChangeType } from '@/components/changeType/changeType'
import { MainComponent } from './mainComponent'

interface Data {
    expenditures: Transaction[]
    income: Transaction[]
}

const Statistic: FunctionComponent = () => {
    const [data, setData] = useState<Data>({
        expenditures: [],
        income: [],
    })
    const [earliestTransaction, setEarliestTransaction] = useState({
        income: '',
        expenditures: '',
    })
    const [error, setError] = useState(false)
    const [type, setType] = useState(0)
    const session = useSession()
    const [period, setPeriod] = useState('')

    useEffect(() => {
        try {
            ;(async () => {
                if (session.status === 'authenticated') {
                    const sol = await getAllTransactions(session.data?.user?.email as string, period)
                    if (!data.expenditures.length || !data.income.length)
                        setEarliestTransaction({
                            income: sol.income[0].date,
                            expenditures: sol.expenditures[0].date,
                        })
                    setData(sol)
                }
            })()
        } catch {
            setError(true)
        }
    }, [session.status, period])

    return (
        <>
            {session.status === 'authenticated' && (data.expenditures.length || data.income.length) && (
                <>
                    <header>
                        <ChangeType
                            type={type}
                            handleChangeType={(event, newValue) => {
                                setType(newValue)
                            }}
                        />
                    </header>
                    <div>
                        {error ? (
                            <h1>Error</h1>
                        ) : (
                            <main className={styles.main}>
                                <MainComponent
                                    earliestTransaction={earliestTransaction[type ? 'income' : 'expenditures']}
                                    transactions={data[type ? 'income' : 'expenditures']}
                                    setPeriod={setPeriod}
                                    title={type ? 'income' : 'expenditures'}
                                    period={period}
                                />
                                <div style={{ height: '56px', width: 0 }}></div>
                            </main>
                        )}
                    </div>
                </>
            )}
        </>
    )
}

export default Statistic
