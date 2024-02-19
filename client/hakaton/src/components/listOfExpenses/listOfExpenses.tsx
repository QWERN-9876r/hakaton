import { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { splitByMoths } from '@/formaters/splitByMoths'
import styles from './listOfExpenses.module.css'

interface Expense {
    comment: string
    amount: number
    category: string
    date: string
}

interface Props {
    expenses: Expense[]
}

export const ListOfExpenses: FunctionComponent<Props> = ({ expenses }) => {
    return expenses.length ? (
        <section>
            {splitByMoths(expenses).map(({ label, transactions }) => {
                return (
                    <div>
                        <h3 className={styles.month}>{label}</h3>
                        {transactions.map(({ comment, amount, category, date }) => {
                            return (
                                <Accordion key={date + comment + amount + category}>
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        {comment ? comment : category} - {amount}
                                    </AccordionSummary>
                                    <AccordionDetails>{new Date(date).toLocaleDateString()}</AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>
                )
            })}
        </section>
    ) : null
}
