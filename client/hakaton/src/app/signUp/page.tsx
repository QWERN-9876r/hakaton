import type { FunctionComponent } from "react"
import { Card, TextField, Button } from '@mui/material'
import styles from './page.module.css'
import { ButtonSignIn } from "@/components/buttonSignIn/buttonSignIn"

const SignUp: FunctionComponent = () => {
    return <main className={styles.main}>
        <section className={styles.mainInner}>
            <Card variant="outlined" className={styles.mainCard}>
                <h1 className={styles.heading}>Sign Up</h1>
                <TextField variant="standard" label="Email" type="email" />
                <div className={`${styles.passwordInput}`}>
                    <TextField className={styles.passwordInput} variant="standard" label="Password" type="password" />
                </div>
                <section className={styles.otherLogIn}>
                    <ButtonSignIn companyName="google" imageUrl="https://authjs.dev/img/providers/google.svg" />
                    <ButtonSignIn companyName="yandex" imageUrl="yandex icon.svg" />
                </section>
                <Button variant="contained" color="primary">Sign Up</Button>
            </Card>
            <div className={styles.alreadyRegConteiner}>
                <Button variant="text" color="primary" className={styles.alreadyReg}>Already Registered</Button>
            </div>
        </section>
    </main>
}

export default SignUp