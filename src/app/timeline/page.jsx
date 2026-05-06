"use client";
import React, { useEffect, useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

const page = () => {
    const [timeline, setTimeline] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('timeline')) || [];
        setTimeline(data);
    }, []);
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
        <div className='p-4 md:p-6 md:w-8/12 mx-auto'>
                <h1 className='text-3xl font-bold text-left'>Timeline</h1>
            <div className='my-4 w-full flex justify-between gap-4'>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className='btn'>
                    <option value='all'>All</option>
                    <option value='call'>Calls</option>
                    <option value='message'>Messages</option>
                    <option value='video'>Video Calls</option>
                </select>
                <button onClick={handleClearTimeline} className='btn btn-outline bg-red-100 text-red-600 hover:bg-red-600 hover:text-white'>
                   <FaDeleteLeft /> Clear
                </button>
            </div>

            {timeline.length === 0 ? (
                <p className='text-gray-700 text-2xl text-center py-5'>No interactions yet</p>
            ) : (
                filteredTimeline.map((item) => (
                    <div key={item.id} className='bg-white shadow-md p-4 rounded-lg mb-4 flex items-center gap-4'>
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

export default page;