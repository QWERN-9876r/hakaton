import { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Skeleton } from '@mui/material'

interface Expense {
    comment: string
    price: number
    category: string
    date: string
    color?: string
}

interface Props {
    expenses: Expense[]
}

export const ListOfExpenses: FunctionComponent<Props> = ({ expenses }) => {
    return (
        <section>
            {expenses.length ? (
                expenses.map(({ comment, price, category, date, color }) => {
                    return (
                        <Accordion key={date}>
                            <AccordionSummary id="panel-header" aria-controls="panel-content">
                                {comment ? comment : category} - {price}
                            </AccordionSummary>
                            <AccordionDetails>{new Date(date).toLocaleDateString()}</AccordionDetails>
                        </Accordion>
                    )
                })
            ) : (
                <Skeleton>
                    {new Array(5).fill(0).map((em, i) => {
                        return (
                            <Accordion key={i}>
                                <AccordionSummary
                                    id="panel-header"
                                    aria-controls="panel-content"
                                    style={{ width: '80vw', marginBottom: '5px' }}
                                ></AccordionSummary>
                            </Accordion>
                        )
                    })}
                </Skeleton>
            )}
        </section>
    )
}
