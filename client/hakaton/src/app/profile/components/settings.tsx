import styles from '../page.module.css'
import { ToggleButton, ToggleButtonGroup, Button } from '@mui/material'
import { signOut } from 'next-auth/react'

import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { i18n } from '@/data/i18n'

const Settings = () => {
    return (
        <>
            <h3>{i18n.Settings}</h3>
            <div className={styles.profileInfo}>
                <div>
                    <h4>{i18n.Theme}</h4>
                    <ToggleButtonGroup>
                        <ToggleButton value="dark">
                            <DarkModeIcon />
                        </ToggleButton>
                        <ToggleButton value="light">
                            <LightModeIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <br />
                    <br />
                    <Button
                        onClick={() => {
                            signOut()
                        }}
                    >
                        {i18n['Sign Out']}
                    </Button>
                </div>
                <div className={styles.leftMargin}>
                    <h4>{i18n.Language}</h4>
                    <ToggleButtonGroup onChange={(event, value) => localStorage.setItem('lang', value as 'ru' | 'en')}>
                        <ToggleButton value="ru">RU</ToggleButton>
                        <ToggleButton value="en">EN</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className={styles.leftMargin}>
                    <h4>{i18n.Currency}</h4>
                    <ToggleButtonGroup>
                        <ToggleButton value="0">
                            <CurrencyRubleIcon />
                        </ToggleButton>
                        <ToggleButton value="1">
                            <EuroSymbolIcon />
                        </ToggleButton>
                        <ToggleButton value="2">
                            <CurrencyYenIcon />
                        </ToggleButton>
                        <ToggleButton value="3">
                            <AttachMoneyIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        </>
    )
}

export default Settings
