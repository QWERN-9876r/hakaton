'use client'

import { FunctionComponent, useState } from 'react'
import styles from './registration.module.css'
import { Card, TextField, Button } from '@mui/material'
import { ButtonSignIn } from '../buttonSignIn/buttonSignIn'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { AuthFunction, ErrorMessage } from '@/api/account/registration'

interface Props {
    name: 'Sign Up' | 'Sign In'
    callback: AuthFunction
    dict: Record<string, string>
}

export const RegistrationWindow: FunctionComponent<Props> = ({ name, callback, dict }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<ErrorMessage | ''>('')
    const router = useRouter()

    const heandler = async () => {
        const res = await callback({ email, password })

        if (!res.ok) {
            setError(res.error)
        } else {
            const { email, id, name, key } = res

            signIn('credentials', { email, id, name: name || '', key })
            router.push('/profile')
        }
    }

    return (
        <section className={styles.mainInner}>
            <Card variant="outlined" className={styles.mainCard}>
                <h1 className={styles.heading}>{dict[name]}</h1>
                <TextField
                    variant="standard"
                    label="Email"
                    type="email"
                    onChange={(evt) => setEmail(evt.target.value)}
                />
                <div className={`${styles.passwordInput}`}>
                    <TextField
                        className={styles.passwordInput}
                        variant="standard"
                        label={dict['Password']}
                        type="password"
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                </div>
                {error && <p className={styles.error}>{dict['error']}</p>}
                <section className={styles.otherLogIn}>
                    <ButtonSignIn companyName="google" imageUrl="https://authjs.dev/img/providers/google.svg" />
                    <ButtonSignIn companyName="yandex" imageUrl="/yandexIcon.svg" />
                </section>
                <Button variant="contained" color="primary" onClick={heandler}>
                    {dict[name]}
                </Button>
            </Card>
            <div className={styles.alreadyRegConteiner}>
                <Link href={name === 'Sign Up' ? '/signIn' : '/signUp'}>
                    <Button variant="text" color="primary" className={styles.alreadyReg}>
                        {name === 'Sign Up' ? dict['Already Registered'] : dict["Don't have an account"]}
                    </Button>
                </Link>
            </div>
        </section>
    )
}
