import { FunctionComponent, SyntheticEvent } from 'react'
import { Box } from '@mui/material'
import { StyledTab, StyledTabs } from '@/components/customTubs/customTubs'
import { i18n } from '@/data/i18n'

interface Props {
    type: number
    handleChangeType: (event: SyntheticEvent, newValue: number) => void
}

export const ChangeType: FunctionComponent<Props> = ({ type, handleChangeType }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'none' }}>
                <StyledTabs value={type} onChange={handleChangeType} aria-label="styled tabs example">
                    <StyledTab label={i18n.expenditures} />
                    <StyledTab label={i18n.income} />
                </StyledTabs>
                <Box sx={{ p: 3 }} />
            </Box>
        </Box>
    )
}
