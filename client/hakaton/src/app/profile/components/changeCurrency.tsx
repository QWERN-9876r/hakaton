'use client'

import { FunctionComponent } from 'react'
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Api } from '@/api/main'
import { useSession } from 'next-auth/react'

const api = new Api()

export const ChangeCurrency: FunctionComponent = () => {
    const session = useSession()
    const changeCurrency = async (value: string) => {
        // @ts-ignore
        const res = await api.changeUserCurrency(session.data.email, value)
    }
    return (
        <ToggleButtonGroup onChange={(event, value) => changeCurrency(value[0])}>
            <ToggleButton value="RUB">
                <CurrencyRubleIcon />
            </ToggleButton>
            <ToggleButton value="EUR">
                <EuroSymbolIcon />
            </ToggleButton>
            <ToggleButton value="USD">
                <AttachMoneyIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}
