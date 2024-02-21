import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Category } from '../choosingCategory/choosingCategory'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import styles from '../page.module.css'
import Image from 'next/image'

interface Props {
    categories: Category[]
    setCurrentCategory: Dispatch<SetStateAction<Category | undefined>>
    setShowMoreCategories: Dispatch<SetStateAction<boolean>>
    currentCategory: Category | undefined
}

export const MiniChooseCategory: FunctionComponent<Props> = ({
    categories,
    setCurrentCategory,
    setShowMoreCategories,
    currentCategory,
}) => {
    const size = window.innerWidth <= 900 ? (categories.length === 6 ? 6 : 5) : 50

    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <section className={styles.categories}>
                {categories
                    .filter((c, i) => i < size)
                    .map(({ name, icon }) => (
                        <button
                            onClick={() => setCurrentCategory({ name, icon })}
                            className={`${styles.minCategory} ${currentCategory?.name === name ? styles.minCurrentCategory : ''}`}
                        >
                            <Image src={icon || 'categories.svg'} alt={name} width={50} height={50} />
                            {name}
                        </button>
                    ))}
                {categories.length >= size && (
                    <button onClick={() => setShowMoreCategories(true)} className={styles.minCategory}>
                        <MoreHorizIcon sx={{ width: 50, height: 50, color: 'black' }} />
                        more
                    </button>
                )}
            </section>
        </div>
    )
}
