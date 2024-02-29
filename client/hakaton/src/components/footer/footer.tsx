'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
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
import { PageLoading } from '../pageLoading/pageLoading'

const PATHS = ['/profile', '/', '/statistic'] as const
const PAGES_WITH_FAB = ['', '/statistic']

interface Props {
    dict: Record<string, string>
    lang: 'ru' | 'en'
}

export const Footer: FunctionComponent<Props> = ({ dict, lang }) => {
    const getPath = (path: string) => `/${lang}${path}`
    const { status, data } = useSession()
    const currentPath = usePathname()
    const [value, setValue] = useState(
        PATHS.reduce((acc, path, i) => (getPath(path == '/' ? '' : path) == currentPath ? i + acc : acc), 0),
    )
    const router = useRouter()
    useEffect(() => {
        if (!value) {
            if (status === 'loading') return

            router.push(status === 'authenticated' ? '/profile' : '/signUp')
            return
        }

        router.push(PATHS[value])
    }, [value])
    useEffect(() => {
        // console.log(PATHS[value], value)
        if (
            status === 'unauthenticated' &&
            // @ts-ignore
            !data?.email &&
            currentPath !== getPath('/signUp') &&
            currentPath !== getPath('/signIn')
        ) {
            status === 'unauthenticated' && router.push('/signUp')
        }
    }, [status, currentPath])

    return (
        <footer className={styles.footer}>
            <Box sx={{ width: '100vw' }}>
                {PAGES_WITH_FAB.map(getPath).includes(currentPath) && (
                    <Link href="/add" className={styles.fab}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Link>
                )}
                <PageLoading />
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue: number) => {
                        setValue(newValue)
                    }}
                >
                    {status === 'loading' ? (
                        <BottomNavigationAction label={dict['Loading']} icon={<HourglassBottomIcon />} />
                    ) : (
                        <BottomNavigationAction
                            label={status === 'authenticated' ? dict['Profile'] : dict['Sign In']}
                            icon={status === 'authenticated' ? <AccountCircleIcon /> : <LoginIcon />}
                        />
                    )}
                    <BottomNavigationAction label={dict['Home']} icon={<HomeIcon />} />
                    <BottomNavigationAction label={dict['Statistic']} icon={<BarChartIcon />} />
                </BottomNavigation>
            </Box>
        </footer>
    )
}
