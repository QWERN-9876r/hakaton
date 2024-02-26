'use client'

import styles from '../page.module.css'
import { useSession } from 'next-auth/react'
import { Button, Box, TextField } from '@mui/material'
import Image from 'next/image'
import FaceIcon from '@mui/icons-material/Face'
import { FunctionComponent, useState } from 'react'
import Item from '@/components/item/item'
import Settings from './settings'
import Family from './family'
import { Api } from '@/api/main'

interface Props {
    dict: Record<string, string>
}

const api = new Api()

export const Container: FunctionComponent<Props> = ({ dict }) => {
    let session = useSession()

    const [name, setName] = useState('')

    const addName = async () => {
        const res = await api.addUserName(name, session.data?.user?.email as string)

        if (!res) return

        // if( typeof session.data?.user?.name === 'string') session.data.user.name = name

        await session.update({
            ...session.data,
            user: {
                ...session.data?.user,
                name,
            },
        })
        setName('')
    }
    return (
        <main style={{ margin: 0.5 }}>
            {session?.status === 'authenticated' && (
                <>
                    <Box
                        component="div"
                        sx={{
                            display: 'grid',
                            gridTemplateRows: '100px 500px 200px',
                        }}
                    >
                        <Item>
                            {
                                //@ts-ignore
                                session.data.name ? (
                                    <div className={styles.profileInfo}>
                                        {
                                            //@ts-ignore
                                            !session.data.picture ? (
                                                <FaceIcon sx={{ width: 66, height: 66 }} />
                                            ) : (
                                                //@ts-ignore
                                                <Image src={session.data.picture} alt="" width={66} height={66} />
                                            )
                                        }
                                        <span>
                                            <h2 className={styles.leftMargin}>
                                                {
                                                    //@ts-ignore
                                                    session.data.name
                                                }
                                            </h2>
                                            <h5 style={{ opacity: 0.9 }} className={styles.leftMargin}>
                                                {
                                                    //@ts-ignore
                                                    session.data?.email
                                                }
                                            </h5>
                                        </span>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex' }}>
                                        {
                                            //@ts-ignore
                                            !session.data.picture ? (
                                                <FaceIcon sx={{ width: 66, height: 66 }} />
                                            ) : (
                                                <Image
                                                    src={
                                                        //@ts-ignore
                                                        session.data.picture
                                                    }
                                                    alt=""
                                                    width={66}
                                                    height={66}
                                                />
                                            )
                                        }
                                        <div style={{ display: 'flex' }}>
                                            {/* <label htmlFor="fileUpload"> */}
                                            {/* </label> */}
                                            {/* <input hidden id="fileUpload" type="file" accept="image/*" /> */}
                                            <div>
                                                <TextField
                                                    value={name}
                                                    onChange={(e) => {
                                                        setName(e.target.value)
                                                    }}
                                                    label="name"
                                                    id="name"
                                                    variant="standard"
                                                    type="username"
                                                />
                                                <h5>
                                                    {
                                                        //@ts-ignore
                                                        session.data.email
                                                    }
                                                </h5>
                                            </div>
                                            <Button
                                                sx={{ display: 'inline-block', height: 35 }}
                                                onClick={addName}
                                                type="submit"
                                                variant="contained"
                                            >
                                                {dict.save}
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }
                        </Item>
                        <Item sx={{ overflow: 'auto' }}>
                            <Family dict={dict} />
                        </Item>
                        <Item>
                            {/* @ts-ignore */}
                            <Settings dict={dict} email={session.data.email} />
                        </Item>
                    </Box>
                </>
            )}
        </main>
    )
}
