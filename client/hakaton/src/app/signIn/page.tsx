'use client'

import { authorization } from '@/api/account/authorization'
import { RegistrationWindow } from '@/components/registation/registrationWindow'
import { signIn } from 'next-auth/react'
import { FunctionComponent } from 'react'

const SignIn: FunctionComponent = () => {
    return (
        <main>
            <RegistrationWindow name="Sign In" callback={authorization} />
        </main>
    )
}

export default SignIn
