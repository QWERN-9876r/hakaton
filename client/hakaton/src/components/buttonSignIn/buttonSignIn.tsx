'use client'

import { LiteralUnion, signIn } from 'next-auth/react'
import { FunctionComponent } from 'react'
import styles from './buttonSignIn.module.css'
import { BuiltInProviderType } from 'next-auth/providers/index'

interface Props {
    companyName: LiteralUnion<BuiltInProviderType>
    imageUrl: string
}

export const ButtonSignIn: FunctionComponent<Props> = ({ companyName, imageUrl }) => {
    return (
        <button
            className={styles.btn}
            onClick={async () => {
                await signIn(companyName, { callbackUrl: '/profile' })
            }}
        >
            <img src={imageUrl} alt="" width={35} height={35} />
        </button>
    )
}
