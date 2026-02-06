import React from 'react';
import LogoImage from '@/assets/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';


const Logo = () => {
    return (
        <div >
            <Link href="/" className='flex items-center text-3xl font-bold'>Care
                <Image src={LogoImage} width={60} height={50} alt="Logo" className='mx-auto ' />
                <span className='text-primary'>Nest</span>
            </Link>
        </div>
    );
};

export default Logo;