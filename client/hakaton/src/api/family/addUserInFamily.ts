import { isValidEmail } from '../account/helpers'
import env from '../env.json'

export const addUserInFamily = (email: string, addedEmail: string) => {
    if (!isValidEmail(addedEmail)) return { error: 'Please enter a valid email' }

    try {
        return fetch(`${env.SERVER_URL}/add_user_in_family`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, addedEmail }),
        })
    } catch (error) {
        console.error(error)
        return null
    }
}
