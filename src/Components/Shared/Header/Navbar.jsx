"use client";
import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import NavLinks from './NavLink';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        try {
            const stored = localStorage.getItem('theme');
            const initial = stored || 'light';
           
            document.documentElement.setAttribute('data-theme', initial === 'light' ? 'light' : 'night');
        } catch (e) {}
    }, []);

    const toggleTheme = () => {
        const next = theme === 'light' ? 'night' : 'light';
        setTheme(next === 'light' ? 'light' : 'night');
        try {
            localStorage.setItem('theme', next === 'light' ? 'light' : 'night');
        } catch (e) {}
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
                            <NavLinks></NavLinks>
                        </ul>
                    </div>
                    <Link href="/">
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
                    <Link href="/login" className="btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;