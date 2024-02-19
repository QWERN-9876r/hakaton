import { isValidEmail } from '../account/helpers'

export const deleteUserFromFamily = (deletedId: string) => {
    try {
        return fetch(`http://192.168.1.83:3001/add_user_in_family`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deletedId }),
        })
    } catch (error) {
        console.error(error)
        return null
    }
}
