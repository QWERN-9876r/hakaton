'use client'

import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from 'react'
import { Grid } from '@mui/material'
import styles from '../page.module.css'
import Image from 'next/image'
import categories from '@/data/categories.json'

export interface Category {
    name: string
    icon?: string
}

interface Props {
    type: number
    currentCategory: Category | undefined
    setCurrentCategory: Dispatch<SetStateAction<Category | undefined>>
}

export const ChoosingCategory: FunctionComponent<Props> = ({ currentCategory, setCurrentCategory, type }) => {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {(categories as Category[][])[type].map(({ name, icon }) => (
                    <Grid item xs={6} key={name}>
                        <button
                            onClick={() => {
                                setCurrentCategory({ name, icon })
                            }}
                            className={styles.category}
                        >
                            <Image src={icon || 'categories.svg'} alt={name} width={100} height={100} />
                            {name}
                        </button>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
