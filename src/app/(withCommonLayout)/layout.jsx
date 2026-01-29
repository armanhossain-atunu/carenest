import Footer from '@/Components/Shared/Footer/Footer';
import Navbar from '@/Components/Shared/Header/Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <header className="sticky top-0 z-50">
                <Navbar></Navbar>
            </header>
            <main className="flex-1">
                {children}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;