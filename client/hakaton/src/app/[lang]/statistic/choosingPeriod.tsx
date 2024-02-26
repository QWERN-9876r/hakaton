'use client'

import { FunctionComponent, useState } from 'react'
import styles from './page.module.css'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import dayjs from 'dayjs'

export type Period = 'month' | '3 months' | '6 months' | 'year' | 'all'

interface Props {
    onChange: (value: string) => void
    earliestTransaction: string
    title: string
    period: Period | ''
    dict: Record<string, string>
}
function getDistForThisPeriod(date: string, quantityMoths: number) {
    const currentDate = dayjs(Date.now())
    const transactionDate = dayjs(date)

    if (currentDate.year() === transactionDate.year())
        return dayjs(Date.now()).month() - dayjs(date).month() <= quantityMoths
    else if (currentDate.year() - 1 === transactionDate.year()) {
        return 12 - transactionDate.month() + currentDate.month() <= quantityMoths
    } else return false
}

export const ChoosingPeriod: FunctionComponent<Props> = ({ onChange, earliestTransaction, title, period, dict }) => {
    const [show, setShow] = useState(false)

    const periods = [
        {
            name: 'month',
            label: dict['month'],
        },
        {
            name: '3 months',
            label: dict['3 months'],
        },
        {
            name: '6 months',
            label: dict['6 months'],
        },
        {
            name: 'year',
            label: dict['year'],
        },
        {
            name: 'all',
            label: dict['all'],
        },
    ] as const

    let disabledCount = 0

    if (earliestTransaction) {
        if (!getDistForThisPeriod(earliestTransaction, 12)) disabledCount = 4
        else if (!getDistForThisPeriod(earliestTransaction, 6)) disabledCount = 3
        else if (!getDistForThisPeriod(earliestTransaction, 3)) disabledCount = 2
        else if (!getDistForThisPeriod(earliestTransaction, 1)) disabledCount = 1
    }

    return (
        <>
            <button onClick={() => setShow((show) => !show)} className={styles.title}>
                <h1>
                    {title} {period && period[0] !== 'all' && `${dict.by} ${dict[period]}`}
                </h1>
            </button>
            {show && (
                <div className={styles.choosingPeriod}>
                    <ToggleButtonGroup onChange={(event, newValue) => onChange(newValue)}>
                        {periods.map(({ name, label }, i) => (
                            <ToggleButton
                                value={name}
                                className={styles.choosingPeriodButton}
                                disabled={i < disabledCount}
                            >
                                {label}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </div>
            )}
        </>
    )
}
