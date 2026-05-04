"use client";
import Link from 'next/link';
import React, { Children, useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'
import { usePathname } from 'next/navigation';
import { FaChartBar, FaHome } from 'react-icons/fa';
import { FaTimeline } from 'react-icons/fa6';


const Navbar = () => {
    const pathname = usePathname();

    const links = <>
        <li><Link
            href='/'
            className={pathname === '/' ? 'bg-[#244D3F] font-semibold text-white' : ''}
        >
            <FaHome className='inline-block mr-1' />
            Home
            </Link></li>

        <li><Link
            href='/timeline'
            className={pathname === '/timeline' ? 'bg-[#244D3F] font-semibold text-white' : ''}
        >
            <FaTimeline className='inline-block mr-1' />
            Timeline</Link></li>

        <li><Link
            href='/stats'
            className={pathname === '/stats' ? 'bg-[#244D3F] font-semibold text-white' : ''}
        >
            <FaChartBar className='inline-block mr-1' />
            Stats</Link></li>
    </>


    return (
        <div className="navbar bg-base-100 shadow-lg md:px-17">
            <div className="flex-1">
                <Image src={logo} alt="logo" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 md:gap-4 gap-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;