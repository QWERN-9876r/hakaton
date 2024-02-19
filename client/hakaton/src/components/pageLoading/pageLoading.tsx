'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { useSession } from 'next-auth/react'

export const PageLoading: FunctionComponent = () => {
    const [progress, setProgress] = useState(0)
    const { status } = useSession()

    const rec = () => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
                return 100
            }
            const diff = Math.random() * 10
            return Math.min(oldProgress + diff, 100)
        })
        if (progress < 100) setTimeout(rec, (500 * progress) / 10)
    }
    setTimeout(rec, 500)

    useEffect(() => {
        status !== 'loading' && setProgress(100)
    }, [status])

    return progress < 100 ? <LinearProgress variant="determinate" value={progress} /> : null
}
