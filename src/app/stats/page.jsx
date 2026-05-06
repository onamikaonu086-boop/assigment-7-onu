"use client";
import React, { useEffect, useState } from 'react';
import { PieChart, Cell, Pie,  Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const timeline = JSON.parse(localStorage.getItem('timeline')) || [];

        let call = 0;
        let message = 0;
        let video = 0;

        timeline.forEach(item => {
            if (item.type === 'call') call++;
            else if (item.type === 'message') message++;
            else if (item.type === 'video') video++;
        });
        const chartData = [
            { name: 'Call', value: call },
            { name: 'Message', value: message },
            { name: 'Video', value: video }
        ];

        setData(chartData);
    }, []);

    const COLORS = ['#244D3F', '#7E35E1', '#37A163'];

    return (
        <div className='p-6 md:w-8/12 mx-auto'>
            <h1 className='text-2xl md:text-5xl font-bold mb-6'>Friendship Analytics</h1>
            <div className='bg-white rounded-lg shadow-lg p-3 md:p-6'>
                <h2 className='text-lg text-[#244D3F] md:text-xl font-semibold mb-4 md:p-8'>By Interaction Type</h2>
                <div>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="50%"
                                fill='#8884d8'
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;