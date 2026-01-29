import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="text-center space-y-2">
                <h1 className="text-6xl font-bold">4<span className='text-primary'>0</span>4</h1>
                <h2 className="text-2xl font-bold">Page Not Found</h2>
                <Link href="/" className='btn'>Home</Link>
            </div>
        </div>
    );
};

export default notfound;