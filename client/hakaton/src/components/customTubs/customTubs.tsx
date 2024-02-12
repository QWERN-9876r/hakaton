import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'

interface StyledTabsProps {
    children?: React.ReactNode
    value: number
    onChange: (event: React.SyntheticEvent, newValue: number) => void
}

export const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        minHeight: '500px',
        zIndex: -1,
        borderRadius: '15px',
    },
    '& .MuiTabs-indicatorSpan': {
        display: 'block',
        width: '100%',
        backgroundColor: '#000',
        borderRadius: '15px',
    },
})

interface StyledTabProps {
    label: string
}

export const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}))

// export default function CustomizedTabs() {
//     const [value, setValue] = useState(0)

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue)
//     }

//     return (
//         <Box sx={{ width: '100%' }}>
//             <Box sx={{ bgcolor: 'none' }}>
//                 <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
//                     <StyledTab label="Workflows" />
//                     <StyledTab label="Datasets" />
//                 </StyledTabs>
//                 <Box sx={{ p: 3 }} />
//             </Box>
//         </Box>
//     )
// }
