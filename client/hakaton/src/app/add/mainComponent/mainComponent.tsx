'use client'

import Box from '@mui/material/Box'
import { FunctionComponent, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import styles from '../page.module.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Category, ChoosingCategory } from '../choosingCategory/choosingCategory'

const MainComponent: FunctionComponent = () => {
    const [currentCategory, setCurrentCategory] = useState<Category>()
    const [amount, setAmount] = useState<number>()

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl>
                {!currentCategory && (
                    <ChoosingCategory currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
                )}
                {currentCategory && (
                    <Box>
                        <button
                            className="invisible"
                            onClick={() => {
                                setCurrentCategory(undefined)
                            }}
                        >
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
                        </button>
                        <section className={styles.inputs}>
                            <Input
                                value={amount}
                                aria-label="Demo number input"
                                placeholder="amount"
                                onChange={(event) => setAmount(Number(event.target.value))}

                                // onChange={handleChangeType}
                            />
                        </section>
                    </Box>
                )}
            </FormControl>
        </Box>
    )
}

export default MainComponent
