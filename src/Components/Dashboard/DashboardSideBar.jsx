import Link from 'next/link';
import React from 'react';
import Logo from '../Shared/Logo';

const DashboardSideBar = () => {
    return (
        <div className='w-[200px] fixed top-0 text-center h-screen bg-zinc-50'>
            <div className='flex justify-center justify-center'>
                <Logo></Logo>
            </div>
            <div className='flex flex-col space-y-2'>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard/profile">Profile</Link>
                <Link href={"/dashboard/my-booking"}>My Booking</Link>
            </div>
        </div>
    );
};

export default DashboardSideBar;