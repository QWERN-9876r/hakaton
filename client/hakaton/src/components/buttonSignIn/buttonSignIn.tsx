'use client'

import { LiteralUnion, signIn } from 'next-auth/react'
import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from './buttonSignIn.module.css'
import { BuiltInProviderType } from 'next-auth/providers/index'
import { useRouter } from 'next/navigation'

interface Props {
    companyName: LiteralUnion<BuiltInProviderType>
    imageUrl: string
}

export const ButtonSignIn: FunctionComponent<Props> = ({ companyName, imageUrl }) => {
    const router = useRouter()

    return (
        <button
            className={styles.btn}
            onClick={async () => {
                await signIn(companyName)
                router.push('/profile')
            }}
        >
            <Image src={imageUrl} alt="" width={35} height={35} />
        </button>
    )
}
