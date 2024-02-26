import { getDictionary } from '../dictionaries'
import { Container } from './components/container'
import { FunctionComponent } from 'react'

export interface Session {
    email: string
    exp: number
    iat: number
    jti: string
    name: string
    picture: string
    sub: string
}

interface Props {
    params: {
        lang: 'ru' | 'en'
    }
}

const Profile: FunctionComponent<Props> = async ({ params: { lang } }) => {
    // const session = await getServerSession(authConfig)
    const dict = await getDictionary(lang)
    // const theme = useTheme()

    return <Container dict={dict} />
}

export default Profile
