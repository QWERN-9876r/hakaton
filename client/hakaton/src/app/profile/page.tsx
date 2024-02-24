'use client'

import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { Button, CircularProgress, Box, ToggleButton, ToggleButtonGroup, TextField, Input } from '@mui/material'
import Image from 'next/image'
import FaceIcon from '@mui/icons-material/Face'
import { FunctionComponent, useState } from 'react'
import { signOut } from 'next-auth/react'
import Item from '@/components/item/item'
import Settings from './components/settings'
import Family from './components/family'
import { useTheme } from '@mui/material'
import { Api } from '@/api/main'

const api = new Api()

export interface Session {
    email: string
    exp: number
    iat: number
    jti: string
    name: string
    picture: string
    sub: string
}

const Profile: FunctionComponent = () => {
    // const session = await getServerSession(authConfig)
    let session = useSession()

    const [name, setName] = useState('')

    const addName = async () => {
        const res = await api.addUserName(name, session.data?.user?.email as string)
        if (!res) return

        // if( typeof session.data?.user?.name === 'string') session.data.user.name = name

        console.log(
            'up',
            await session.update({
                ...session.data,
                user: {
                    ...session.data?.user,
                    name,
                },
            }),
        )
        setName('')
    }

    // const theme = useTheme()

    console.log(session.data)
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
                                                save
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }
                        </Item>
                        <Item sx={{ overflow: 'auto' }}>
                            <Family />
                        </Item>
                        <Item>
                            <Settings />
                        </Item>
                    </Box>
                </>
            )}
        </main>
    )
}

export default Profile
