import styles from '../page.module.css'
import { ToggleButton, ToggleButtonGroup, Button } from '@mui/material'
import { signOut } from 'next-auth/react'

import { i18n } from '@/data/i18n'
import { ChangeCurrency } from './changeCurrency'

const Settings = () => {
    return (
        <>
            <h3>{i18n.Settings}</h3>
            <div className={styles.profileInfo}>
                <div>
                    <div className={styles.leftMargin}>
                        <h4>{i18n.Language}</h4>
                        <ToggleButtonGroup
                            onChange={(event, value) => {
                                localStorage.setItem('lang', value as 'ru' | 'en')
                                location.reload()
                            }}
                        >
                            <ToggleButton value="ru">RU</ToggleButton>
                            <ToggleButton value="en">EN</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    {/* <h4>{i18n.Theme}</h4>
                    <ToggleButtonGroup>
                        <ToggleButton value="dark">
                            <DarkModeIcon />
                        </ToggleButton>
                        <ToggleButton value="light">
                            <LightModeIcon />
                        </ToggleButton>
                    </ToggleButtonGroup> */}
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
                    <h4>{i18n.Currency}</h4>
                    <ChangeCurrency />
                </div>
            </div>
        </>
    )
}

export default Settings
