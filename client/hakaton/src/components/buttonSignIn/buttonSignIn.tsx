'use client'

import { LiteralUnion, signIn } from 'next-auth/react'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from './buttonSignIn.module.css'
import { useSearchParams } from 'next/navigation'
import { BuiltInProviderType } from 'next-auth/providers/index'

interface Props {
    companyName: LiteralUnion<BuiltInProviderType>
    imageUrl: string
}

export const ButtonSignIn: FunctionComponent<Props> = ({ companyName, imageUrl }) => {
    const callbackUrl = '/profile'

    return (
        <button
            className={styles.btn}
            onClick={() => {
                signIn(companyName, { callbackUrl })
            }}
        >
            <Image src={imageUrl} alt="" width={35} height={35} />
        </button>
    )
}
