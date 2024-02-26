'use client'

import { FunctionComponent, SyntheticEvent, useState } from 'react'
import MainComponent from './mainComponent/mainComponent'
import { ChangeType } from '../../../components/changeType/changeType'
import styles from './page.module.css'

interface Props {
    dict: Record<string, string>
}

export const Container: FunctionComponent<Props> = ({ dict }) => {
    const [type, setType] = useState(0)
    const handleChangeType = (event: SyntheticEvent, newValue: number) => {
        setType(newValue)
    }

    return (
        <>
            <header className={styles.header}>
                <ChangeType type={type} handleChangeType={handleChangeType} dict={dict} />
            </header>
            <main style={{ margin: 0 }}>
                <MainComponent type={type} handleChangeType={handleChangeType} dict={dict} />
            </main>
        </>
    )
}
