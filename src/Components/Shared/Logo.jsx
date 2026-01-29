import React from 'react';
import LogoImage from '@/assets/img/logo.png';
import Image from 'next/image';


const Logo = () => {
    return (
        <div >
            <h1 className='flex items-center text-3xl font-bold'>Care
                <Image src={LogoImage} width={60} height={50} alt="Logo" className='mx-auto ' />
                <span className='text-primary'>Nest</span> </h1>
        </div>
    );
};

export default Logo;