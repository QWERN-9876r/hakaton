'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { MainGrafic } from './mainGrafic'
import { ListOfExpenses } from '@/components/listOfExpenses/listOfExpenses'
import { useSession } from 'next-auth/react'
import { Data } from '@/api/transactions/getAllTransactions'
import { ChangeType } from '@/components/changeType/changeType'
import { Api } from '@/api/main'
import { Currency } from '@/api/currency/getUserCurrency'
import styles from './page.module.css'

const api = new Api()

interface Props {
    dict: Record<string, string>
}

export const MainComponent: FunctionComponent<Props> = ({ dict }) => {
    const [transactions, setTransactions] = useState<Data>({
        income: [],
        expenditures: [],
    })
    const [type, setType] = useState(0)
    const [mainCurrency, setMainCurrency] = useState<Currency | ''>('')
    const [transactionsWasGet, setTransactionsWasGet] = useState(false)
    const session = useSession()

    useEffect(() => {
        if (session.status === 'authenticated') {
            ;(async () => {
                // @ts-ignore
                const res = await api.getAllTransactions(session.data?.email)
                setTransactions(res)
                setTransactionsWasGet(true)
                // @ts-ignore
                setMainCurrency((await api.getUserCurrency(session.data?.email))?.currency)
            })()
        }
    }, [session.status === 'authenticated'])

    return (
        <>
            {!!(transactions.expenditures.length || transactions.income.length) ? (
                <>
                    {mainCurrency && <MainGrafic transactions={transactions} mainCurrency={mainCurrency} dict={dict} />}
                    <ChangeType
                        type={type}
                        handleChangeType={(event, newValue) => {
                            setType(newValue)
                        }}
                        dict={dict}
                    />
                    <ListOfExpenses
                        isIncome={!!type}
                        expenses={transactions[type ? 'income' : 'expenditures']}
                        dict={dict}
                    />
                    <div style={{ marginBottom: 56 }}></div>
                </>
            ) : (
                transactionsWasGet && (
                    <section>
                        <h1 className={styles.noTransactions}>{dict["you don't have a transaction"]}</h1>
                    </section>
                )
            )}
        </>
    )
}
