import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from "recharts";


const Statistics = () => {
    const marks = [
        { name: 'Assignment 1', value: 60 },
        { name: 'Assignment 2', value: 59 },
        { name: 'Assignment 3', value: 57 },
        { name: 'Assignment 4', value: 55 },
        { name: 'Assignment 5', value: 35 },
        { name: 'Assignment 6', value: 58 },
    ];
    return (
        <div className='flex items-center justify-center'>
            <PieChart width={500} height={500}>
                <Pie
                    dataKey="value"
                    data={marks}
                    cx={200}
                    cy={300}
                    outerRadius={80}
                    fill="skyblue"
                    label
                />
                <Tooltip />
            </PieChart>

        </div>
    );
};

export default Statistics;