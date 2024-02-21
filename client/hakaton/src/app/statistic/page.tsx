'use client'

import { getAllTransactions, Transaction } from '@/api/transactions/getAllTransactions'
import { useSession } from 'next-auth/react'
import { FunctionComponent, useEffect, useState } from 'react'
import styles from './page.module.css'
import { ChangeType } from '@/components/changeType/changeType'
import { MainComponent } from './mainComponent'
import { i18n } from '@/data/i18n'
import { getLang } from '@/data/getLang'

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
                    //@ts-ignore
                    const sol = await getAllTransactions(session.data?.email as string, period)
                    console.log(sol)

                    if (
                        !data.expenditures.length ||
                        (!data.income.length && sol.expenditures.length && sol.income.length)
                    ) {
                        setEarliestTransaction({
                            income: sol.income[sol.income.length - 1].date,
                            expenditures: sol.expenditures[sol.income.length - 1].date,
                        })
                    }
                    setData(sol)
                }
            })()
        } catch {
            setError(true)
        }
    }, [session.status, period])

    return (
        <>
            {session.status === 'authenticated' && (!!data.expenditures.length || !!data.income.length) && (
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
                            <h1>{i18n.Error}</h1>
                        ) : (
                            <main className={styles.main}>
                                <MainComponent
                                    earliestTransaction={earliestTransaction[type ? 'income' : 'expenditures']}
                                    transactions={data[type ? 'income' : 'expenditures']}
                                    setPeriod={setPeriod}
                                    title={type ? i18n.income : i18n.expenditures}
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
