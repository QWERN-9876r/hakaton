'use client'

import { authorization } from '@/api/account/authorization'
import { RegistrationWindow } from '@/components/registation/registrationWindow'
import { FunctionComponent } from 'react'

interface Props {
    dict: Record<string, string>
}

export const Container: FunctionComponent<Props> = ({ dict }) => {
    return (
        <main>
            <RegistrationWindow name="Sign In" callback={authorization} dict={dict} />
        </main>
    )
}
