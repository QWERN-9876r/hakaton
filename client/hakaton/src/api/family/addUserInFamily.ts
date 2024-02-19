import { isValidEmail } from '../account/helpers'

export const addUserInFamily = (email: string, addedEmail: string) => {
    if (!isValidEmail(addedEmail)) return { error: 'Please enter a valid email' }

    try {
        return fetch(`http://192.168.1.83:3001/add_user_in_family`, {
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
