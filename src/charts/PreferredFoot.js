import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { filterPlayerOnPreferredFoot } from './handleData.js'
import './Style.css'


const PreferredFoot = (props) => {
    const { data } = props
    return (
        <div className='chart'>
            <h1>Preferred Foot Chart</h1>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={filterPlayerOnPreferredFoot(data)}
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

export default PreferredFoot