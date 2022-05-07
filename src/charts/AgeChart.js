import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { filterPlayerOnAge } from './handleData.js'
import './Style.css'

const AgeChart = (props) => {
    const { data } = props
    return (
        <div className='chart'>
            <h1>Age Chart</h1>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={filterPlayerOnAge(data)}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default AgeChart