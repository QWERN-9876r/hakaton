'use client'

import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { Button, CircularProgress, Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import Image from 'next/image'
import FaceIcon from '@mui/icons-material/Face'
import { FunctionComponent } from 'react'
import { signOut } from 'next-auth/react'
import Item from '@/components/item/item'
import Settings from './components/settings'
import Family from './components/family'
import { useTheme } from "@mui/material"

const Profile: FunctionComponent = () => {
    // const session = await getServerSession(authConfig)
    const session = useSession()
    // const theme = useTheme()

    console.log(session.data?.user && Object.keys(session.data?.user))
    return (
        <main style={{ margin: 0.5 }}>
            {session?.status === 'authenticated' && (
                <>
                    <Box
                        component="div"
                        sx={{
                            display: 'grid',
                            gridTemplateRows: '100px 300px 172px',
                        }}
                    >
                        <Item>
                            {session.data.user?.image && (
                                <div className={styles.profileInfo}>
                                    <Image src={session.data.user.image} alt="" width={66} height={66} />
                                    <span>
                                        <h2 className={styles.leftMargin}>{session.data?.user?.name}</h2>
                                        <h5 style={{ opacity: 0.9 }} className={styles.leftMargin}>
                                            {session.data?.user?.email}
                                        </h5>
                                    </span>
                                </div>
                            )}
                        </Item>
                        <Item>
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
