'use client'

import { LiteralUnion, signIn, useSession } from 'next-auth/react'
import { FunctionComponent } from 'react'
import styles from './buttonSignIn.module.css'
import { BuiltInProviderType } from 'next-auth/providers/index'
import { Api } from '@/api/main'
import { sha256 } from '@/api/account/helpers'

interface Props {
    companyName: LiteralUnion<BuiltInProviderType>
    imageUrl: string
}

const api = new Api

export const ButtonSignIn: FunctionComponent<Props> = ({ companyName, imageUrl }) => {
    const session = useSession()

    return (
        <button
            className={styles.btn}
            onClick={async () => {
                const res = await signIn(companyName, { callbackUrl: '/profile' })
                if (res?.ok) {
                    // @ts-ignore
                    await api.registration({email: session.data.email, password: sha256(Math.random())})
                }
            }}
        >
            <img src={imageUrl} alt="" width={35} height={35} />
        </button>
    )
}
