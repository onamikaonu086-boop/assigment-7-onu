"use client";
import React, { useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

const TimelinePage = () => {
    const [timeline, setTimeline] = useState(() => {
        if (typeof window === 'undefined') return [];
        return JSON.parse(localStorage.getItem('timeline')) || [];
    });
    const [filter, setFilter] = useState('all');
    const filteredTimeline = 
        filter === 'all' 
        ? timeline 
        : timeline.filter(item => item.type === filter);

    const getIcon = (type) => {
        if (type === 'call') return '📞';
        if (type === 'message') return '💬';
        if (type === 'video') return '📹';
        return '📝';
    }

    const handleClearTimeline = () => {
        localStorage.removeItem("timeline");
        setTimeline([]);
    }
    return (
        <div className='mx-auto w-full max-w-5xl p-4 sm:p-6'>
                <h1 className='text-left text-2xl font-bold sm:text-3xl'>Timeline</h1>
            <div className='my-4 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className='btn w-full sm:w-auto'>
                    <option value='all'>All</option>
                    <option value='call'>Calls</option>
                    <option value='message'>Messages</option>
                    <option value='video'>Video Calls</option>
                </select>
                <button onClick={handleClearTimeline} className='btn btn-outline w-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white sm:w-auto'>
                   <FaDeleteLeft /> Clear
                </button>
            </div>

            {timeline.length === 0 ? (
                <p className='text-gray-700 text-2xl text-center py-5'>No interactions yet</p>
            ) : (
                filteredTimeline.map((item) => (
                    <div key={item.id} className='mb-4 flex items-center gap-4 rounded-lg bg-white p-4 shadow-md'>
                        <div className='text-2xl'>{getIcon(item.type)}</div>
                        <div>
                            <p className='font-semibold text-stone-600'>{item.title}</p>
                            <p className='text-gray-500 text-sm'>
                                {new Date(item.date).toDateString()}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TimelinePage;