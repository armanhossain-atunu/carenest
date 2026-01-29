import DashboardSideBar from '@/Components/Dashboard/DashboardSideBar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex'>
            <DashboardSideBar></DashboardSideBar>
            <main className='ml-[200px]'>
            {children}
            </main>
        </div>
    );
};

export default layout;