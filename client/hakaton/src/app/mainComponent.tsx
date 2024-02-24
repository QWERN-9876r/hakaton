'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { MainGrafic } from './mainGrafic'
import { ListOfExpenses } from '@/components/listOfExpenses/listOfExpenses'
import { useSession } from 'next-auth/react'
import { Data } from '@/api/transactions/getAllTransactions'
import { ChangeType } from '@/components/changeType/changeType'
import { Api } from '@/api/main'
import { Currency } from '@/api/account/getUserCurrency'

const api = new Api()

export const MainComponent: FunctionComponent = () => {
    const [transactions, setTransactions] = useState<Data>({
        income: [],
        expenditures: [],
    })
    const [type, setType] = useState(0)
    const [mainCurrency, setMainCurrency] = useState<Currency | ''>('')
    const session = useSession()

    useEffect(() => {
        if (session.status === 'authenticated') {
            ;(async () => {
                // @ts-ignore
                setTransactions(await api.getAllTransactions(session.data?.email))
                // @ts-ignore
                setMainCurrency((await api.getUserCurrency(session.data?.email))?.currency)
            })()
        }
    }, [session.status === 'authenticated'])

    return (
        <>
            {!!(transactions.expenditures.length || transactions.income.length) && (
                <>
                    {mainCurrency && <MainGrafic transactions={transactions} mainCurrency={mainCurrency} />}
                    <ChangeType
                        type={type}
                        handleChangeType={(event, newValue) => {
                            setType(newValue)
                        }}
                    />
                    <ListOfExpenses isIncome={!!type} expenses={transactions[type ? 'income' : 'expenditures']} />
                    <div style={{ marginBottom: 56 }}></div>
                </>
            )}
        </>
    )
}
