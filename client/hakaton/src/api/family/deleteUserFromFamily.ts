import env from '../env.json'
export const deleteUserFromFamily = (deletedId: string) => {
    try {
        return fetch(`${env.SERVER_URL}/delete_user_in_family`, {
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
