'use client'

import type { FunctionComponent } from 'react'
import { RegistrationWindow } from '@/components/registation/registrationWindow'
import { registration } from '@/api/account/registration'
import { signIn } from 'next-auth/react'

const SignUp: FunctionComponent = () => {
    return (
        <main>
            <RegistrationWindow name="Sign Up" callback={registration} />
        </main>
    )
}

export default SignUp
