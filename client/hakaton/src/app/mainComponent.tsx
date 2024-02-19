'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { MainGrafic } from './mainGrafic'
import { ListOfExpenses } from '@/components/listOfExpenses/listOfExpenses'
import { useSession } from 'next-auth/react'
import { Data, getAllTransactions } from '@/api/transactions/getAllTransactions'
import { ChangeType } from '@/components/changeType/changeType'

export const MainComponent: FunctionComponent = () => {
    const [transactions, setTransactions] = useState<Data>({
        income: [],
        expenditures: [],
    })
    const [type, setType] = useState(0)
    const session = useSession()

    useEffect(() => {
        if (session.status === 'authenticated') {
            ;(async () => {
                setTransactions(await getAllTransactions(session.data?.user?.email as string))
            })()
        }
    }, [session.status === 'authenticated'])

    return (
        <>
            {!!(transactions.expenditures.length || transactions.income.length) && (
                <>
                    <MainGrafic transactions={transactions} />
                    <ChangeType
                        type={type}
                        handleChangeType={(event, newValue) => {
                            setType(newValue)
                        }}
                    />
                    <ListOfExpenses expenses={transactions[type ? 'income' : 'expenditures']} />
                </>
            )}
        </>
    )
}
