"use client";
import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import NavLinks from './NavLink';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const { data: session, status } = useSession();
    console.log(session, 'session');

    useEffect(() => {
        try {
            const stored = localStorage.getItem('theme');
            const initial = stored || 'light';

            document.documentElement.setAttribute('data-theme', initial === 'light' ? 'light' : 'night');
        } catch (e) { }
    }, []);

    const toggleTheme = () => {
        const next = theme === 'light' ? 'night' : 'light';
        setTheme(next === 'light' ? 'light' : 'night');
        try {
            localStorage.setItem('theme', next === 'light' ? 'light' : 'night');
        } catch (e) { }
        document.documentElement.setAttribute('data-theme', next);
    };

    return (
        <div>
            <div className="navbar bg-base-100 shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Link href="/">
                                <Logo></Logo>
                            </Link>
                            <NavLinks></NavLinks>
                        </ul>
                    </div>
                    <Link href="/" className=" hidden lg:flex">
                        <Logo></Logo>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="btn btn-ghost mr-2"
                        title="Toggle dark mode">
                        {theme === 'light' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.78 4.22a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0zM16 9a1 1 0 011 1v0a1 1 0 11-2 0 1 1 0 011-1zM4.22 15.78a1 1 0 001.42 0l.7-.7a1 1 0 10-1.42-1.42l-.7.7a1 1 0 000 1.42zM15.78 15.78a1 1 0 000-1.42l-.7-.7a1 1 0 10-1.42 1.42l.7.7a1 1 0 001.42 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
                    {status === 'loading' ? (
                        <span className="loading loading-spinner text-primary"></span>
                    ) : session?.user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full border border-primary">
                                    <img
                                        alt="User Avatar"
                                        src={session?.user?.images || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="menu-title px-4 py-2 border-b border-base-200 mb-2">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold text-base-content">{session?.user?.name || "User"}</span>
                                        <span className="text-xs text-base-content/70 normal-case">{session?.user?.email}</span>
                                    </div>
                                </li>
                                <li><button onClick={() => signOut()} className="text-error font-semibold">Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <Link href="/login" className="btn btn-primary">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;