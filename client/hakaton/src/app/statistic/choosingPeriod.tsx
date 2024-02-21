'use client'

import { FunctionComponent, MouseEvent, useState } from 'react'
import styles from './page.module.css'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import dayjs from 'dayjs'
import { i18n } from '@/data/i18n'

const periods = [
    {
        name: 'month',
        label: i18n['month'],
    },
    {
        name: '3 months',
        label: i18n['3 months'],
    },
    {
        name: '6 months',
        label: i18n['6 months'],
    },
    {
        name: 'year',
        label: i18n['year'],
    },
    {
        name: 'all',
        label: i18n['all'],
    },
] as const

interface Props {
    onChange: (value: string) => void
    earliestTransaction: string
    title: string
    period: 'month' | '3 months' | '6 months' | 'year' | 'all'
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
        if (!getDistForThisPeriod(earliestTransaction, 12)) disabledCount = 4
        else if (!getDistForThisPeriod(earliestTransaction, 6)) disabledCount = 3
        else if (!getDistForThisPeriod(earliestTransaction, 3)) disabledCount = 2
        else if (!getDistForThisPeriod(earliestTransaction, 1)) disabledCount = 1
    }

    return (
        <>
            <button onClick={() => setShow((show) => !show)} className={styles.title}>
                <h1>
                    {title} {(period && period[0] !== 'all') && `${i18n.by} ${i18n[period]}`}
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
