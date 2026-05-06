"use client";
import React, { useMemo } from 'react';
import { PieChart, Cell, Pie,  Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatsPage = () => {
    const data = useMemo(() => {
        if (typeof window === 'undefined') return [];
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
        return chartData;
    }, []);

    const COLORS = ['#244D3F', '#7E35E1', '#37A163'];

    return (
        <div className='mx-auto w-full max-w-5xl p-4 sm:p-6'>
            <h1 className='mb-6 text-2xl font-bold sm:text-4xl md:text-5xl'>Friendship Analytics</h1>
            <div className='rounded-lg bg-white p-3 shadow-lg sm:p-6'>
                <h2 className='mb-4 text-lg font-semibold text-[#244D3F] sm:text-xl md:px-2'>By Interaction Type</h2>
                <div>
                    <ResponsiveContainer width="100%" height={320}>
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