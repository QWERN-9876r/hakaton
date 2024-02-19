export const getUsersInFamily: (email: string) => Promise<string[] | { error: string } | null> = async (email) => {
    try {
        const res = await fetch(`http://192.168.1.83:3001/users_in_family?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res.json()
    } catch (error) {
        console.error(error)
        return null
    }
}
