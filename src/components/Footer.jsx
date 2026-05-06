"use client";
import React from 'react';
import Image from 'next/image';
import FooterLogo from '../assets/logo-xl.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='mt-10 bg-[#24473F] py-6 text-center text-gray-600'>
            <div className='mx-auto w-full max-w-6xl px-4 pb-3 sm:px-6 lg:px-8'>
                <Image src={FooterLogo} alt="Logo" className='mx-auto mt-6 h-auto w-56 sm:w-72' />
                <p className='mx-auto mt-3 max-w-xl text-sm text-gray-400 sm:text-base'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='mt-4 font-semibold text-white'>Social Links</p>
                <div className='flex justify-center gap-4 mt-2'>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                        className='text-gray-400 hover:text-white'>
                        <Image src={facebook} alt="Facebook" className='w-6 h-6' />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                        className='text-gray-400 hover:text-white'>
                        <Image src={twitter} alt="Twitter" className='w-6 h-6' />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                        className='text-gray-400 hover:text-white'>
                        <Image src={instagram} alt="Instagram" className='w-6 h-6' />
                    </Link>
                </div>
            </div>

            <div className='mx-auto mt-6 flex w-full max-w-6xl flex-col items-center justify-between gap-3 border-t border-gray-600 px-4 pt-6 sm:px-6 md:flex-row lg:px-8'>
                <p className='text-center text-xs text-gray-500 md:text-left'>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='flex flex-col space-y-2 text-xs md:flex-row md:gap-5 md:space-y-0'>
                    <li>
                        <Link href="#" className='text-gray-500 hover:text-white'>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='text-gray-500 hover:text-white'>
                            Terms of Service
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='text-gray-500 hover:text-white'>
                            Cookies
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;