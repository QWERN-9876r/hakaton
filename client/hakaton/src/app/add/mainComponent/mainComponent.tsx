'use client'

import { FunctionComponent, SyntheticEvent, useState } from 'react'
import styles from '../page.module.css'
import { Button, Input, FormControl, Box, TextField } from '@mui/material'
import { Category, ChoosingCategory } from '../choosingCategory/choosingCategory'
import { MiniChooseCategory } from '../miniChooseCategory/miniChooseCategory'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import categories from '@/data/categories.json'
import dayjs from 'dayjs'
import { Api } from '@/api/main'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const currency = 'RUB'

interface Props {
    type: number
    handleChangeType: (event: SyntheticEvent, newValue: number) => void
}
const api = new Api()

const MainComponent: FunctionComponent<Props> = ({ type, handleChangeType }) => {
    const [currentCategory, setCurrentCategory] = useState<Category>()
    const [comment, setComment] = useState('')
    const [date, setDate] = useState(dayjs(''))
    const [showMoreCategories, setShowMoreCategories] = useState(false)
    const [amount, setAmount] = useState<number>()
    const router = useRouter()
    const session = useSession()

    const createTransaction = async () => {
        if (!amount || !currentCategory || !date) {
            return
        }
        const ok = await api.createTransaction({
            comment,
            amount: type === 1 ? amount : -amount,
            category: currentCategory?.name,
            date: String(date),
            userEmail: session.data?.user?.email as string,
        })

        ok && router.push('/')
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl>
                {/* {!currentCategory && (
                    <ChoosingCategory currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
                )} */}
                <div className={styles.amountBlock}>
                    <Input
                        sx={{ marginBottom: '25px' }}
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
                />

                <Box>
                    {/* <button
                        className="invisible"
                        onClick={() => {
                            setCurrentCategory(undefined)
                        }}
                    >
                        {currentCategory && (
                            <Card className={styles.currentCategory}>
                                {currentCategory.icon && (
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={currentCategory.icon}
                                        alt={currentCategory.name}
                                    />
                                )}
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {currentCategory.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )}
                    </button> */}
                    <section className={styles.inputs}>
                        <div className={styles.changeDateDiv}>
                            <DatePicker value={dayjs(date)} onChange={(value) => setDate(value as dayjs.Dayjs)} />
                        </div>
                        <TextField
                            variant="standard"
                            label="comment"
                            sx={{ display: 'block' }}
                            value={comment}
                            placeholder="comment"
                            onChange={(event) => setComment(event.target.value)}
                        />
                    </section>
                    <div className={styles.addButton}>
                        <Button
                            sx={{ width: 'min(50vw, 250px)', cursor: 'pointer', borderRadius: '10px' }}
                            color="primary"
                            variant="contained"
                            onClick={createTransaction}
                        >
                            add
                        </Button>
                    </div>
                </Box>
            </FormControl>
        </Box>
    )
}

export default MainComponent
