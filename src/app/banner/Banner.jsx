import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='text-center space-y-3 my-10 md:my-20 mx-3 '>
                <h1 className='font-bold text-4xl md:text-5xl'>Friends to keep close in your life</h1>
                <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='text-lg bg-[#244D3F] text-white px-3 py-2 rounded'>+ Add a Friend</button>
            </div>
            <div className='flex flex-col md:flex-row  text-center justify-between items-center md: w-6/12 mx-auto '>
                <div className='space-y-3.5 mb-5'>
                    <h3 className='font-semibold text-[#244D3F] text-4xl'>10</h3>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='space-y-3.5 mb-5'>
                    <h3 className='font-semibold text-[#244D3F] text-4xl'>3</h3>
                    <p className='text-[#64748B]'>On Track</p>
                </div>
                <div className='space-y-3.5 mb-5'>
                    <h3 className='font-semibold text-[#244D3F] text-4xl'>6</h3>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>
                <div className='space-y-3.5 mb-5'>
                    <h3 className='font-semibold text-[#244D3F] text-4xl'>12</h3>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;