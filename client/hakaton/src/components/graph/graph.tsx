'use client'

import { BarChart, HighlightScope, PieValueType } from '@mui/x-charts'
import { FunctionComponent, useState } from 'react'

interface Props {
    data: PieValueType[]
}
export const Graph: FunctionComponent<Props> = ({ data }) => {
    const [highlighted, setHighlighted] = useState('item')
    const [faded, setFaded] = useState('global')

    const barChartsParams = {
        series: [
            { data: [3, 4, 1, 6, 5], label: 'Транспорт' },
            { data: [4, 3, 1, 5, 8], label: 'ЖКХ' },
            { data: [4, 2, 5, 4, 1], label: 'Медицина' },
        ],
        height: 300,
    }
    return data ? (
        <BarChart
            {...barChartsParams}
            series={barChartsParams.series.map((series) => ({
                ...series,
                highlightScope: {
                    highlighted,
                    faded,
                } as HighlightScope,
            }))}
        />
    ) : (
        <div></div>
    )
}
