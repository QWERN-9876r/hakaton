import { FunctionComponent } from 'react'
import styles from './registration.module.css'
import { Card, TextField, Button } from '@mui/material'
import { ButtonSignIn } from '../buttonSignIn/buttonSignIn'
import Link from 'next/link'

interface Props {
    name: 'Sign Up' | 'Sign In'
}

export const RegistrationWindow: FunctionComponent<Props> = ({ name }) => {
    return (
        <section className={styles.mainInner}>
            <Card variant="outlined" className={styles.mainCard}>
                <h1 className={styles.heading}>{name}</h1>
                <TextField variant="standard" label="Email" type="email" />
                <div className={`${styles.passwordInput}`}>
                    <TextField className={styles.passwordInput} variant="standard" label="Password" type="password" />
                </div>
                <section className={styles.otherLogIn}>
                    <ButtonSignIn companyName="google" imageUrl="https://authjs.dev/img/providers/google.svg" />
                    <ButtonSignIn companyName="yandex" imageUrl="yandex icon.svg" />
                </section>
                <Button variant="contained" color="primary">
                    {name}
                </Button>
            </Card>
            <div className={styles.alreadyRegConteiner}>
                <Link href={name === 'Sign Up' ? '/signIn' : '/signUp'}>
                    <Button variant="text" color="primary" className={styles.alreadyReg}>
                        {name === 'Sign Up' ? 'Already Registered' : "Don't have an account"}
                    </Button>
                </Link>
            </div>
        </section>
    )
}
