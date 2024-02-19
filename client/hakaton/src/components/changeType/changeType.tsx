import { FunctionComponent, SyntheticEvent } from 'react'
import { Box } from '@mui/material'
import { StyledTab, StyledTabs } from '@/components/customTubs/customTubs'

interface Props {
    type: number
    handleChangeType: (event: SyntheticEvent, newValue: number) => void
}

export const ChangeType: FunctionComponent<Props> = ({ type, handleChangeType }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'none' }}>
                <StyledTabs value={type} onChange={handleChangeType} aria-label="styled tabs example">
                    <StyledTab label="expenditure" />
                    <StyledTab label="income" />
                </StyledTabs>
                <Box sx={{ p: 3 }} />
            </Box>
        </Box>
    )
}
