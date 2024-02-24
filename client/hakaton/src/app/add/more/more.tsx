import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Category } from '../choosingCategory/choosingCategory'
import { Grid } from '@mui/material'
import styles from '../page.module.css'
import Image from 'next/image'

interface Props {
    categories: Category[]
    setCurrentCategory: Dispatch<SetStateAction<Category | undefined>>
    setShowMoreCategories: Dispatch<SetStateAction<boolean>>
}

export const More: FunctionComponent<Props> = ({ categories, setCurrentCategory, setShowMoreCategories }) => {
    return (
        <div style={{ display: 'flex', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
            <section className={styles.bigCategories}>
                {categories.map(({ name, icon }) => (
                    <button
                        onClick={() => {
                            setCurrentCategory({ name, icon })
                            setShowMoreCategories(false)
                        }}
                        className={`${styles.category} ${styles.bigCategory}`}
                    >
                        <Image src={icon || 'categories.svg'} alt={name} width={100} height={100} />
                        {name}
                    </button>
                ))}
            </section>
        </div>
    )
}
