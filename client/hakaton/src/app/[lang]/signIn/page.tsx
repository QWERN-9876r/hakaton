import { FunctionComponent } from 'react'
import { getDictionary } from '../dictionaries'
import { Container } from './container'

interface Props {
    params: {
        lang: 'en' | 'ru'
    }
}

const SignIn: FunctionComponent<Props> = async ({ params: { lang } }) => {
    const dict = await getDictionary(lang)

    return <Container dict={dict} />
}

export default SignIn
