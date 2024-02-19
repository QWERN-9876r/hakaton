'use client'

import { FunctionComponent, SyntheticEvent, useState } from 'react'
import MainComponent from './mainComponent/mainComponent'
import { ChangeType } from '../../components/changeType/changeType'
import styles from './page.module.css'

const Add: FunctionComponent = () => {
    const [type, setType] = useState(0)

    const handleChangeType = (event: SyntheticEvent, newValue: number) => {
        setType(newValue)
    }

    return (
        <>
            <header className={styles.header}>
                <ChangeType type={type} handleChangeType={handleChangeType} />
            </header>
            <main style={{ margin: 0 }}>
                <MainComponent type={type} handleChangeType={handleChangeType} />
            </main>
        </>
    )
}

export default Add
