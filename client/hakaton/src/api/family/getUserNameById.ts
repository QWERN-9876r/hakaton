export const getUserNameById: (userId: string) => Promise<{ error: string } | { name: string }> = async (userId) => {
    const res = await fetch(`http://192.168.1.83:3001/user_name?id=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'force-cache',
        next: {
            revalidate: 8.64e7,
        },
    })

    return res.json()
}
