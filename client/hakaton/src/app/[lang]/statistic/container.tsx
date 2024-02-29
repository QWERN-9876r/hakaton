'use client'

import { ChangeType } from '@/components/changeType/changeType'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FunctionComponent, useEffect, useState } from 'react'
import { Period } from './choosingPeriod'
import { Data } from '@/api/transactions/getAllTransactions'
import styles from './page.module.css'
import { MainComponent } from './mainComponent'
import { Api } from '@/api/main'

interface Props {
    dict: Record<string, string>
}

const api = new Api()

export const Container: FunctionComponent<Props> = ({ dict }) => {
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
    const [period, setPeriod] = useState<Period | ''>('')
    const [dataWasGet, setDataWasGet] = useState(false)
    const router = useRouter()

    useEffect(() => {
        try {
            ;(async () => {
                if (session.status === 'authenticated') {
                    //@ts-ignore
                    const sol = await api.getAllTransactions(session.data?.email as string, period)

                    if (
                        (!data.expenditures.length || !data.income.length) &&
                        sol.expenditures.length &&
                        sol.income.length
                    ) {
                        setEarliestTransaction({
                            income: sol.income[sol.income.length - 1].date,
                            expenditures: sol.expenditures[sol.income.length - 1].date,
                        })
                    }
                    setDataWasGet(true)
                    setData(sol)
                }
            })()
        } catch {
            setError(true)
        }
    }, [session.status, period])

    return (
        <>
            {session.status === 'authenticated' && (!!data.expenditures.length || !!data.income.length) ? (
                <>
                    <header>
                        <ChangeType
                            type={type}
                            handleChangeType={(event, newValue) => {
                                setType(newValue)
                            }}
                            dict={dict}
                        />
                    </header>
                    <div>
                        {error ? (
                            <h1>{dict['Error']}</h1>
                        ) : (
                            <main className={styles.main}>
                                <MainComponent
                                    earliestTransaction={earliestTransaction[type ? 'income' : 'expenditures']}
                                    transactions={data[type ? 'income' : 'expenditures']}
                                    setPeriod={setPeriod}
                                    title={type ? dict['income'] : dict['expenditures']}
                                    period={period}
                                    isIncome={!!type}
                                    dict={dict}
                                />
                            </main>
                        )}
                    </div>
                </>
            ) : (
                dataWasGet && <h1 className={styles.noTransactions}>{dict["you don't have a transaction"]}</h1>
            )}
        </>
    )
}
