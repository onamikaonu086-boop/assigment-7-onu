import React from 'react';

const Banner = () => {
    return (
        <div className='mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto my-8 space-y-3 text-center sm:my-14'>
                <h1 className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl'>Friends to keep close in your life</h1>
                <p className='mx-auto max-w-2xl text-sm text-[#64748B] sm:text-base'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className='rounded bg-[#244D3F] px-4 py-2 text-base text-white sm:text-lg'>+ Add a Friend</button>
            </div>
            <div className='grid grid-cols-2 gap-4 rounded-xl bg-white p-4 text-center shadow-sm sm:grid-cols-4 sm:gap-6'>
                <div className='space-y-2'>
                    <h3 className='text-3xl font-semibold text-[#244D3F] sm:text-4xl'>10</h3>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-3xl font-semibold text-[#244D3F] sm:text-4xl'>3</h3>
                    <p className='text-[#64748B]'>On Track</p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-3xl font-semibold text-[#244D3F] sm:text-4xl'>6</h3>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-3xl font-semibold text-[#244D3F] sm:text-4xl'>12</h3>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;