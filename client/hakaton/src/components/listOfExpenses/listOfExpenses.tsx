import { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { splitByMoths } from '@/formaters/splitByMoths'
import Image from 'next/image'
import styles from './listOfExpenses.module.css'
import categories from '@/data/categories.json'
import currencyChars from '@/data/currencyChars.json'

interface Expense {
    comment: string
    amount: number
    category: string
    date: string
}

interface Category {
    name: string
    icon: string
}

interface Props {
    expenses: Expense[]
    isIncome: boolean
    dict: Record<string, string>
}

export const ListOfExpenses: FunctionComponent<Props> = ({ expenses, isIncome, dict }) => {
    return expenses.length ? (
        <section className={styles.container}>
            {splitByMoths(expenses, dict).map(({ label, transactions }) => {
                return (
                    <div>
                        <h3 className={styles.month}>{label}</h3>
                        {transactions.map(({ comment, amount, category, date, currency }) => {
                            return (
                                <Accordion
                                    key={date + comment + amount + category}
                                    sx={{ width: window.innerWidth > 900 ? '700px' : '100%' }}
                                >
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <img
                                            className={styles.icon}
                                            src={
                                                categories.flat().find((c) => dict[c.name] === dict[category])?.icon ||
                                                'categories.svg'
                                            }
                                            alt=""
                                            width={50}
                                            height={50}
                                        />
                                        <span className={styles.category}>{dict[category] || category}</span>
                                        <span
                                            style={{ color: isIncome ? 'rgb(19, 172, 19)' : 'azure' }}
                                            className={styles.amount}
                                        >
                                            {amount}
                                            {currency ? currencyChars[currency] : '₽'}
                                        </span>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {comment}
                                        <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>
                )
            })}
        </section>
    ) : null
}
