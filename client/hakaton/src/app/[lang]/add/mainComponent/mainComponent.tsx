'use client'

import { FunctionComponent, SyntheticEvent, useEffect, useState } from 'react'
import styles from '../page.module.css'
import { Button, Input, FormControl, Box, TextField } from '@mui/material'
import { Category } from '../choosingCategory/choosingCategory'
import { MiniChooseCategory } from '../miniChooseCategory/miniChooseCategory'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import categories from '@/data/categories.json'
import dayjs from 'dayjs'
import { Api } from '@/api/main'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Currency } from '@/api/currency/getUserCurrency'
import { More } from '../more/more'

interface Props {
    type: number
    handleChangeType: (event: SyntheticEvent, newValue: number) => void
    dict: Record<string, string>
}
const api = new Api()

const MainComponent: FunctionComponent<Props> = ({ type, handleChangeType, dict }) => {
    const [currentCategory, setCurrentCategory] = useState<Category>()
    const [comment, setComment] = useState('')
    const [currency, setCurrency] = useState<Currency>('RUB')
    const [date, setDate] = useState(dayjs(''))
    const [showMoreCategories, setShowMoreCategories] = useState(false)
    const [amount, setAmount] = useState<number>()
    const router = useRouter()
    const session = useSession()

    const createTransaction = async () => {
        if (!amount || !currentCategory || !date.isValid()) {
            return
        }
        const ok = await api.createTransaction({
            comment,
            amount: type === 1 ? amount : -amount,
            category: currentCategory?.name,
            date: String(date),
            //@ts-ignore
            userEmail: session.data?.email,
        })

        ok && router.push('/')
    }

    useEffect(() => {
        ;(async () => {
            // @ts-ignore
            if (session?.data?.email) {
                // @ts-ignore
                const res = await api.getUserCurrency(session.data.email)
                if (res) setCurrency(res.currency)
            }
        })()

        // @ts-ignore
    }, [session?.data?.email])

    return (
        <Box sx={{ minWidth: 120 }}>
            {showMoreCategories ? (
                categories ? (
                    <More
                        categories={categories[type]}
                        setCurrentCategory={setCurrentCategory}
                        setShowMoreCategories={setShowMoreCategories}
                        dict={dict}
                    />
                ) : (
                    <></>
                )
            ) : (
                <FormControl>
                    {/* {!currentCategory && (
                    <ChoosingCategory currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
                )} */}
                    <div className={styles.amountBlock}>
                        <Input
                            sx={{ marginBottom: '25px', width: window.innerWidth <= 900 ? 150 : 300 }}
                            type="number"
                            value={amount}
                            placeholder="0"
                            size="small"
                            onChange={(event) => setAmount(Number(event.target.value))}

                            // onChange={handleChangeType}
                        />
                        <span className={styles.currency}>{currency}</span>
                    </div>

                    <MiniChooseCategory
                        categories={categories[type]}
                        setCurrentCategory={setCurrentCategory}
                        setShowMoreCategories={setShowMoreCategories}
                        currentCategory={currentCategory}
                        dict={dict}
                    />

                    <Box>
                        <section className={styles.inputs}>
                            <div className={styles.changeDateDiv}>
                                <DatePicker value={dayjs(date)} onChange={(value) => setDate(value as dayjs.Dayjs)} />
                            </div>
                            <div className={styles.comment}>
                                <TextField
                                    variant="standard"
                                    label="comment"
                                    sx={{ display: 'block', width: 500 }}
                                    value={comment}
                                    placeholder="comment"
                                    onChange={(event) => setComment(event.target.value)}
                                />
                            </div>
                        </section>
                        <div className={styles.addButton}>
                            <Button
                                sx={{
                                    width: window.innerWidth >= 900 ? 350 : 'min(50vw, 250px)',
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                }}
                                color="primary"
                                variant="contained"
                                onClick={createTransaction}
                            >
                                {dict.add}
                            </Button>
                        </div>
                    </Box>
                </FormControl>
            )}
        </Box>
    )
}

export default MainComponent
