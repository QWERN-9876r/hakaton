'use client'

import { TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import styles from '../page.module.css'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Api } from '@/api/main'

const api = new Api()

const Family = () => {
    const [family, setFamily] = useState<string[]>([])
    const [names, setNames] = useState<string[]>([])
    const [addedEmail, setAddedEmail] = useState('')
    const [error, setError] = useState('')
    const session = useSession()

    const updateData = async (email: string) => {
        const res = await api.getUsersInFamily(email)

        if (!Array.isArray(res)) return setError(res ? res.error : 'error')
        setFamily([...res])

        for (let i = 0; i < res.length; i++) {
            const response = await api.getUserNameById(res[i])

            if ('error' in response) {
                return setError(response.error)
            }

            res[i] = response.name
        }

        setNames(res)
    }

    const addUserInFamily = async () => {
        const res = await api.addUserInFamily(session.data?.user?.email as string, addedEmail)

        if (!res || 'error' in res) return setError(res?.error || 'error')
        else updateData(session.data?.user?.email as string)
    }

    useEffect(() => {
        if (session.data?.user?.email) updateData(session.data?.user?.email)
    }, [session])

    const createFamily = async () => {
        if (!session.data?.user?.email) return

        const res = await api.createFamily(session.data.user?.email as string)

        if (res?.error) setError(res.error)
        else updateData(session.data?.user?.email)
    }

    return (
        <>
            <h3>Family</h3>
            {!family.length ? (
                <div className={`${styles.profileInfo} ${styles.containerForButton}`}>
                    <div>
                        <Button onClick={createFamily} color="primary" variant="contained">
                            Create family
                        </Button>
                        <h4 className={styles.error}>{error}</h4>
                    </div>
                </div>
            ) : (
                <>
                    <br />
                    <h5>Add user to family:</h5>
                    <div>
                        <TextField
                            variant="standard"
                            label="Email"
                            type="email"
                            onChange={(event) => setAddedEmail(event.target.value)}
                        />
                        <Button
                            style={{ marginBottom: 10 }}
                            color="primary"
                            variant="contained"
                            onClick={addUserInFamily}
                        >
                            Add
                        </Button>
                        {names.map((name, i) => (
                            <Accordion key={name}>
                                <AccordionSummary>{name}</AccordionSummary>
                                <AccordionDetails>
                                    <Button onClick={ async () => {
                                        const res = await api.deleteUserFromFamily(family[i])
                                    }} >delete</Button>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </>
            )}
            <br />
        </>
    )
}

export default Family
