import styles from '../page.module.css'
import { ToggleButton, ToggleButtonGroup, Button } from '@mui/material'
import { signOut } from 'next-auth/react'

import { ChangeCurrency } from './changeCurrency'
import { FunctionComponent } from 'react'
import { Api } from '@/api/main'

interface Props {
    dict: Record<string, string>
    email: string
}

const api = new Api()

const Settings: FunctionComponent<Props> = ({ dict, email }) => {
    return (
        <>
            <h3>{dict['Settings']}</h3>
            <div className={styles.profileInfo}>
                <div>
                    <div className={styles.leftMargin}>
                        <h4>{dict['Language']}</h4>
                        <ToggleButtonGroup
                            onChange={(event, value) => {
                                api.setUserLanguage(email, value)
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
                        {dict['Sign Out']}
                    </Button>
                </div>
                <div className={styles.leftMargin}>
                    <h4>{dict['Currency']}</h4>
                    <ChangeCurrency />
                </div>
            </div>
        </>
    )
}

export default Settings
