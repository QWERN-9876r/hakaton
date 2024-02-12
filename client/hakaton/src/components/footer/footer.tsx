'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
// import Alert from "@mui/material/Alert"
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import BarChartIcon from '@mui/icons-material/BarChart'
import styles from './footer.module.css'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom'
import Link from 'next/link'

const PATHS = ['/profile', '/', '/statistic'] as const

export const Footer: FunctionComponent = () => {
    const { status } = useSession()
    const currentPath = usePathname()
    const [value, setValue] = useState(PATHS.reduce((acc, path, i) => (path == currentPath ? i + acc : acc), 0))
    const router = useRouter()

    useEffect(() => {
        if (!value) {
            if (status === 'loading') return
            router.push(status === 'authenticated' ? '/profile' : '/signUp')
            return
        }
        router.push(PATHS[value])
    }, [value])

    return (
        <footer className={styles.footer}>
            <Box sx={{ width: '100vw' }}>
                {/* <Alert severity="warning" className='alert'>
                Денег нет, но вы держитесь!
            </Alert> */}
                <Link href="/add">
                    <Fab color="primary" aria-label="add" className={styles.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue: number) => {
                        setValue(newValue)
                    }}
                >
                    {status === 'loading' ? (
                        <BottomNavigationAction label="Loading..." icon={<HourglassBottomIcon />} />
                    ) : (
                        <BottomNavigationAction
                            label={status === 'authenticated' ? 'Profile' : 'Log in'}
                            icon={status === 'authenticated' ? <AccountCircleIcon /> : <LoginIcon />}
                        />
                    )}
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Statistic" icon={<BarChartIcon />} />
                </BottomNavigation>
            </Box>
        </footer>
    )
}
