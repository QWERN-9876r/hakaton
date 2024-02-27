'use client'

import { registration } from '@/api/account/registration'
import { RegistrationWindow } from '@/components/registation/registrationWindow'
import { FunctionComponent } from 'react'

interface Props {
    dict: Record<string, string>
}

export const Container: FunctionComponent<Props> = ({ dict }) => {
    return (
        <main>
            <RegistrationWindow name="Sign Up" callback={registration} dict={dict} />
        </main>
    )
}
