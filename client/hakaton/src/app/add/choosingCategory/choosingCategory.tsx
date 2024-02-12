'use client'

import { Dispatch, FunctionComponent, SetStateAction, SyntheticEvent, useState } from 'react'
import Box from '@mui/material/Box'
import { StyledTab, StyledTabs } from '@/components/customTubs/customTubs'
import Grid from '@mui/material/Grid'
import styles from '../page.module.css'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

export interface Category {
    name: string
    icon?: string
}

interface Props {
    currentCategory: Category | undefined
    setCurrentCategory: Dispatch<SetStateAction<Category | undefined>>
}

const catigoriyes: Category[][] = [
    [
        {
            name: 'transport',
        },
        {
            name: 'food',
        },
        {
            name: 'presents',
        },
        {
            name: 'clothing',
        },
    ],
    [
        {
            name: 'bank deposite',
        },
        {
            name: 'salary',
        },
    ],
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export const ChoosingCategory: FunctionComponent<Props> = ({ currentCategory, setCurrentCategory }) => {
    const [type, setType] = useState(0)

    const handleChangeType = (event: SyntheticEvent, newValue: number) => {
        setType(newValue)
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ bgcolor: 'none' }}>
                    <StyledTabs value={type} onChange={handleChangeType} aria-label="styled tabs example">
                        <StyledTab label="expenditure" />
                        <StyledTab label="income" />
                    </StyledTabs>
                    <Box sx={{ p: 3 }} />
                </Box>
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {catigoriyes[type].map(({ name, icon }) => (
                    <Grid item xs={6} key={name}>
                        <Item
                            onClick={() => {
                                setCurrentCategory({ name, icon })
                            }}
                            className={styles.category}
                        >
                            <Image src={icon || 'categories.svg'} alt={name} width={100} height={100} />
                            {name}
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
