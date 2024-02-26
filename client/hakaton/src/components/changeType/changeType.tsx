import { FunctionComponent, SyntheticEvent } from 'react'
import { Box } from '@mui/material'
import { StyledTab, StyledTabs } from '@/components/customTubs/customTubs'

interface Props {
    type: number
    handleChangeType: (event: SyntheticEvent, newValue: number) => void
    dict: Record<string, string>
}

export const ChangeType: FunctionComponent<Props> = ({ type, handleChangeType, dict }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'none' }}>
                <StyledTabs value={type} onChange={handleChangeType} aria-label="styled tabs example">
                    <StyledTab label={dict.expenditures} />
                    <StyledTab label={dict.income} />
                </StyledTabs>
                <Box sx={{ p: 3 }} />
            </Box>
        </Box>
    )
}
