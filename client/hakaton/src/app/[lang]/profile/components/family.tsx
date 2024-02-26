'use client'

import { TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import styles from '../page.module.css'
import { FunctionComponent, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Api } from '@/api/main'

const api = new Api()

interface Props {
    dict: Record<string, string>
}

const Family: FunctionComponent<Props> = ({ dict }) => {
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
        //@ts-ignore
        const res = await api.addUserInFamily(session.data?.email as string, addedEmail)

        if (!res || 'error' in res) return setError(res?.error || 'error')
        //@ts-ignore
        else updateData(session.data?.email as string)
    }

    useEffect(() => {
        //@ts-ignore
        if (session.data?.email) updateData(session.data?.email)
    }, [session])

    const createFamily = async () => {
        //@ts-ignore
        if (!session.data?.email) return
        //@ts-ignore
        const res = await api.createFamily(session.data.email as string)

        if (res?.error) setError(res.error)
        //@ts-ignore
        else updateData(session.data?.email)
    }

    return (
        <>
            <h3>{dict['Family']}</h3>
            {!family.length ? (
                <div className={`${styles.profileInfo} ${styles.containerForButton}`}>
                    <div>
                        <Button onClick={createFamily} color="primary" variant="contained">
                            {dict['Create family']}
                        </Button>
                        <h4 className={styles.error}>{error}</h4>
                    </div>
                </div>
            ) : (
                <>
                    <br />
                    <h5>{dict['Add user to family']}:</h5>
                    <div>
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
                                {dict['Add']}
                            </Button>
                        </div>
                        <div style={{ marginTop: 16 }}>
                            {names.map((name, i) => (
                                <Accordion key={name}>
                                    <AccordionSummary>{name}</AccordionSummary>
                                    <AccordionDetails>
                                        <Button
                                            onClick={async () => {
                                                const res = await api.deleteUserFromFamily(family[i])

                                                console.log(res)
                                                //@ts-ignore
                                                updateData(session.data?.email as string)
                                            }}
                                        >
                                            {dict.delete}
                                        </Button>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </>
            )}
            <br />
        </>
    )
}

export default Family
