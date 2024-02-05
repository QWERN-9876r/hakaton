'use client'

import { getAllTransactions, Transaction } from "@/api/transactions/getAllTransactions"
import { ListOfExpenses } from "@/components/listOfExpenses/listOfExpenses"
import { LineChart } from "@mui/x-charts"
import { FunctionComponent, useEffect, useState } from "react"

function timeFormatter(value: number): string {
    let ans = value.toString().split(' ')
    ans.shift()
    ans.length = 4

    return ans.join(' ')
}

const Statistic: FunctionComponent = () => {
    const [data, setData] = useState([] as Transaction[])
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            (async () => {
                const sol = await getAllTransactions()
                setData(sol)
            })()
        } catch {
            setError(true)
        }
    }, [])

    return <>
        <div>
            {error ? <h1>Error</h1> : <>
                <LineChart
                xAxis={[{
                    data: data.map((transaction, i) => new Date(transaction.date)),
                    scaleType: 'time',
                    valueFormatter: timeFormatter
                }, ]}

                series={[
                    {
                        data: data.map(transaction => transaction.price)
                    },
                ]}
                width={Math.min(screen.width, 500)}
                height={300}
                />
                <LineChart
                xAxis={[{
                    data: data.map((transaction, i) => new Date(transaction.date)),
                    scaleType: 'time',
                    valueFormatter: timeFormatter
                }, ]}
                series={[
                    {
                        data: data.map(transaction => transaction.price)
                    },
                ]}
                width={Math.min(screen.width, 500)}
                height={300}
                />
                <ListOfExpenses expenses={data}/>
            </>}
        </div>
    </>
}

export default Statistic