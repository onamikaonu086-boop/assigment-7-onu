import React from 'react';
import Image from 'next/image';
import FooterLogo from '../assets/logo-xl.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='text-center py-6 mt-10 text-gray-600 bg-[#24473F]'>
            <div className='w-9/12 mx-auto pb-3'>
                <Image src={FooterLogo} alt="Logo" className='w-70 md:w-100  mx-auto mt-10' />
                <p className='mt-2 text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='mt-4 font-semibold text-white'>Social Links</p>
                <div className='flex justify-center gap-4 mt-2'>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"
                        className='text-gray-400 hover:text-white'>
                        <Image src={facebook} alt="Facebook" className='w-6 h-6' />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noreferrer"
                        className='text-gray-400 hover:text-white'>
                        <Image src={twitter} alt="Twitter" className='w-6 h-6' />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"
                        className='text-gray-400 hover:text-white'>
                        <Image src={instagram} alt="Instagram" className='w-6 h-6' />
                    </a>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center mt-6 w-8/12 mx-auto border-t border-gray-600 pt-6'>
                <p className='text-gray-500 text-xs'>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='flex flex-col md:flex-row md:gap-5 mt-2 text-xs space-y-2 md:space-y-0'>
                    <li>
                        <Link href="/" className='text-gray-500 hover:text-white'>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className='text-gray-500 hover:text-white'>
                            Terms of Service
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className='text-gray-500 hover:text-white'>
                            Cookies
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;