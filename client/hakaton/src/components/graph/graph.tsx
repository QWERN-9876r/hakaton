'use client'

import { PieChart, PieValueType } from "@mui/x-charts";
import { FunctionComponent } from "react";

interface Props {
    data: PieValueType[]
}
export const Graph: FunctionComponent<Props> = ({data}) => {
    return (
        (data ? <PieChart series={
            [
                {
                    data: data,
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 2.5,
                    cornerRadius: 1,
                    // startAngle: -90,
                    // cx: 150,
                    // cy: 150,
                },
            ]
        }
        width={400}
        height={400}>
        </PieChart>
        : <div></div>)
    )
}