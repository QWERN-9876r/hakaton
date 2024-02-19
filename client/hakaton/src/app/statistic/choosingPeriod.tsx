'use client'

import { FunctionComponent, MouseEvent, useState } from 'react'
import styles from './page.module.css'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import dayjs from 'dayjs'

const periods = [
    {
        name: 'week',
        label: 'week', // i18n
    },
    {
        name: 'month',
        label: 'month', // i18n
    },
    {
        name: '3 months',
        label: '3 months', // i18n
    },
    {
        name: '6 months',
        label: '6 months', // i18n
    },
    {
        name: 'year',
        label: 'year', // i18n
    },
    {
        name: 'all',
        label: 'all', // i18n
    },
]

interface Props {
    onChange: (value: string) => void
    earliestTransaction: string
    title: string
    period: string
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

export const ChoosingPeriod: FunctionComponent<Props> = ({ onChange, earliestTransaction, title, period }) => {
    const [show, setShow] = useState(false)

    let disabledCount = 0

    if (earliestTransaction) {
        if (!getDistForThisPeriod(earliestTransaction, 12)) disabledCount = 5
        else if (!getDistForThisPeriod(earliestTransaction, 6)) disabledCount = 4
        else if (!getDistForThisPeriod(earliestTransaction, 3)) disabledCount = 3
        else if (!getDistForThisPeriod(earliestTransaction, 1)) disabledCount = 2
        else if (Date.now() - dayjs(earliestTransaction).millisecond() > 6.048e8) disabledCount = 1
    }

    return (
        <>
            <button onClick={() => setShow((show) => !show)} className={styles.title}>
                <h1>
                    {title} {period && `by ${period}`}
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
